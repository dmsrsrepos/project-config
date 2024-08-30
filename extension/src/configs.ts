import { defineConfigObject, defineConfigs } from 'reactive-vscode'
import * as meta from './sys/generated/meta'
import exp from 'constants'

// 'vscode-project-config-updater'
export const configsObject = defineConfigObject<meta.ScopedConfigKeyTypeMap>(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)


export const configs = defineConfigs<meta.ScopedConfigKeyTypeMap>(
  meta.scopedConfigs.scope,
  meta.scopedConfigs.defaults,
)

export const shorten = defineConfigObject<meta.ConfigShorthandMap>(undefined, meta.configs)