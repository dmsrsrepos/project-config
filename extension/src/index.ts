import { useConfigObjectProjectKit } from './generated-meta';
import { defineExtension, useFsWatcher, watchEffect } from 'reactive-vscode'
import { window, workspace } from 'vscode'
import {
  useLogger,
  useCommands,
  commands,
} from '@/generated-meta'

const { activate, deactivate } = defineExtension(() => {
  const logger = useLogger()
  const projectKit = useConfigObjectProjectKit()

  const stop = watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${projectKit.runonsave}`)
    logger.warn(`testConfigs.annotations: ${projectKit.runonsave}`)
  })
  // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder

  logger.info('activate')
  // const globs = runonsave.shell ?? 'cmd'

  // const watcher = useFsWatcher(globs)
  // watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

  const section = "project-kit.runonsave"
  const key = "autoClearConsole"
  const isTopLevel = !section
  const workspaceConfig = workspace.getConfiguration(isTopLevel ? undefined : section)

  useCommands({
    [commands.manualUpdate]: async (..._args: any[]) => {
    
      //  runonsave.$update('autoClearConsole', true)
      const v = workspaceConfig.get(key) as Boolean
      await workspaceConfig.update(`${key}`, !v)
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
