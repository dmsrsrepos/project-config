import { defineExtension, useCommands, useFsWatcher, watchEffect, WatchEffect } from 'reactive-vscode'
import { ConfigurationTarget, window } from 'vscode'
import { commands } from './meta'
import { testConfigs } from '@/meta'

const { activate, deactivate } = defineExtension(() => {

 
    const stop = watchEffect(() => {
        window.showInformationMessage(`testConfigs.annotations: ${testConfigs.annotations.value}`)
    })
    //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder

    console.log('activate')
    const globs = testConfigs.partten

    const watcher = useFsWatcher(globs.value)
    watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

    useCommands({
        [commands.stopWatch]: async () => {
            window.showInformationMessage(`handl name:${stop.toString()}`)
            stop()
            
        },
        [commands.changeAnnnotations]: async () => {
            testConfigs.annotations.update(!testConfigs.annotations.value, ConfigurationTarget.Workspace, true)
        },
    })
})

export { activate, deactivate }