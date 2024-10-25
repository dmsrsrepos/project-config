import * as meta from '@/generated/meta'
import { defineExtension, defineConfigObject, executeCommand, ref, useFsWatcher, useStatusBarItem, watchEffect } from 'reactive-vscode'
import { ConfigurationTarget, StatusBarAlignment, commands as vscommands, window, workspace } from 'vscode'



const { activate, deactivate } = defineExtension(() => {
  const logger = meta.useLogger()
  logger.info('activate')
  const demo = meta.useConfigObjectDemo()

  watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${demo.description}`)
    logger.warn(`testConfigs.annotations: ${demo.description}`)
  })

  meta.useCommandUpdateDes(async () => {
    demo.$update('description', `Now-${Date.now()}`)
  })

  const option = meta.statusBarItemOption(meta.commands.sayHello)
  const button = useStatusBarItem(option)
  button.show()

  const counter = ref(0)
  useStatusBarItem({
    alignment: StatusBarAlignment.Left,
    command: meta.commands.sayGoodbye,
    priority: 100,
    text: () => `$(megaphone) Hello*${counter.value}`,
  }).show()

  const config = defineConfigObject('explorer.fileNesting', {
    enabled: true,
    expand: Boolean,
  })

  watchEffect(() => {
    window.showInformationMessage(`enabled:${config.enabled};expand:${config.expand}`)
    logger.warn(`testConfigs.annotations: ${config.enabled}`)
  })
  meta.useCommands({
    [meta.commands.sayHello]: () => config.$update('enabled', !config.enabled, ConfigurationTarget.Global),
    [meta.commands.sayGoodbye]: () => config.$update('expand', !config.expand, ConfigurationTarget.Global),
  })
})
export { activate, deactivate }
