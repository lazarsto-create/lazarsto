# download-images.ps1
# Downloads all image URLs from manifest.js into local /images/<size>/ folders

$manifestPath = ".\manifest.js"
if (-not (Test-Path $manifestPath)) {
    Write-Host "manifest.js not found in this folder!"
    exit
}

$manifest = Get-Content $manifestPath -Raw
# Find all image URLs
$urls = Select-String -InputObject $manifest -Pattern 'https://[^"]+\.(jpg|jpeg|png|webp|gif)' -AllMatches |
         ForEach-Object { $_.Matches.Value } | Sort-Object -Unique

if ($urls.Count -eq 0) {
    Write-Host "No image URLs found in manifest.js"
    exit
}

foreach ($url in $urls) {
    $name = ($url -split "/")[-1]

    # Try to find the nearest "size": "###x###" before this URL
    $index = $manifest.IndexOf($url)
    $size = "misc"
    if ($index -gt 0) {
        $before = $manifest.Substring([Math]::Max(0, $index - 300), 300)
        if ($before -match '"size"\s*:\s*"([^"]+)"') {
            $size = $matches[1]
        }
    }

    $folder = "images\$size"
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder | Out-Null
    }

    $target = Join-Path $folder $name
    if (-not (Test-Path $target)) {
        Write-Host "Downloading $url -> $target"
        try {
            Invoke-WebRequest -Uri $url -OutFile $target -ErrorAction Stop
        } catch {
            Write-Host "Failed to download: $url"
        }
    } else {
        Write-Host "Already exists: $target"
    }
}

Write-Host ""
Write-Host "Done! All images saved under ./images/<size>/"
