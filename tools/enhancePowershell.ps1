
# 定义要添加到配置文件中的函数
$functionCode = @'
Function Prompt {
    $currentPath = Get-Location
    $folderName = Split-Path $currentPath -Leaf
    $host.UI.RawUI.WindowTitle = $folderName
    return "PS $currentPath> "    
}
'@
 
$profilePath = $PROFILE
 
if (-not (Test-Path -Path $profilePath)) { 
    New-Item -ItemType File -Path $profilePath -Force
}

$functionName = "Prompt"
 
if ((Get-Content $profilePath -ErrorAction SilentlyContinue) -join "`n" -match "^*function $functionName") {
    Write-Host "Function already exists in the profile."
}
else {
    Add-Content -Path $profilePath -Value $functionCode -Encoding UTF8
    Write-Host "Function has been added to the profile: $profilePath"
}