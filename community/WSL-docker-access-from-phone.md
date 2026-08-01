---
title: Access WSL docker hosted service
---

# Problem

localhost/port - works
10.236.132.176:2283 - does not work

# Solution

Windows → WSL NAT forwarding

Powershell as admin

check rules

```
Administrator in    C:\WINDOWS\system32   ❯  netsh interface portproxy show all

Listen on ipv4:             Connect to ipv4:

Address         Port        Address         Port
--------------- ----------  --------------- ----------
0.0.0.0         2283        172.20.96.113   2283
0.0.0.0         4533        172.20.96.113   4533
```

Add the rule. WSL ip address can change. Might need rule updating

```
❯  netsh interface portproxy add v4tov4 `
∙ listenaddress=0.0.0.0 `
∙ listenport=2283 `
∙ connectaddress=172.20.96.113 `
∙ connectport=2283
∙
∙ netsh interface portproxy add v4tov4 `
∙ listenaddress=0.0.0.0 `
∙ listenport=4533 `
∙ connectaddress=172.20.96.113 `
∙ connectport=4533
```
