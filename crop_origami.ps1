Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Devub\src\assets\full_design.png"
$destPath = "C:\Devub\src\assets\images\about_origami.png"

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Width:" $src.Width "Height:" $src.Height

# Section 2 origami image position in 1024-wide design:
# x: 472, y: 442, width: 388, height: 226
$rect = New-Object System.Drawing.Rectangle 472, 442, 388, 226
$target = New-Object System.Drawing.Bitmap $rect.Width, $rect.Height
$g = [System.Drawing.Graphics]::FromImage($target)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, (New-Object System.Drawing.Rectangle 0, 0, $rect.Width, $rect.Height), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$target.Dispose()
$src.Dispose()

Write-Host "Origami cropped successfully!"

