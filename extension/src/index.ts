import { window } from 'vscode'

export async function activate(): Promise<void> {
    console.log('activate')
    const value = await window.showInputBox({ prompt: 'Enter a glob' })

    window.showInformationMessage(`You entered: ${value}`)
}
export function deactivate(): void { }
