import { defineExtension, useFsWatcher, watchEffect } from 'reactive-vscode'
import { ConfigurationTarget, window } from 'vscode'
import { configEmeraldwalk as useConfigsEmeraldwalk, useCommands, useLogger, useOutputChannel, useCommandManualUpdate } from '@/generated-meta'


const { activate, deactivate } = defineExtension(() => {
  const logger = useLogger()
  const output = useOutputChannel()
  const stop = watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${useConfigsEmeraldwalk.runonsave.value.shell}`)
    logger.warn(`testConfigs.annotations: ${useConfigsEmeraldwalk.runonsave.value.shell}`)
    output.appendLine(`testConfigs.annotations: ${useConfigsEmeraldwalk.runonsave.value.shell}`)
  })
  // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder


  console.log('activate')
  const globs = useConfigsEmeraldwalk.runonsave.value.shell ?? "cmd"

  const watcher = useFsWatcher(globs)
  watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

  useCommandManualUpdate(() => {
    window.showInformationMessage(`handl name:${stop?.toString()}`)
    logger.warn(`handl name:${stop?.toString()}`)
    output.appendLine(`handl name:${stop?.toString()}`)
  })

})

export { activate, deactivate }
