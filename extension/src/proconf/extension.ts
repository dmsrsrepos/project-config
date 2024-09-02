import { defineExtension, useCommand, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { logger } from '../utils'
import { commands } from '../meta'
import { configsObject } from '../configs'

const { activate, deactivate } = defineExtension(() => {
  logger.info('Extension Activated')
  // 'vscode-project-config-updater.helloWorld'
  useCommand(commands.manualUpdate, () => {
    window.showInformationMessage(configsObject['test.color'])
    configsObject.$update("fileNestingUpdater.autoUpdate", !configsObject['fileNestingUpdater.autoUpdate'])
  })

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    logger.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
