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

| Key                                                    | Description                                        | Type      | Default                              |
| ------------------------------------------------------ | -------------------------------------------------- | --------- | ------------------------------------ |
| `xxx`                                                  | Enabled project-config inline annotations          | `boolean` | `true`                               |
| `project-config.test.annotations`                      | Enabled project-config inline annotations          | `boolean` | `true`                               |
| `project-config.test.color`                            | Icon color hex for inline displaying               | `string`  | `"auto"`                             |
| `project-config.test.partten`                          | Icon color hex for inline displaying               | `array`   | `["src /**/*","docs /**/*"]`         |
| `project-config.test.position`                         | Position the icon before or after the icon name    | `string`  | `"before"`                           |
| `project-config.fileNestingUpdater.autoUpdate`         | Fetch and update the latest config automatically   | `boolean` | `true`                               |
| `project-config.fileNestingUpdater.promptOnAutoUpdate` | Should show up the prompt before doing auto update | `boolean` | `true`                               |
| `project-config.fileNestingUpdater.autoUpdateInterval` | The minimal interval for auto update, in minutes   | `number`  | `4320`                               |
| `project-config.fileNestingUpdater.upstreamRepo`       | The upstream repo you want to update from          | `string`  | `"antfu/vscode-file-nesting-config"` |
| `project-config.fileNestingUpdater.upstreamBranch`     | The branch name of upstream repo                   | `string`  | `"main"`                             |
| `project-config2.test.annotations`                     | Enabled project-config inline annotations          | `boolean` | `true`                               |

<!-- configs -->

It will check for update every 12 hours by default. You can also do it manually by executing command `Project Config Updater: Update config now`.

## License

MIT
