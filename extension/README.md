<br>

<p align="center">
<img src="https://raw.githubusercontent.com/antfu/vscode-project-config-config/main/extension/res/logo.png" style="width:100px;" />
</p>

<h1 align="center">Project Config Updater</h1>

<p align="center">
Auto updater for <a href="https://github.com/open-dmsrs/vscode-project-config-updater" target="_blank"><code>vscode-project-config-config</code></a>.<br>
A config to make your file tree cleaner with the <a href="https://code.visualstudio.com/updates/v1_64#_explorer-project-config">file nesting feature</a> of VS Code.</a>
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=cnjimbo.project-config" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/cnjimbo.project-config.svg?color=blue&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>

![](https://user-images.githubusercontent.com/11247099/157142238-b00deecb-8d56-424f-9b20-ef6a6f5ddf99.png)

## Configurations

```json
{
  "fileNestingUpdater.autoUpdate": true,
  "fileNestingUpdater.autoUpdateInterval": 720,
  "fileNestingUpdater.promptOnAutoUpdate": true,
  "fileNestingUpdater.upstreamRepo": "antfu/vscode-project-config-config",
  "fileNestingUpdater.upstreamBranch": "main"
}
```

<!-- commands -->

| Command                           | Title                                     |
| --------------------------------- | ----------------------------------------- |
| `project-config.manualUpdate`     | Project Config Updater: Update config now |
| `project-config.remove-watch-dir` | Project Config Updater: remove watch dir  |
| `project-config.add-watch-dir`    | Project Config Updater: add watch dir     |

<!-- commands -->

<!-- configs -->

| Key                                                    | Description                                                                                                                          | Type           | Default                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------------------------------ |
| `xxx`                                                  | Enabled project-config inline annotations                                                                                            | `boolean`      | `true`                               |
| `project-config.test.annotations`                      | Enabled project-config inline annotations                                                                                            | `boolean`      | `true`                               |
| `project-config.test.color`                            | Icon color hex for inline displaying                                                                                                 | `string`       | `"auto"`                             |
| `project-config.test.partten`                          | Icon color hex for inline displaying                                                                                                 | `array`        | `["src /**/*","docs /**/*"]`         |
| `project-config.test.position`                         | Position the icon before or after the icon name                                                                                      | `string`       | `"before"`                           |
| `project-config.fileNestingUpdater.autoUpdate`         | Fetch and update the latest config automatically                                                                                     | `boolean`      | `true`                               |
| `project-config.fileNestingUpdater.promptOnAutoUpdate` | Should show up the prompt before doing auto update                                                                                   | `boolean`      | `true`                               |
| `project-config.fileNestingUpdater.autoUpdateInterval` | The minimal interval for auto update, in minutes                                                                                     | `number`       | `4320`                               |
| `project-config.fileNestingUpdater.upstreamRepo`       | The upstream repo you want to update from                                                                                            | `string`       | `"antfu/vscode-file-nesting-config"` |
| `project-config.fileNestingUpdater.upstreamBranch`     | The branch name of upstream repo                                                                                                     | `string`       | `"main"`                             |
| `i18n-ally.disabled`                                   | %config.disabled%                                                                                                                    | `boolean`      | `false`                              |
| `i18n-ally.autoDetection`                              | %config.auto_detection%                                                                                                              | `boolean`      | `true`                               |
| `i18n-ally.localesPaths`                               | %config.locales_paths%                                                                                                               | `string,array` | ``                                   |
| `i18n-ally.encoding`                                   | %config.encoding%                                                                                                                    | `string`       | `"utf-8"`                            |
| `i18n-ally.sourceLanguage`                             | %config.source_language%                                                                                                             | `string`       | ``                                   |
| `i18n-ally.displayLanguage`                            | %config.display_language%                                                                                                            | `string`       | ``                                   |
| `i18n-ally.ignoredLocales`                             | %config.ignored_locales%                                                                                                             | `array`        | ``                                   |
| `i18n-ally.keystyle`                                   | %config.keystyle%                                                                                                                    | `string`       | ``                                   |
| `i18n-ally.dirStructure`                               | %config.dir_structure%                                                                                                               | `string`       | ``                                   |
| `i18n-ally.annotations`                                | %config.annotations%                                                                                                                 | `boolean`      | `true`                               |
| `i18n-ally.annotationInPlace`                          | %config.annotation_in_place%                                                                                                         | `boolean`      | `true`                               |
| `i18n-ally.annotationMaxLength`                        | %config.annotation_max_length%                                                                                                       | `number`       | `40`                                 |
| `i18n-ally.annotationDelimiter`                        | %config.annotation_delimiter%                                                                                                        | `string`       | `"·"`                                |
| `i18n-ally.includeSubfolders`                          | %config.include_subfolders%                                                                                                          | `boolean`      | `true`                               |
| `i18n-ally.fullReloadOnChanged`                        | %config.full_reload_on_changed%                                                                                                      | `boolean`      | `false`                              |
| `i18n-ally.showFlags`                                  | %config.show_flags%                                                                                                                  | `boolean`      | `true`                               |
| `i18n-ally.enabledFrameworks`                          | %config.enabled_frameworks%                                                                                                          | `array`        | ``                                   |
| `i18n-ally.enabledParsers`                             | %config.enabled_parsers%                                                                                                             | `array`        | ``                                   |
| `i18n-ally.keysInUse`                                  | %config.keys_in_use%                                                                                                                 | `array`        | ``                                   |
| `i18n-ally.sortKeys`                                   | %config.sort_keys%                                                                                                                   | `boolean`      | `false`                              |
| `i18n-ally.sortCompare`                                | %config.sort_compare%                                                                                                                | `string`       | `"binary"`                           |
| `i18n-ally.sortLocale`                                 | %config.sort_locale%                                                                                                                 | `string`       | ``                                   |
| `i18n-ally.preferredDelimiter`                         | %config.preferred_delimiter%                                                                                                         | `string`       | `"-"`                                |
| `i18n-ally.readonly`                                   | %config.readonly%                                                                                                                    | `boolean`      | `false`                              |
| `i18n-ally.keepFulfilled`                              | %config.keep_fulfill%                                                                                                                | `boolean`      | `false`                              |
| `i18n-ally.localeCountryMap`                           | %config.locale_country_map%                                                                                                          | `object`       | `{}`                                 |
| `i18n-ally.indent`                                     | %config.indent%                                                                                                                      | `number`       | `2`                                  |
| `i18n-ally.disablePathParsing`                         | %config.disable_path_parsing%                                                                                                        | `boolean`      | `false`                              |
| `i18n-ally.tabStyle`                                   | %config.tab_style%                                                                                                                   | `string`       | `"space"`                            |
| `i18n-ally.namespace`                                  | %config.namespace%                                                                                                                   | `boolean`      | ``                                   |
| `i18n-ally.pathMatcher`                                | %config.path_matcher%                                                                                                                | `string`       | ``                                   |
| `i18n-ally.languageTagSystem`                          | %config.language_tag_system%                                                                                                         | `string`       | `"bcp47"`                            |
| `i18n-ally.ignoreFiles`                                | %config.ignore_files%                                                                                                                | `array`        | ``                                   |
| `i18n-ally.theme.annotation`                           |                                                                                                                                      | `string`       | `"rgba(153, 153, 153, .8)"`          |
| `i18n-ally.theme.annotationMissing`                    |                                                                                                                                      | `string`       | `"rgba(153, 153, 153, .3)"`          |
| `i18n-ally.theme.annotationBorder`                     |                                                                                                                                      | `string`       | `"rgba(153, 153, 153, .2)"`          |
| `i18n-ally.theme.annotationMissingBorder`              |                                                                                                                                      | `string`       | `"rgba(153, 153, 153, .2)"`          |
| `i18n-ally.regex.key`                                  | %config.regex_key%                                                                                                                   | `string`       | ``                                   |
| `i18n-ally.regex.usageMatch`                           | %config.regex_usage_match%                                                                                                           | `array`        | ``                                   |
| `i18n-ally.regex.usageMatchAppend`                     | %config.regex_usage_match_append%                                                                                                    | `array`        | ``                                   |
| `i18n-ally.refactor.templates`                         | %config.refactor_templates%                                                                                                          | `array`        | ``                                   |
| `i18n-ally.translate.saveAsCandidates`                 | %config.translate_save_as_candidates%                                                                                                | `boolean`      | `false`                              |
| `i18n-ally.translate.fallbackToKey`                    | %config.translate.fallbackToKey%                                                                                                     | `boolean`      | `false`                              |
| `i18n-ally.translate.engines`                          | %config.translate.engines%                                                                                                           | `array`        | `["google"]`                         |
| `i18n-ally.translate.parallels`                        | %config.translate.parallels%                                                                                                         | `number`       | `5`                                  |
| `i18n-ally.translate.promptSource`                     | %config.prompt_translating_source%                                                                                                   | `boolean`      | `false`                              |
| `i18n-ally.translate.overrideExisting`                 | %config.translate_override_existing%                                                                                                 | `boolean`      | `false`                              |
| `i18n-ally.translate.google.apiKey`                    | %config.google_api_key%                                                                                                              | `string`       | `null`                               |
| `i18n-ally.translate.deepl.apiKey`                     | %config.deepl_api_key%                                                                                                               | `string`       | `null`                               |
| `i18n-ally.translate.baidu.appid`                      | %config.baidu_appid%                                                                                                                 | `string`       | `null`                               |
| `i18n-ally.translate.baidu.apiSecret`                  | %config.baidu_app_secret%                                                                                                            | `string`       | `null`                               |
| `i18n-ally.translate.deepl.enableLog`                  | %config.deepl_log%                                                                                                                   | `boolean`      | `false`                              |
| `i18n-ally.translate.deepl.useFreeApiEntry`            | %config.deepl_use_free_api_entry%                                                                                                    | `boolean`      | `false`                              |
| `i18n-ally.translate.libre.apiRoot`                    | %config.libretranslate_api_root%                                                                                                     | `string`       | `"http://localhost:5000"`            |
| `i18n-ally.translate.openai.apiKey`                    | %config.openai_api_key%                                                                                                              | `string`       | `null`                               |
| `i18n-ally.translate.openai.apiRoot`                   | %config.openai_api_root%                                                                                                             | `string`       | `"https://api.openai.com"`           |
| `i18n-ally.translate.openai.apiModel`                  | %config.openai_api_model%                                                                                                            | `string`       | `"gpt-3.5-turbo"`                    |
| `i18n-ally.usage.scanningIgnore`                       | %config.usage.scanning_ignore%                                                                                                       | `array`        | ``                                   |
| `i18n-ally.usage.derivedKeyRules`                      | %config.derived_keys%                                                                                                                | `array`        | `null`                               |
| `i18n-ally.frameworks.ruby-rails.scopeRoot`            |                                                                                                                                      | `string`       | `"app/views"`                        |
| `i18n-ally.parsers.typescript.tsNodePath`              |                                                                                                                                      | `string`       | `"node_modules/ts-node/dist/bin.js"` |
| `i18n-ally.parsers.typescript.compilerOptions`         |                                                                                                                                      | `object`       | `{}`                                 |
| `i18n-ally.parsers.extendFileExtensions`               |                                                                                                                                      | `object`       | `{}`                                 |
| `i18n-ally.review.enabled`                             | %config.review_enabled%                                                                                                              | `boolean`      | `true`                               |
| `i18n-ally.review.gutters`                             | %config.review_gutters%                                                                                                              | `boolean`      | `true`                               |
| `i18n-ally.review.user.name`                           | %config.review_username%                                                                                                             | `string`       | ``                                   |
| `i18n-ally.review.user.email`                          | %config.review_email%                                                                                                                | `string`       | ``                                   |
| `i18n-ally.review.removeCommentOnResolved`             | %config.review_remove_on_resolved%                                                                                                   | `boolean`      | `false`                              |
| `i18n-ally.editor.preferEditor`                        | %config.editor_prefer_editor%                                                                                                        | `boolean`      | `false`                              |
| `i18n-ally.extract.keygenStrategy`                     | %config.keygen_strategy%                                                                                                             | `string`       | `"slug"`                             |
| `i18n-ally.extract.keygenStyle`                        | %config.keygen_style%                                                                                                                | `string`       | `"default"`                          |
| `i18n-ally.extract.keyPrefix`                          | %config.key_prefix%                                                                                                                  | `string`       | `""`                                 |
| `i18n-ally.extract.keyMaxLength`                       | %config.key_max_length%                                                                                                              | `number`       | `null`                               |
| `i18n-ally.extract.targetPickingStrategy`              | %config.target_picking_strategy%                                                                                                     | `string`       | `"none"`                             |
| `i18n-ally.extract.parsers.html`                       | Parser options for extracting HTML, see https://github.com/lokalise/i18n-ally/blob/master/src/extraction/parsers/options.ts          | `object`       | `{}`                                 |
| `i18n-ally.extract.parsers.babel`                      | Parser options for extracting JS/TS/JSX/TSX, see https://github.com/lokalise/i18n-ally/blob/master/src/extraction/parsers/options.ts | `object`       | `{}`                                 |
| `i18n-ally.extract.autoDetect`                         | Enables hard-coded strings detection automatically whenever opening a supported file                                                 | `boolean`      | `false`                              |
| `i18n-ally.extract.ignored`                            | Strings to be ignored on hard-coded strings detection                                                                                | `array`        | ``                                   |
| `i18n-ally.extract.ignoredByFiles`                     | Strings to be ignored on hard-coded strings detection, by files                                                                      | `object`       | `{}`                                 |
| `i18n-ally.parserOptions`                              |                                                                                                                                      | `object`       | `{}`                                 |
| `i18n-ally.defaultNamespace`                           | %config.default_namespace%                                                                                                           | `string`       | ``                                   |
| `i18n-ally.derivedKeyRules`                            |                                                                                                                                      | `undefined`    | ``                                   |
| `i18n-ally.filenameMatchRegex`                         |                                                                                                                                      | `undefined`    | ``                                   |
| `i18n-ally.fileNamespace`                              |                                                                                                                                      | `undefined`    | ``                                   |
| `i18n-ally.keyMatchRegex`                              |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.localesPaths`                           |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.encoding`                               |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.sourceLanguage`                         |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.displayLanguage`                        |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.ignoredLocales`                         |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.keystyle`                               |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.dirStructure`                           |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.annotations`                            |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.annotationMaxLength`                    |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.annotationDelimiter`                    |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.filenameMatchRegex`                     |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.includeSubfolders`                      |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.fullReloadOnChanged`                    |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.sortKeys`                               |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.preferredDelimiter`                     |                                                                                                                                      | `undefined`    | ``                                   |
| `vue-i18n-ally.readonly`                               |                                                                                                                                      | `undefined`    | ``                                   |

<!-- configs -->

It will check for update every 12 hours by default. You can also do it manually by executing command `Project Config Updater: Update config now`.

## License

MIT
