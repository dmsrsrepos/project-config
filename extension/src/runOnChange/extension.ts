
import * as meta from '@/generated/meta'
import { useDisposable, useEvent, useOutputChannel } from 'reactive-vscode'
import vscode from 'vscode'
import { RunOnSaveExtension } from './RunOnSaveExtension'

export function activate() {
  const extension = new RunOnSaveExtension()
  extension.showOutputMessage()

  useEvent(vscode.workspace.onDidChangeConfiguration)((_) => {
    extension.showStatusMessage('Run On Save: Reloading config.')
  })

  useEvent(vscode.workspace.onDidSaveTextDocument)((document: vscode.TextDocument) => {
    extension.runCommands(document)
  })

  meta.useCommands({
    [meta.commands.enableRunOnSave]: async () => {
      extension.isEnabled = true
    },
    [meta.commands.disableRunOnSave]: async () => {
      extension.isEnabled = false
    },
  })
}


