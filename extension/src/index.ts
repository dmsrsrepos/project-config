import { defineExtension, useCommands, Commands, useCommand, useFsWatcher, watchEffect } from 'reactive-vscode'
import { ConfigurationTarget, window } from 'vscode'
import { commands, emeraldwalkConfigs } from '@/generated-meta'


const { activate, deactivate } = defineExtension(() => {
  const stop = watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${emeraldwalkConfigs.runonsave.value.shell}`)
  })
  // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder


  console.log('activate')
  const globs = emeraldwalkConfigs.runonsave.value.shell ?? "cmd"

  const watcher = useFsWatcher(globs)
  watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))



  function useuseCommandStopWatch(callback: (...args: any[]) => any) {
    useCommand(commands.stopWatch, callback)
  }

  const ob: Partial<Commands> = {
    [commands.stopWatch]: () => {
      window.showInformationMessage(`handl name:${stop.toString()}`)
      stop()
    },
    [commands.changeAnnnotations]() {
      // emeraldwalkConfigs.annotations.update(!testConfigs.annotations.value, ConfigurationTarget.Workspace, true)
    }
  }

  useCommands(ob)


})

export { activate, deactivate }
