![License](https://img.shields.io/badge/license-MIT-yellow) #静态badge图标
![github license](https://img.shields.io/github/license/:user/:repo) #动态连接github仓库的图标

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/antfu/vscode-project-config-config/main/extension/res/logo.png" style="width:100px;" />
</p>

<h1 align="center">Project Kit</h1>

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

| Command                                  | Title                           |
| ---------------------------------------- | ------------------------------- |
| `project-config.manualUpdate`            | Project Kit: Update config now  |
| `project-config.change-annnotations`     | Project Kit: change annotations |
| `project-config.stop-watch`              | Project Kit: stop watch         |
| `extension.emeraldwalk.enableRunOnSave`  | Run On Save: Enable             |
| `extension.emeraldwalk.disableRunOnSave` | Run On Save: Disable            |

<!-- commands -->




<!-- configsJson -->

```json
{
  //Fetch and update the latest config automatically
  "fileNestingUpdater.autoUpdate": true,

  //The upstream repo you want to update from
  "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",

  //The branch name of upstream repo
  "project-config.fileNestingUpdater.upstreamBranch": "main",

  //Should show up the prompt before doing auto update
  "project-config.fileNestingUpdater.promptOnAutoUpdate": true,

  //The minimal interval for auto update, in minutes
  "project-config.fileNestingUpdater.autoUpdateInterval": 4320,

  //
  "project-config.emeraldwalk.runonsave": { "shell": undefined, "commands": undefined, "autoClearConsole": false },

}
```

<!-- configsJson -->
It will check for update every 12 hours by default. You can also do it manually by executing command `Project Kit: Update config now`.

## License

MIT
