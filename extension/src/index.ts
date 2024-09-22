import { defineExtension, useFsWatcher, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import {
  useConfigObjectProjectKit,
  useLogger,
  useCommands,
  commands,
} from '@/generated-meta'

const { activate, deactivate } = defineExtension(() => {
  const logger = useLogger()
  const emeraldwalk = useConfigObjectProjectKit()

  const stop = watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${emeraldwalk.runonsave.shell}`)
    logger.warn(`testConfigs.annotations: ${emeraldwalk.runonsave.shell}`)
  })
  // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder

  logger.info('activate')
  const globs = emeraldwalk.shell ?? 'cmd'

  const watcher = useFsWatcher(globs)
  watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

  useCommands({
    [commands.manualUpdate]: (..._args: any[]) => {
      window.showInformationMessage(`handl name:${stop?.toString()}`)
      logger.warn(`handl name:${stop?.toString()}`)
    },
    [commands.disableRunOnSave]: () => {
      logger.info('Disable Run On Save')
    },
    [commands.enableRunOnSave]: () => {
      logger.info('Enable Run On Save')
    },
    [commands.changeAnnnotations]: () => {
      logger.info('Change Annnotations')
    },
    [commands.stopWatch]: () => {
      logger.info('Stop Watch')
    },

  })
})
export { activate, deactivate }
