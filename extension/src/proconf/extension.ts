import { defineExtension, useCommand, useIsDarkTheme, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { logger } from '@/utils'
import { commands, testConfigObject } from '@/meta'

const { activate, deactivate } = defineExtension(() => {
  logger.info('Extension Activated')
  // 'vscode-project-config-updater.helloWorld'
  useCommand(commands.manualUpdate, () => {
    window.showInformationMessage(testConfigObject.color)
    testConfigObject.$update("annotations", !testConfigObject.annotations)
  })

  const isDark = useIsDarkTheme()
  watchEffect(() => {
    logger.info('Is Dark Theme:', isDark.value)
  })
})

export { activate, deactivate }
