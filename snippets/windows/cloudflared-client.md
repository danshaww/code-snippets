# Cloudflared Client

## Install Cloudflared
winget install --id Cloudflare.cloudflared


## Open Tunnel
cloudflared access rdp --hostname public-cloudflared-hostname --url rdp://localhost:33333

## Open Tunnel as background job
Start-Job -ScriptBlock { cloudflared access rdp --hostname public-cloudflared-hostname --url rdp://localhost:33333}

## Create Tunnel Service (Change to run as me)
New-Service -Name "CFTunnel" -BinaryPathName '"C:\Program Files (x86)\cloudflared\cloudflared.exe" access rdp --hostname public-cloudflared-hostname --url localhost:33999'
