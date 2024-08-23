import { defineConfigs } from 'reactive-vscode'

export const { message } = defineConfigs('vscode-project-config-updater', {
  message: 'string',
})
