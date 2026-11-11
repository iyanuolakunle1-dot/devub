Add-Type -AssemblyName System.Drawing

$footerPath = "C:\Users\Iyanu\.gemini\antigravity\brain\26d859a0-fdc9-4308-bd43-f0a513a80529\.user_uploaded\media_1794303737059_c209956e.png"
$bmp = [System.Drawing.Bitmap]::FromFile($footerPath)

# Let's search for the blue circular icon pixels in x: 40..80, y: 190..235
# Blue color has high blue (> 200), red < 50
$minX = 1000; $maxX = 0; $minY = 1000; $maxY = 0

for ($y = 150; $y -lt 260; $y++) {
    for ($x = 40; $x -lt 100; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.B -gt 180 -and $c.R -lt 50) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Logo icon bounds found: X: $minX to $maxX, Y: $minY to $maxY"
$width = $maxX - $minX + 1
$height = $maxY - $minY + 1
Write-Host "Logo size: $width x $height"

# Also find text "Devub Technologies" bounds
$textMinX = $maxX + 8; $textMaxX = 0; $textMinY = 1000; $textMaxY = 0
for ($y = 150; $y -lt 260; $y++) {
    for ($x = $textMinX; $x -lt 300; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 200 -and $c.G -gt 200 -and $c.B -gt 200) {
            if ($x -gt $textMaxX) { $textMaxX = $x }
            if ($y -lt $textMinY) { $textMinY = $y }
            if ($y -gt $textMaxY) { $textMaxY = $y }
        }
    }
}
Write-Host "Devub Technologies text bounds: X: $textMinX to $textMaxX, Y: $textMinY to $textMaxY"

# Crop the clean logo emblem
$cropRect = New-Object System.Drawing.Rectangle ($minX - 1), ($minY - 1), ($width + 2), ($height + 2)
$logoTarget = New-Object System.Drawing.Bitmap $cropRect.Width, $cropRect.Height
$g = [System.Drawing.Graphics]::FromImage($logoTarget)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($bmp, (New-Object System.Drawing.Rectangle 0, 0, $cropRect.Width, $cropRect.Height), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$logoTarget.Save("C:\Devub\src\assets\images\devub_logo_icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$logoTarget.Dispose()

$bmp.Dispose()
Write-Host "Saved devub_logo_icon.png!"
