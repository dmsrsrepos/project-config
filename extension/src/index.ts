import { defineExtension, useCommands, useFsWatcher, watchEffect, WatchEffect } from 'reactive-vscode'
import { ConfigurationTarget, window } from 'vscode'
import { commands } from './meta'
import { testConfigs } from '@/meta'

const { activate, deactivate } = defineExtension(() => {

    const configValue = testConfigs.annotations.value //get value 
    testConfigs.annotations.value = true // set value
    //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    testConfigs.annotations.update(!configValue, ConfigurationTarget.WorkspaceFolder, true)


    const stop = watchEffect(() => {
        window.showInformationMessage(`testConfigs.annotations: ${testConfigs.annotations.value}`)
    })

    console.log('activate')
    const globs = testConfigs.partten

    const watcher = useFsWatcher(globs.value)
    watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

    useCommands({
        [commands.addWatchDir]: async () => {
            window.showInformationMessage(`handl name:${stop.toString()}`)
            stop()
            
        },
        [commands.removeWatchDir]: async () => {
            const value = await window.showInputBox({ prompt: 'Enter a glob' })
            if (value)
                globs.value = globs.value.filter(v => v !== value)
        },
    })
})

export { activate, deactivate }