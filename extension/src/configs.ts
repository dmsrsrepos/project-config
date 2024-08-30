import { defineConfigObject, defineConfigs } from 'reactive-vscode'
import * as meta from './sys/generated/meta' 
// 'vscode-project-config-updater'
export const configsObject = defineConfigObject(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)


export const configs = defineConfigs(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)

export const projectConfigTest = defineConfigs(meta.scopedprojectConfigTestConfigs.scope, meta.scopedprojectConfigTestConfigs.defaults)