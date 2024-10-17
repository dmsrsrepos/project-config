Clear-Host
$current = Get-Location
Set-Location "C:\AppData\code-vsextension\reactive-meta-gen"
pnpm build
Set-Location "C:\AppData\code-vsextension\vscode-project-config-updater"
pnpm i

Set-Location $current

