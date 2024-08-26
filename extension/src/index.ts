import {
  defineExtension, extensionContext, useCommand, useIsDarkTheme, useVscodeContext,
  watchEffect
} from 'reactive-vscode'
import { getConfig } from './config'
import { fetchAndUpdate } from './fetch'
import { commands } from './generated-meta'

// export async function activate(ctx: ExtensionContext) {
//   commands.registerCommand('cnjimbo.project-config.manualUpdate', () => fetchAndUpdate(ctx, false))

//   const lastUpdate = ctx.globalState.get('lastUpdate', 0)
//   const initialized = ctx.globalState.get('init', false)
//   const autoUpdateInterval = getConfig<number>('fileNestingUpdater.autoUpdateInterval')!

//   if (!initialized) {
//     ctx.globalState.update('init', true)
//     fetchAndUpdate(ctx, false)
//   }

//   if (getConfig('fileNestingUpdater.autoUpdate')) {
//     if (Date.now() - lastUpdate >= autoUpdateInterval * 60_000)
//       fetchAndUpdate(ctx, getConfig('fileNestingUpdater.promptOnAutoUpdate'))
//   }
// }

// export function deactivate() { }

const { activate, deactivate } = defineExtension(() => {
  useCommand(commands.cnjimboProjectConfigManualUpdate, (..._args) => {
    const ctx = extensionContext.value!
    fetchAndUpdate(ctx, false)
  })

  const lastUpdate = ctx.globalState.get('lastUpdate', 0)
  const initialized = ctx.globalState.get('init', false)
  const autoUpdateInterval = getConfig<number>('fileNestingUpdater.autoUpdateInterval')!

  if (!initialized) {
    ctx.globalState.update('init', true)
    fetchAndUpdate(ctx, false)
  }

  if (getConfig('fileNestingUpdater.autoUpdate')) {
    if (Date.now() - lastUpdate >= autoUpdateInterval * 60_000)
      fetchAndUpdate(ctx, getConfig('fileNestingUpdater.promptOnAutoUpdate'))
  }
})

export { activate, deactivate }
