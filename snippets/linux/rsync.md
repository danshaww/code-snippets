# RSYNC

Copy Contents of a folder into a folder on another server, without deleting files in destination that are not in source
```
rsync -avh --no-perms -e ssh /dir_path user@host:/dir_path
```

Copy Contents of a folder into a folder on another server, with deleting files in destination that are not in source
```
rsync -avh --no-perms -e ssh /dir_path user@host:/dir_path --delete
```

Copy folder into a folder on another server, without deleting files in destination that are not in source (notice the slash missing)
```
rsync -avh --no-perms -e ssh /dir_path user@host:/dir_path
```

Copy folder into a folder on another server, with deleting files in destination that are not in source (notice the slash missing)
```
rsync -avh --no-perms -e ssh /dir_path user@host:/dir_path --delete
```

Copy local file with progress (THIS IS SWEEEEET)
```
rsync --progress /path/to/source-file /path/to/destination
```

Retain Permissions for Docker Restores
```
rsync -avzogp gitea dan@vm-app-prod-01:/docker/appstemp/ -r --rsync-path="sudo rsync"
```
