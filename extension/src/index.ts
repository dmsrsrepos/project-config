import { window } from 'vscode'
import { fileNestingUpdaterConfigs } from "@/configs"
import { useCommand } from 'reactive-vscode'
import { commands } from '@/meta'
export async function activate(): Promise<void> {


    console.log('activate')

    useCommand(commands.manualUpdate, async () => {

        window.showInformationMessage(`config value: ${fileNestingUpdaterConfigs.autoUpdate}`)
        fileNestingUpdaterConfigs.$update('autoUpdate', !fileNestingUpdaterConfigs.autoUpdate)
    })
    // const value = await window.showInputBox({ prompt: 'Enter a glob' })

    // window.showInformationMessage(`You entered: ${value}`)
}
export function deactivate(): void { }
