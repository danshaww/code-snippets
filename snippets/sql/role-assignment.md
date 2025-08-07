# Add owner role to a database user.
sys.sp_addrolemember @rolename = N'db_owner', @membername = N'DBUSERHERE'

# Remove owner role to a database user.
sys.sp_droprolemember @rolename = N'db_owner', @membername = N'DBUSERHERE'

# Add Reader Role to a database user.
sys.sp_addrolemember @rolename = N'db_datareader', @membername = N'DBUSERHERE'

# Remove Reader Role to a database user.
sys.sp_droprolemember @rolename = N'db_datareader', @membername = N'DBUSERHERE'

# Add writer role to a database user
sys.sp_addrolemember @rolename = N'db_datawriter', @membername = N'DBUSERHERE'

# Remove writer role to a database user
sys.sp_droprolemember @rolename = N'db_datawriter', @membername = N'DBUSERHERE'
