# Exchange Online

connect-exchangeonline

## Get all mailboxes a user has permission to access
Get-Mailbox -ResultSize Unlimited | Get-MailboxPermission -User "email@domain"