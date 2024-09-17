![License](https://img.shields.io/badge/license-MIT-yellow) #静态badge图标
![github license](https://img.shields.io/github/license/:user/:repo) #动态连接github仓库的图标

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/antfu/vscode-project-kit-config/main/extension/res/logo.png" style="width:100px;" />
</p>

<h1 align="center">Project Kit</h1>

<p align="center">
Auto updater for <a href="https://github.com/open-dmsrs/vscode-project-kit" target="_blank"><code>vscode-project-kit-config</code></a>.<br>
A config to make your file tree cleaner with the <a href="https://code.visualstudio.com/updates/v1_64#_explorer-project-kit">file nesting feature</a> of VS Code.</a>
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=cnjimbo.project-kit" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/cnjimbo.project-kit.svg?color=blue&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>


## Configurations

```json
{
  "fileNestingUpdater.autoUpdate": true,
  "fileNestingUpdater.autoUpdateInterval": 720,
  "fileNestingUpdater.promptOnAutoUpdate": true,
  "fileNestingUpdater.upstreamRepo": "antfu/vscode-project-kit-config",
  "fileNestingUpdater.upstreamBranch": "main"
}
```

<!-- commands -->

| Command                                  | Title                           |
| ---------------------------------------- | ------------------------------- |
| `project-kit.manualUpdate`               | Project Kit: Update config now  |
| `project-kit.change-annnotations`        | Project Kit: change annotations |
| `project-kit.stop-watch`                 | Project Kit: stop watch         |
| `extension.emeraldwalk.enableRunOnSave`  | Run On Save: Enable             |
| `extension.emeraldwalk.disableRunOnSave` | Run On Save: Disable            |

<!-- commands -->




<!-- configsJson -->

```json
{
  //Fetch and update the latest config automatically
  "project-kit.fileNestingUpdater.autoUpdate": true,

  //The upstream repo you want to update from
  "project-kit.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",

  //The branch name of upstream repo
  "project-kit.fileNestingUpdater.upstreamBranch": "main",

  //Should show up the prompt before doing auto update
  "project-kit.fileNestingUpdater.promptOnAutoUpdate": true,

  //The minimal interval for auto update, in minutes
  "project-kit.fileNestingUpdater.autoUpdateInterval": 4320,

  //Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
  "project-kit.runonsave.shell": ,

  //
  "project-kit.runonsave.commands": [],

  //Automatically clear the console on each save before running commands.
  "project-kit.runonsave.autoClearConsole": false,

}
```

<!-- configsJson -->
It will check for update every 12 hours by default. You can also do it manually by executing command `Project Kit: Update config now`.

## License

MIT
