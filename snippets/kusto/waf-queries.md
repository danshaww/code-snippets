# WAF Queries

## All triggered WAF rules on a specific hostname in the last day, viewed as specific ruleid's only.

AzureDiagnostics
| where ResourceProvider == "MICROSOFT.NETWORK" and Category == "ApplicationGatewayFirewallLog" and hostname_s == "host@domain.com" and TimeGenerated between (ago(1d) .. now() )
| project TimeGenerated, hostname_s, requestUri_s, Message, ruleId_s, clientIp_s, policyScopeName_s
| take 500
| sort by TimeGenerated desc
| distinct ruleId_s


## All blocked rules in last hour

AzureDiagnostics
| where ResourceProvider == "MICROSOFT.NETWORK" and Category == "ApplicationGatewayFirewallLog" and TimeGenerated between (ago(1h) .. now() ) and (action_s == "Blocked" or action_s == "Matched")
| project TimeGenerated, hostname_s, requestUri_s, Message, ruleId_s, clientIp_s, policyScopeName_s
| sort by TimeGenerated desc
| distinct ruleId_s


## All individual rules blocked in the last 5 mins

AzureDiagnostics
| where ResourceProvider == "MICROSOFT.NETWORK" and Category == "ApplicationGatewayFirewallLog" and TimeGenerated between (ago(5m) .. now() ) and (action_s == "Blocked" or action_s == "Matched")
| project TimeGenerated, hostname_s, requestUri_s, Message, ruleId_s, clientIp_s, policyScopeName_s
| sort by TimeGenerated desc