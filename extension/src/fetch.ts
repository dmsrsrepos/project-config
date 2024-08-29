import type { FetchResponse } from 'ofetch'
import { fetch } from 'ofetch'
import type { ExtensionContext } from 'vscode'
import { ConfigurationTarget, window, workspace } from 'vscode'
import { FILE, MSG_PREFIX, URL_PREFIX } from './constants'
import { configs, configsObject } from './configs'
import * as meta from './generated/meta'

import { defineConfigs, defineConfigObject, extensionContext, useLogger } from 'reactive-vscode'

export async function fetchLatest(): Promise<Record<string, string>> {
  let logger = useLogger(meta.name)
  const repo = configs['fileNestingUpdater.upstreamRepo']
  const branch = configs['fileNestingUpdater.upstreamBranch']

  const url = `${URL_PREFIX}/${repo}@${branch}/${FILE}`
  logger.info('remote url:', url)

  const md = await fetch(url).then((r: FetchResponse<string>) => r._data)

  const content: string = (md.match(/```jsonc([\s\S]*?)```/) || [])[1] || ''

  const json = `{${content
    .trim()
    .split(/\n/g)
    .filter(line => !line.trim().startsWith('//'))
    .join('\n')
    .slice(0, -1)
    }}`

  const config = JSON.parse(json) || {}
  return config['explorer.fileNesting.patterns']
}

export async function fetchAndUpdate(ctx: ExtensionContext, prompt = true): Promise<void> {

  const config = defineConfigObject(undefined, {
    "explorer.fileNesting.patterns": Object,
    "explorer.fileNesting.enabled": Boolean,
    "explorer.fileNesting.expand": Boolean
  })


  const patterns = await fetchLatest()
  let shouldUpdate = true

  const oringalPatterns = config['explorer.fileNesting.patterns']
  if (oringalPatterns)
    oringalPatterns['//'] = undefined
  // no change
  if (Object.keys(oringalPatterns).length > 0 && JSON.stringify(patterns) === JSON.stringify(oringalPatterns))
    return

  if (prompt) {
    const buttonUpdate = 'Update'
    const buttonSkip = 'Skip this time'
    const result = await window.showInformationMessage(
      `${MSG_PREFIX} new config found, do you want to update?`,
      buttonUpdate,
      buttonSkip,
    )
    shouldUpdate = result === buttonUpdate
  }



  if (shouldUpdate) {
    config.$update("explorer.fileNesting.enabled", true, ConfigurationTarget.Global, true)
    config.$update('explorer.fileNesting.expand', false, ConfigurationTarget.Global)
    config.$update('explorer.fileNesting.patterns', {
      '//': `Last update at ${new Date().toLocaleString()}`,
      ...patterns,
    }, ConfigurationTarget.Global)

    ctx.globalState.update('lastUpdate', Date.now())

    window.showInformationMessage(`${MSG_PREFIX} Config updated`)
  }
}
