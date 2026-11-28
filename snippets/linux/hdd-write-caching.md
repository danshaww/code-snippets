# HDD Write Caching

## Get current caching status
```
hdparm -W /dev/sda
```

## Enable caching
```
hdparm -W 1 /dev/sda
```

## Disable caching
```
hdparm -W 0 /dev/sda
```