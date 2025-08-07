# Backup & Restore

## Backup Database
BACKUP DATABASE ProGet TO DISK = 'E:\Temp\ProGet.bak';

## Restore Database
RESTORE DATABASE [ProGetRestored] FROM  DISK = N'E:\Temp\ProGet.bak' WITH  FILE = 1,  MOVE N'ProGet' TO N'E:\MSSQL\MSSQL15.MSSQLSERVER\MSSQL\DATA\ProGetRestored.mdf',  MOVE N'ProGet_log' TO N'E:\MSSQL\MSSQL15.MSSQLSERVER\MSSQL\DATA\ProGetRestored_log.ldf',  NOUNLOAD,  STATS = 5
