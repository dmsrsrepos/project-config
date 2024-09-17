import { defineExtension, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { logger } from '@/utils'
import { useConfigObjectEmeraldwalk, useCommands } from '@/generated-meta'

const { activate, deactivate } = defineExtension(() => {
  logger.info('Extension Activated')
  // 'vscode-project-kit.helloWorld'
  const configObjectEmeraldwalk = useConfigObjectEmeraldwalk()

  useCommands({
    'project-kit.manualUpdate': (..._args: any[]) => {
      window.showInformationMessage(`${configObjectEmeraldwalk.runonsave.shell}`)
      // useConfigObjectFileNestingUpdater.$update('autoUpdate', configObjectFileNestingUpdater.autoUpdate)
    },
    'extension.emeraldwalk.disableRunOnSave': () => {
      logger.info('Disable Run On Save')
    },
    'extension.emeraldwalk.enableRunOnSave': () => {
      logger.info('Enable Run On Save')
    },
  })

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    logger.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
