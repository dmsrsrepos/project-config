import { defineConfigs } from 'reactive-vscode'
import { configs } from './generated-meta'

export const { message } = defineConfigs('vscode-project-config-updater', {
  message: 'string',
})

export const { patterns } = defineConfigs('explorer.fileNesting.patterns', {
  scope: 'user',
  patterns: 'object',
})
