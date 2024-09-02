
# 定义要添加到配置文件中的函数
$functionCode = @'
function Update-Title {
    $currentPath = Get-Location
    $title = Split-Path $currentPath -Leaf
    $host.UI.RawUI.WindowTitle = $title
}

function global:prompt {
    Update-Title
    "PS " + $(Get-Location) + "> "
}

Update-Title
'@

# 获取当前用户的 PowerShell 配置文件路径
$profilePath = $PROFILE

# 检查配置文件是否存在
if (-not (Test-Path -Path $profilePath)) {
    # 如果文件不存在，则创建之
    New-Item -ItemType File -Path $profilePath -Force
}

# 从配置文件中读取现有内容
$existingContent = Get-Content $profilePath -Encoding UTF8

# 检查函数是否已存在于配置文件中
if ($existingContent -notcontains 'function MyFunction') {
    # 如果函数尚未定义，则追加函数代码
    Add-Content -Path $profilePath -Value $functionCode -Encoding UTF8
    Write-Host "Function has been added to the profile: $profilePath"
}
else {
    Write-Host "Function already exists in the profile."
}