import { defineExtension, reactive, useCommand, useCommands, useFsWatcher } from 'reactive-vscode'
import { window } from 'vscode'
import { projectConfigTest } from '@configs'
import { commands } from './meta'

const { activate, deactivate } = defineExtension(() => {
    const globs = projectConfigTest.partten

    const watcher = useFsWatcher(globs.value)
    watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

    useCommands({
        [commands.addWatchDir]: async () => {
            const value = await window.showInputBox({ prompt: 'Enter a glob' })
            if (value)
                globs.value.push(value)
        },
        [commands.removeWatchDir]: async () => {
            const value = await window.showInputBox({ prompt: 'Enter a glob' })
            if (value)
                globs.value = globs.value.filter(v => v !== value)
        },
    })
})

export { activate, deactivate }