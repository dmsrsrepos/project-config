import { defineConfigObject, defineConfigs } from 'reactive-vscode'
import * as meta from '@/meta'
// 'vscode-project-config-updater'
export const configsObject = defineConfigObject<meta.ScopedConfigKeyTypeMap>(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)


export const configs = defineConfigs<meta.ScopedConfigKeyTypeMap>(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)

export const testConfigs = defineConfigs<meta.TestConfigs>(
  meta.testConfigs.scope,
  meta.testConfigs.defaults
)

export const fileNestingUpdaterConfigs = defineConfigObject<meta.FileNestingUpdaterConfigs>(
  meta.fileNestingUpdaterConfigs.scope,
  meta.fileNestingUpdaterConfigs.defaults
)


