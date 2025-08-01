import type { ProjectConfig } from '@/generated/meta'
import { exec } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import vscode from 'vscode'
import * as re from 'reactive-vscode'
import * as meta from '@/generated/meta'
import * as fg from 'fast-glob'

interface ICommand {
    match?: string
    notMatch?: string
    cmd: string
    isAsync: boolean
}

export class RunOnSaveExtension {
    private _outputChannel: vscode.OutputChannel
    private _context: re.ShallowRef<vscode.ExtensionContext | null>
    private _config: ProjectConfig['runonsave']

    constructor() {
        this._context = re.extensionContext
        this._outputChannel = meta.useOutputChannel() // vscode.window.createOutputChannel('Run On Save')
        this._config = meta.useConfigObjectProjectConfig().runonsave
    }

    /** Recursive call to run commands. */
    private _runCommands(
        commands: Array<ICommand>
    ): void {
        const document = re.useActiveTextEditor().value?.document
        if (document === undefined) {
            return
        }
        if (commands.length) {
            const cfg = commands.shift()
            if (cfg !== undefined) {
                this.showOutputMessage(`*** cmd start: ${cfg.cmd}`)
                const child = exec(cfg.cmd, this._getExecOption(document))
                child.stdout?.on('data', data => this._outputChannel.append(data))
                child.stderr?.on('data', data => this._outputChannel.append(data))
                child.on('error', (e) => {
                    this.showOutputMessage(e.message)
                    this.showOutputMessage((e as Error).message)
                })
                child.on('exit', (_e) => {
                    // if sync
                    if (!cfg.isAsync) {
                        this._runCommands(commands)
                    }
                })

                // if async, go ahead and run next command
                if (cfg.isAsync) {
                    this._runCommands(commands)
                }
            }
        }
        else {
            // NOTE: This technically just marks the end of commands starting.
            // There could still be asyc commands running.
            this.showStatusMessage('Run on Save done.')
        }
    }

    private _getExecOption(
        document: vscode.TextDocument,
    ): { shell: string, cwd?: string } {
        return {
            shell: this._config.shell ?? "",
            cwd: this._getWorkspaceFolderPath(document.uri),
        }
    }

    private _getWorkspaceFolderPath(uri: vscode.Uri): string | undefined {
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri)

        // NOTE: rootPath seems to be deprecated but seems like the best fallback so that
        // single project workspaces still work. If I come up with a better option, I'll change it.
        return workspaceFolder
            ? workspaceFolder.uri.fsPath
            : vscode.workspace.rootPath
    }

    public get isEnabled(): boolean {
        return !!this._context.value?.globalState.get('isEnabled', true)
    }

    public set isEnabled(value: boolean) {
        this._context.value?.globalState.update('isEnabled', value)
        this.showOutputMessage()
    }
    /**
     * Show message in output channel
     */
    public showOutputMessage(message?: string): void {
        message = message || `Run On Save ${this.isEnabled ? 'enabled' : 'disabled'}.`
        this._outputChannel.appendLine(message)
    }

    /**
     * Show message in status bar and output channel.
     * Return a disposable to remove status bar message.
     */
    public showStatusMessage(message: string) {
        this.showOutputMessage(message)
        vscode.window.showInformationMessage(message)
    }
    public isPathMatchGlob(cfg: ICommand, filePath: string) {
        const matchPattern = cfg.match || ''
        const negatePattern = cfg.notMatch || ''

        const match = path.matchesGlob(matchPattern, filePath)
        const match1 = !path.matchesGlob(negatePattern, filePath)

        return match && match1

        // const roots = re.useWorkspaceFolders().value?.filter(v => !!v)
        // if (!roots)
        //     return false
        // const files = roots.flatMap(r => fg.globSync(matchPattern, {
        //     ignore: [negatePattern],
        //     absolute: true,
        //     cwd: r.uri.fsPath,
        // }))
        // return files.includes(filePath)
    }

    public runCommands(document: vscode.TextDocument): void {
        if (this._config.autoClearConsole) {
            this._outputChannel.clear()
        }

        if (!this.isEnabled || this._config.commands.length === 0) {
            this.showOutputMessage()
            return
        }

        const match = (cfg: ICommand): boolean => this.isPathMatchGlob(cfg, document.fileName)

        const commandConfigs = this._config.commands
            .filter((cfg) => {
                try {
                    return match(cfg)
                } catch (e) {
                    if (e instanceof Error) {
                        this.showOutputMessage(e.message)
                    }
                    else {
                        this.showOutputMessage(e?.toString())
                    }
                    return false
                }

            })

        if (commandConfigs.length === 0) {
            return
        }

        this.showStatusMessage('Running on save commands...')

        // build our commands by replacing parameters with values
        const commands: Array<ICommand> = []
        for (const cfg of commandConfigs) {
            let cmdStr = cfg.cmd

            const extName = path.extname(document.fileName)
            const workspaceFolderPath = this._getWorkspaceFolderPath(document.uri)
            if (!workspaceFolderPath) {
                continue
            }
            const relativeFile = path.relative(workspaceFolderPath, document.uri.fsPath)

            cmdStr = cmdStr.replace(/\$\{file\}/g, `${document.fileName}`)

            // DEPRECATED: workspaceFolder is more inline with vscode variables,
            // but leaving old version in place for any users already using it.
            cmdStr = cmdStr.replace(/\$\{workspaceRoot\}/g, workspaceFolderPath)

            cmdStr = cmdStr.replace(/\$\{workspaceFolder\}/g, workspaceFolderPath)
            cmdStr = cmdStr.replace(/\$\{fileBasename\}/g, path.basename(document.fileName))
            cmdStr = cmdStr.replace(/\$\{fileDirname\}/g, path.dirname(document.fileName))
            cmdStr = cmdStr.replace(/\$\{fileExtname\}/g, extName)
            cmdStr = cmdStr.replace(/\$\{fileBasenameNoExt\}/g, path.basename(document.fileName, extName))
            cmdStr = cmdStr.replace(/\$\{relativeFile\}/g, relativeFile)
            cmdStr = cmdStr.replace(/\$\{cwd\}/g, process.cwd())

            // replace environment variables ${env.Name}
            cmdStr = cmdStr.replace(/\$\{env\.([^}]+)\}/g, (sub: string, envName: string) => {
                const a = process.env[envName] as string
                return a
            })

            commands.push({
                cmd: cmdStr,
                isAsync: !!cfg.isAsync,
            })
        }

        this._runCommands(commands)
    }
}
