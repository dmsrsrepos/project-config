import {
  defineExtension, extensionContext as ctxRef, useCommand, useIsDarkTheme, useVscodeContext,
  watchEffect,
} from 'reactive-vscode'
import { config } from './configs'
import { fetchAndUpdate } from './fetch'
import { commands } from './generated/meta'

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
  const ctx = ctxRef.value!
  useCommand(commands.manualUpdate, (..._args) => {

    fetchAndUpdate(ctx, false)
  })

  const lastUpdate = ctx.globalState.get('lastUpdate', 0)
  const initialized = ctx.globalState.get('init', false)
  const autoUpdateInterval = config.autoUpdateInterval

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
