# Vnet Flow Logs

View traffic to a specific destination in the last 7 days
```
NTANetAnalytics
| where TimeGenerated > ago(7d)
| where DestIp == "10.44.48.100"
| project TimeGenerated, SrcIp, DestIp, DestPort, FlowStatus
```
