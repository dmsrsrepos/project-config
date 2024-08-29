import { defineExtension, useCommand, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { logger } from '@/utils'
import { commands } from '@/sys/generated/meta'
import { configsObject as config } from '@/configs'

const { activate, deactivate } = defineExtension(() => {
  logger.info('Extension Activated')
  // 'vscode-project-config-updater.helloWorld'
  useCommand(commands.manualUpdate, () => {
    window.showInformationMessage(config['test.color'])
    config.$update("fileNestingUpdater.autoUpdate", !config['fileNestingUpdater.autoUpdate'])
  })

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    logger.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
