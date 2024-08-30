import { defineConfigObject, defineConfigs } from 'reactive-vscode'
import * as meta from './meta'
// 'vscode-project-config-updater'
export const configsObject = defineConfigObject<meta.ScopedConfigKeyTypeMap>(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)


export const configs = defineConfigs<meta.ScopedConfigKeyTypeMap>(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)

export const projectConfigTest = defineConfigs<meta.ScopedprojectConfigTestConfigKeyTypeMap>(meta.scopedprojectConfigTestConfigs.scope, meta.scopedprojectConfigTestConfigs.defaults)

