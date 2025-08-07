# ZFS

## List all ZFS Pools on a server
zpool list

## Get the status of anll disks of all ZFS Pools on a system
zpool status

## List all datasets and volumes on all or a specific ZFS Pool on a system
zfs list

## Create a new ZFS Dataset
zfs create {poolname}/{datasetname}

## Get Mountpoint of a ZFS Pool
zfs get mountpoint backups

## Set new mountpoint for ZFS Pool
zfs set mountpoint=/mnt/backups backups