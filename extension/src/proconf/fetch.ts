import type { FetchResponse } from 'ofetch'
import { fetch } from 'ofetch'
import type { ExtensionContext } from 'vscode'
import { ConfigurationTarget, window } from 'vscode'
import { FILE, MSG_PREFIX, URL_PREFIX } from '@/constants'
import { useConfigObjectFileNestingUpdater } from '@/generated-meta'
import { logger } from '@/utils'
import { defineConfigs } from 'reactive-vscode'

export async function fetchLatest(): Promise<Record<string, string>> {
  const config = useConfigObjectFileNestingUpdater()
  const repo = config.upstreamRepo
  const branch = config.upstreamBranch

  const url = `${URL_PREFIX}/${repo}@${branch}/${FILE}`
  logger.info('remote url:', url)

  const md = await fetch(url).then((r: FetchResponse<string>) => r._data)
  if (!md)
    return {}
  const content: string = (md.match(/```jsonc([\s\S]*?)```/) || [])[1] || ''

  const json = `{${content
    .trim()
    .split(/\n/g)
    .filter(line => !line.trim().startsWith('//'))
    .join('\n')
    .slice(0, -1)
  }}`

  const mdConfig = JSON.parse(json) || {}
  return mdConfig['explorer.fileNesting.patterns']
}

export async function fetchAndUpdate(ctx: ExtensionContext, prompt = true): Promise<void> {
  const { patterns, enabled, expand } = defineConfigs('explorer.fileNesting', {
    patterns: Object,
    enabled: Boolean,
    expand: Boolean,
  })
  const mdPatterns = await fetchLatest()
  let shouldUpdate = true

  const oringalPatterns = mdPatterns
  if (oringalPatterns)
    delete oringalPatterns['//']
  // no change
  if (Object.keys(oringalPatterns).length > 0 && JSON.stringify(patterns.value) === JSON.stringify(oringalPatterns))
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
    enabled.update(true, ConfigurationTarget.Global)
    expand.update(false, ConfigurationTarget.Global)
    patterns.update({
      '//': `Last update at ${new Date().toLocaleString()}`,
      ...patterns,
    }, ConfigurationTarget.Global)
    // config.$update("explorer.fileNesting.enabled", true, ConfigurationTarget.Global, true)
    // config.$update('explorer.fileNesting.expand', false, ConfigurationTarget.Global)
    // config.$update('explorer.fileNesting.patterns', {
    //   '//': `Last update at ${new Date().toLocaleString()}`,
    //   ...patterns,
    // }, ConfigurationTarget.Global)

    ctx.globalState.update('lastUpdate', Date.now())

    window.showInformationMessage(`${MSG_PREFIX} Config updated`)
  }
}
