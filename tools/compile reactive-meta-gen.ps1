Clear-Host

function Set-Location-Safely {
    param (
        [string]$path,
        [string]$defaultPath
    )
    if (Test-Path $path -PathType Container) {
        $path
        Set-Location $path
    }
    else {
        $defaultPath
        Set-Location $defaultPath
    }
}
$current = Get-Location
$metagen = Set-Location-Safely -path  "C:\AppData\code-vsextension\reactive-meta-gen" -defaultPath "G:\code-vsextension\reactive-meta-gen"
 

Write-Output $metagen
pnpm build

$pro = Set-Location-Safely -path  "C:\AppData\code-vsextension\vscode-project-config-updater" -defaultPath "G:\code-vsextension\vscode-project-config-updater"
 
Write-Output $pro
pnpm i


Set-Location $current

