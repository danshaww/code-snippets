# Nsupdate

- The commands below are expected to be ran within the nsupdate shell
- A send or return is required to apply the changes

Add A Record
```
update add test.internal.epichouse.co.uk 3600 A 1.1.1.1
```

Add CNAME Record
```
update add test.internal.epichouse.co.uk 3600 CNAME record.something.com.
```

Delete Record
```
update del test.internal.epichouse.co.uk
```
