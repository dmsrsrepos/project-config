import { commands, useCommands, useLogger, useStatusBarItemFromCommand } from '@/generated-meta'
import { defineExtension, executeCommand, ref, useFsWatcher, useStatusBarItem, watchEffect } from 'reactive-vscode'
import { AccessibilityInformation, StatusBarAlignment, commands as vscommands, window, workspace } from 'vscode'
import { useCommandUpdateDes, useConfigObjectDemo } from './generated-meta'

const { activate, deactivate } = defineExtension(() => {
  const logger = useLogger()
  logger.info('activate')
  const demo = useConfigObjectDemo()

  watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${demo.description}`)
    logger.warn(`testConfigs.annotations: ${demo.description}`)
  })

  useCommandUpdateDes(async (..._args: any[]) => {
    demo.$update('description', `Now-${Date.now()}`)
  })

  const button = useStatusBarItemFromCommand(commands.sayHello)

  button.show()

  const counter = ref(0)
  useStatusBarItem({
    alignment: StatusBarAlignment.Left,
    command: commands.sayGoodbye,
    priority: 100,
    text: () => `$(megaphone) Hello*${counter.value}`,
  }).show()

  useCommands({
    [commands.sayHello]: () => counter.value++,
    [commands.sayGoodbye]: () => counter.value--,
  })
})
export { activate, deactivate }
