import * as meta from '@/generated/meta'
import { defineExtension, executeCommand, ref, useFsWatcher, useStatusBarItem, watchEffect } from 'reactive-vscode'
import { AccessibilityInformation, StatusBarAlignment, commands as vscommands, window, workspace } from 'vscode'


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

  meta.useCommands({
    [meta.commands.sayHello]: () => counter.value++,
    [meta.commands.sayGoodbye]: () => counter.value--,
  })
})
export { activate, deactivate }
