import { window } from 'vscode'
import { useCommand } from 'reactive-vscode'
import { commands, fileNestingUpdaterConfigObject } from '@/meta'
export async function activate(): Promise<void> {


    console.log('activate')

    useCommand(commands.manualUpdate, async () => {

        window.showInformationMessage(`config value: ${fileNestingUpdaterConfigObject.autoUpdate}`)
        fileNestingUpdaterConfigObject.$update('autoUpdate', !fileNestingUpdaterConfigObject.autoUpdate)
    })
    // const value = await window.showInputBox({ prompt: 'Enter a glob' })

    // window.showInformationMessage(`You entered: ${value}`)
}
export function deactivate(): void { }
