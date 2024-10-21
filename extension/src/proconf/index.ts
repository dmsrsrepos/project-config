import {
  extensionContext as ctxRef,
  defineExtension,
} from 'reactive-vscode'
import { useConfigObjectFileNestingUpdater, useCommandManualUpdate } from '@/meta'
import { fetchAndUpdate } from './fetch'

const { activate, deactivate } = defineExtension(() => {
  const config = useConfigObjectFileNestingUpdater()
  const ctx = ctxRef.value
  if (ctx) {
    useCommandManualUpdate((..._args) => {
      fetchAndUpdate(ctx, false)
    })

    const initialized = ctx.globalState.get('init', false)
    if (!initialized) {
      ctx.globalState.update('init', true)
      fetchAndUpdate(ctx, false)
    }

    const lastUpdate = ctx.globalState.get('lastUpdate', 0)
    if (config.autoUpdateInterval) {
      if (Date.now() - lastUpdate >= config.autoUpdateInterval * 60_000)
        fetchAndUpdate(ctx, config.promptOnAutoUpdate)
    }
  }
})

export { activate, deactivate }
