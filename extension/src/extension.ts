import { defineExtension, useCommand, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { logger } from './utils'
import * as meta from './generated/meta'
import { config } from './configs'

const { activate, deactivate } = defineExtension(() => {
  logger.info('Extension Activated')
  // 'vscode-project-config-updater.helloWorld'
  useCommand(meta.commands.manualUpdate, () => {
    window.showInformationMessage(config.color)
    config.$update("autoUpdate", !config.autoUpdate)
  })

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    logger.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
