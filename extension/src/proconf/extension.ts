import { defineExtension, useCommand, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { logger } from '@/utils'
import { configObjectFileNestingUpdater, useCommandsBase } from '@/generated-meta'

const { activate, deactivate } = defineExtension(() => {
  logger.info('Extension Activated')
  // 'vscode-project-config-updater.helloWorld'

  const commands = {
    "project-config.manualUpdate": (...args: any[]) => {
      window.showInformationMessage('' + configObjectFileNestingUpdater.autoUpdate)
      // useConfigObjectFileNestingUpdater.$update('autoUpdate', configObjectFileNestingUpdater.autoUpdate)
    },
  }
  useCommandsBase(commands)

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    logger.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
