import {
  useConfigObjectDemo, useCommandUpdateDes
} from './generated-meta';
import {
  defineExtension, useFsWatcher, watchEffect, executeCommand, useStatusBarItem, ref
} from 'reactive-vscode'
import {
  workspace, commands as vscommands, window, StatusBarAlignment, AccessibilityInformation
} from 'vscode'
import {
  useLogger, useCommands, commands, useStatusBarItemFromCommand
} from '@/generated-meta'

const { activate, deactivate } = defineExtension(() => {
  const logger = useLogger()
  logger.info('activate')
  const demo = useConfigObjectDemo()

  const stop = watchEffect(() => {
    window.showInformationMessage(`testConfigs.annotations: ${demo.description}`)
    logger.warn(`testConfigs.annotations: ${demo.description}`)
  })

  useCommandUpdateDes(async (..._args: any[]) => {
    demo.$update('description', `Now-${Date.now()}`)

  })

  let button = useStatusBarItemFromCommand(commands.sayHello)

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
