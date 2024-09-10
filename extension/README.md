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

| Command                                  | Title                                      |
| ---------------------------------------- | ------------------------------------------ |
| `project-config.manualUpdate`            | Project Config Updater: Update config now  |
| `project-config.change-annnotations`     | Project Config Updater: change annotations |
| `project-config.stop-watch`              | Project Config Updater: stop watch         |
| `extension.emeraldwalk.enableRunOnSave`  | Run On Save: Enable                        |
| `extension.emeraldwalk.disableRunOnSave` | Run On Save: Disable                       |

<!-- commands -->




<!-- configsJson -->

```json
{
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

  //{
      /**
     * Automatically clear the console on each save before running commands.
     * @default `false`
     */
    'autoClearConsole': boolean
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     * @default `undefined`
     */
    'shell'?: string
    /**
     * 
     * @default `undefined`
     */
    'commands'?: {
              /**
         * Regex for matching files to run commands on 
         * 
         * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
         * 
         * e.g.
         * "match": "some\\\\directory\\\\.*"
         * @default `".*"`
         */
        'match': string
        /**
         * Regex for matching files *not* to run commands on.
         * @default `".*"`
         */
        'notMatch': string
        /**
         * Command to execute on save.
         * @default `"echo ${file}"`
         */
        'cmd': string
        /**
         * Run command asynchronously.
         * @default `false`
         */
        'isAsync': boolean 
      }[] 
  }
  //
  "emeraldwalk.runonsave": { "autoClearConsole": false, "shell": undefined, "commands": undefined },

}
```

<!-- configsJson -->
It will check for update every 12 hours by default. You can also do it manually by executing command `Project Config Updater: Update config now`.

## License

MIT
