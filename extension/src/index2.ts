import { defineExtension, useCommands, useFsWatcher } from 'reactive-vscode'
import { ConfigurationTarget, window } from 'vscode'
import { commands } from './meta'
import { testConfigs, testConfigObject } from '@/meta'

const { activate, deactivate } = defineExtension(() => {

    let configValue = testConfigs.annotations.value //get value 
    testConfigs.annotations.value = true // set value
    //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    testConfigs.annotations.update(!configValue, ConfigurationTarget.WorkspaceFolder, true)


    let configValue1 = testConfigObject.annotations //get value 
    testConfigObject.annotations = true // set value
    //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    testConfigObject.$update("annotations", !configValue1, ConfigurationTarget.Workspace, true)

    console.log('activate')
    const globs = testConfigs.partten

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