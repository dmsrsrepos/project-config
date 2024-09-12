import { defineExtension, useCommands, Commands, useFsWatcher, watchEffect } from 'reactive-vscode'
import { ConfigurationTarget, window } from 'vscode'
import { configEmeraldwalk as useConfigsEmeraldwalk, useCommandsBase, useCommandStopWatch } from '@/generated-meta'


const { activate, deactivate } = defineExtension(() => {
  const stop = watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${useConfigsEmeraldwalk.runonsave.value.shell}`)
  })
  // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder


  console.log('activate')
  const globs = useConfigsEmeraldwalk.runonsave.value.shell ?? "cmd"

  const watcher = useFsWatcher(globs)
  watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))




  useCommandsBase({
    "project-config.manualUpdate": () => {
      window.showInformationMessage(`handl name:${stop.toString()}`)
      stop()
    },
    "extension.emeraldwalk.disableRunOnSave": () => {

    }
  })


})

export { activate, deactivate }
