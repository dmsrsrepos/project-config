import { defineExtension, reactive, useCommands, useFsWatcher } from 'reactive-vscode'
import { window } from 'vscode'
import { projectConfigTest } from '@configs'

export = defineExtension(() => { 
    const globs = projectConfigTest.partten
    
    const watcher = useFsWatcher(globs.value)
    watcher.onDidChange(uri => window.showInformationMessage(`File changed: ${uri}`))

    useCommands({
        'demo.add-watch-dir': async () => {
            const value = await window.showInputBox({ prompt: 'Enter a glob' })
            if (value)
                globs.value.push(value)
        },
        'demo.remove-watch-dir': async () => {
            const value = await window.showInputBox({ prompt: 'Enter a glob' })
            if (value)
                globs.value = globs.value.filter(v => v !== value)
        },
    })
})