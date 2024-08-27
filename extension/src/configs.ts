import { defineConfigObject, defineConfigs } from 'reactive-vscode'
import * as Meta from './generated/meta'

// 'vscode-project-config-updater'
export const config = defineConfigObject<Meta.ScopedConfigKeyTypeMap>(
  Meta.scopedConfigs.scope,
  Meta.scopedConfigs.defaults,
)
