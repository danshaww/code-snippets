# Certificate Generation

Generate a PFX Self signed certificate
```
New-SelfSignedCertificate -Subject *.epichouse.co.uk -DnsName *.epichouse.co.uk -CertStoreLocation Cert:\LocalMachine\My -NotAfter (Get-Date).AddMonths(120)
```