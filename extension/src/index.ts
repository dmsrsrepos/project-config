import {
  defineExtension, extensionContext as ctxRef, useCommand, useIsDarkTheme, useVscodeContext,
  watchEffect, useWindowState
} from 'reactive-vscode'
import { configsObject as config } from './configs'
import { fetchAndUpdate } from './fetch'
import { commands } from './generated/meta'


const { activate, deactivate } = defineExtension(() => {
 
  const ctx = ctxRef.value
  if (ctx) {
    useCommand(commands.manualUpdate, (..._args) => {
      fetchAndUpdate(ctx, false)
    })

    const initialized = ctx.globalState.get('init', false)
    if (!initialized) {
      ctx.globalState.update('init', true)
      fetchAndUpdate(ctx, false)
    }

    const lastUpdate = ctx.globalState.get('lastUpdate', 0)
    if (config['fileNestingUpdater.autoUpdateInterval']) {
      if (Date.now() - lastUpdate >= config['fileNestingUpdater.autoUpdateInterval'] * 60_000)
        fetchAndUpdate(ctx, config['fileNestingUpdater.promptOnAutoUpdate'])
    }
  }

})

export { activate, deactivate }
