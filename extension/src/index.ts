import { defineExtension } from 'reactive-vscode'

import { activate as runOnChange } from '@/runOnChange/extension'

const { activate, deactivate } = defineExtension(() => {
  runOnChange()
})
export { activate, deactivate }
