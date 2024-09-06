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

| Command                              | Title                                      |
| ------------------------------------ | ------------------------------------------ |
| `project-config.manualUpdate`        | Project Config Updater: Update config now  |
| `project-config.change-annnotations` | Project Config Updater: change annotations |
| `project-config.stop-watch`          | Project Config Updater: stop watch         |

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

<!-- configs -->


<!-- configsJson -->

```json
{
  //`boolean`, Enabled project-config inline annotations 
  "xxx": true,

  //`boolean`, Enabled project-config inline annotations 
  "project-config.test.annotations": true,

  //`string`, Icon color hex for inline displaying 
  "project-config.test.color": "auto",

  //`string[]`, Icon color hex for inline displaying 
  "project-config.test.partten": ["src /**/*","docs /**/*"],

  //("after" | "before")
  //Position the icon before or after the icon name
  "project-config.test.position": "before",

  //`boolean`, Fetch and update the latest config automatically 
  "project-config.fileNestingUpdater.autoUpdate": true,

  //`boolean`, Should show up the prompt before doing auto update 
  "project-config.fileNestingUpdater.promptOnAutoUpdate": true,

  //`number`, The minimal interval for auto update, in minutes 
  "project-config.fileNestingUpdater.autoUpdateInterval": 4320,

  //`string`, The upstream repo you want to update from 
  "project-config.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",

  //`string`, The branch name of upstream repo 
  "project-config.fileNestingUpdater.upstreamBranch": "main",

  //`boolean`, %config.disabled% 
  "i18n-ally.disabled": false,

  //`boolean`, %config.auto_detection% 
  "i18n-ally.autoDetection": true,

  //(string | string[] | undefined)
  //%config.locales_paths%
  "i18n-ally.localesPaths": ,

  //`string`, %config.encoding% 
  "i18n-ally.encoding": "utf-8",

  //(string | undefined)
  //%config.source_language%
  "i18n-ally.sourceLanguage": ,

  //(string | undefined)
  //%config.display_language%
  "i18n-ally.displayLanguage": ,

  //(unknown[] | undefined)
  //%config.ignored_locales%
  "i18n-ally.ignoredLocales": ,

  //("auto" | "nested" | "flat" | undefined)
  //%config.keystyle%
  "i18n-ally.keystyle": ,

  //("auto" | "file" | "dir" | undefined)
  //%config.dir_structure%
  "i18n-ally.dirStructure": ,

  //`boolean`, %config.annotations% 
  "i18n-ally.annotations": true,

  //`boolean`, %config.annotation_in_place% 
  "i18n-ally.annotationInPlace": true,

  //`number`, %config.annotation_max_length% 
  "i18n-ally.annotationMaxLength": 40,

  //`string`, %config.annotation_delimiter% 
  "i18n-ally.annotationDelimiter": "·",

  //`boolean`, %config.include_subfolders% 
  "i18n-ally.includeSubfolders": true,

  //`boolean`, %config.full_reload_on_changed% 
  "i18n-ally.fullReloadOnChanged": false,

  //`boolean`, %config.show_flags% 
  "i18n-ally.showFlags": true,

  //(("vue" | "react" | "vscode" | "ngx-translate" | "i18next" | "react-i18next" | "i18next-shopify" | "i18n-tag" | "flutter" | "vue-sfc" | "ember" | "chrome-ext" | "ruby-rails" | "custom" | "laravel" | "transloco" | "svelte" | "globalize" | "ui5" | "next-translate" | "php-gettext" | "general" | "lingui" | "jekyll" | "fluent-vue" | "fluent-vue-sfc" | "next-intl" | "next-international")[] | undefined)
  //%config.enabled_frameworks%
  "i18n-ally.enabledFrameworks": ,

  //(("js" | "ts" | "json" | "json5" | "yaml" | "ini" | "po" | "php" | "properties" | "ftl")[] | undefined)
  //%config.enabled_parsers%
  "i18n-ally.enabledParsers": ,

  //(string[] | undefined)
  //%config.keys_in_use%
  "i18n-ally.keysInUse": ,

  //`boolean`, %config.sort_keys% 
  "i18n-ally.sortKeys": false,

  //("binary" | "locale")
  //%config.sort_compare%
  "i18n-ally.sortCompare": "binary",

  //(string | undefined)
  //%config.sort_locale%
  "i18n-ally.sortLocale": ,

  //`string`, %config.preferred_delimiter% 
  "i18n-ally.preferredDelimiter": "-",

  //`boolean`, %config.readonly% 
  "i18n-ally.readonly": false,

  //`boolean`, %config.keep_fulfill% 
  "i18n-ally.keepFulfilled": false,

  //Record<string, unknown>
  //%config.locale_country_map%
  "i18n-ally.localeCountryMap": {},

  //`number`, %config.indent% 
  "i18n-ally.indent": 2,

  //`boolean`, %config.disable_path_parsing% 
  "i18n-ally.disablePathParsing": false,

  //("space" | "tab")
  //%config.tab_style%
  "i18n-ally.tabStyle": "space",

  //(boolean | undefined)
  //%config.namespace%
  "i18n-ally.namespace": ,

  //(string | undefined)
  //%config.path_matcher%
  "i18n-ally.pathMatcher": ,

  //("bcp47" | "legacy" | "none")
  //%config.language_tag_system%
  "i18n-ally.languageTagSystem": "bcp47",

  //(unknown[] | undefined)
  //%config.ignore_files%
  "i18n-ally.ignoreFiles": ,

  //`string`,  
  "i18n-ally.theme.annotation": "rgba(153, 153, 153, .8)",

  //`string`,  
  "i18n-ally.theme.annotationMissing": "rgba(153, 153, 153, .3)",

  //`string`,  
  "i18n-ally.theme.annotationBorder": "rgba(153, 153, 153, .2)",

  //`string`,  
  "i18n-ally.theme.annotationMissingBorder": "rgba(153, 153, 153, .2)",

  //(string | undefined)
  //%config.regex_key%
  "i18n-ally.regex.key": ,

  //(string[] | undefined)
  //%config.regex_usage_match%
  "i18n-ally.regex.usageMatch": ,

  //(string[] | undefined)
  //%config.regex_usage_match_append%
  "i18n-ally.regex.usageMatchAppend": ,

  //({ 'source': ("html-attribute" | "html-inline" | "js-string" | "js-template" | "jsx-text"); 'template': string; 'templates': string[]; 'include': string[]; 'exclude': string[] }[] | undefined)
  //%config.refactor_templates%
  "i18n-ally.refactor.templates": ,

  //`boolean`, %config.translate_save_as_candidates% 
  "i18n-ally.translate.saveAsCandidates": false,

  //`boolean`, %config.translate.fallbackToKey% 
  "i18n-ally.translate.fallbackToKey": false,

  //("google" | "google-cn" | "deepl" | "libretranslate" | "baidu" | "openai")[]
  //%config.translate.engines%
  "i18n-ally.translate.engines": ["google"],

  //`number`, %config.translate.parallels% 
  "i18n-ally.translate.parallels": 5,

  //`boolean`, %config.prompt_translating_source% 
  "i18n-ally.translate.promptSource": false,

  //`boolean`, %config.translate_override_existing% 
  "i18n-ally.translate.overrideExisting": false,

  //(string | null)
  //%config.google_api_key%
  "i18n-ally.translate.google.apiKey": null,

  //(string | null)
  //%config.deepl_api_key%
  "i18n-ally.translate.deepl.apiKey": null,

  //(string | null)
  //%config.baidu_appid%
  "i18n-ally.translate.baidu.appid": null,

  //(string | null)
  //%config.baidu_app_secret%
  "i18n-ally.translate.baidu.apiSecret": null,

  //`boolean`, %config.deepl_log% 
  "i18n-ally.translate.deepl.enableLog": false,

  //`boolean`, %config.deepl_use_free_api_entry% 
  "i18n-ally.translate.deepl.useFreeApiEntry": false,

  //`string`, %config.libretranslate_api_root% 
  "i18n-ally.translate.libre.apiRoot": "http://localhost:5000",

  //(string | null)
  //%config.openai_api_key%
  "i18n-ally.translate.openai.apiKey": null,

  //`string`, %config.openai_api_root% 
  "i18n-ally.translate.openai.apiRoot": "https://api.openai.com",

  //("gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613")
  //%config.openai_api_model%
  "i18n-ally.translate.openai.apiModel": "gpt-3.5-turbo",

  //(string[] | undefined)
  //%config.usage.scanning_ignore%
  "i18n-ally.usage.scanningIgnore": ,

  //(string[] | null)
  //%config.derived_keys%
  "i18n-ally.usage.derivedKeyRules": null,

  //`string`,  
  "i18n-ally.frameworks.ruby-rails.scopeRoot": "app/views",

  //`string`,  
  "i18n-ally.parsers.typescript.tsNodePath": "node_modules/ts-node/dist/bin.js",

  //Record<string, unknown>
  //
  "i18n-ally.parsers.typescript.compilerOptions": {},

  //Record<string, unknown>
  //
  "i18n-ally.parsers.extendFileExtensions": {},

  //`boolean`, %config.review_enabled% 
  "i18n-ally.review.enabled": true,

  //`boolean`, %config.review_gutters% 
  "i18n-ally.review.gutters": true,

  //(string | undefined)
  //%config.review_username%
  "i18n-ally.review.user.name": ,

  //(string | undefined)
  //%config.review_email%
  "i18n-ally.review.user.email": ,

  //`boolean`, %config.review_remove_on_resolved% 
  "i18n-ally.review.removeCommentOnResolved": false,

  //`boolean`, %config.editor_prefer_editor% 
  "i18n-ally.editor.preferEditor": false,

  //("slug" | "random" | "empty" | "source")
  //%config.keygen_strategy%
  "i18n-ally.extract.keygenStrategy": "slug",

  //("default" | "kebab-case" | "snake_case" | "camelCase" | "PascalCase" | "ALL_CAPS")
  //%config.keygen_style%
  "i18n-ally.extract.keygenStyle": "default",

  //`string`, %config.key_prefix% 
  "i18n-ally.extract.keyPrefix": "",

  //(number | null)
  //%config.key_max_length%
  "i18n-ally.extract.keyMaxLength": null,

  //("none" | "most-similar" | "most-similar-by-key" | "file-previous" | "global-previous")
  //%config.target_picking_strategy%
  "i18n-ally.extract.targetPickingStrategy": "none",

  //Record<string, unknown>
  //Parser options for extracting HTML, see https://github.com/lokalise/i18n-ally/blob/master/src/extraction/parsers/options.ts
  "i18n-ally.extract.parsers.html": {},

  //Record<string, unknown>
  //Parser options for extracting JS/TS/JSX/TSX, see https://github.com/lokalise/i18n-ally/blob/master/src/extraction/parsers/options.ts
  "i18n-ally.extract.parsers.babel": {},

  //`boolean`, Enables hard-coded strings detection automatically whenever opening a supported file 
  "i18n-ally.extract.autoDetect": false,

  //(string[] | undefined)
  //Strings to be ignored on hard-coded strings detection
  "i18n-ally.extract.ignored": ,

  //Record<string, unknown>
  //Strings to be ignored on hard-coded strings detection, by files
  "i18n-ally.extract.ignoredByFiles": {},

  //Record<string, unknown>
  //
  "i18n-ally.parserOptions": {},

  //(string | undefined)
  //%config.default_namespace%
  "i18n-ally.defaultNamespace": ,

}
```

<!-- configsJson -->
It will check for update every 12 hours by default. You can also do it manually by executing command `Project Config Updater: Update config now`.

## License

MIT
