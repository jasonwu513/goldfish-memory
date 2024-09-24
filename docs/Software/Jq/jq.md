# jq example 



## Filter by time
```bash
jq 'select(.time > "2024-01-25T15:00:00+08:00" and .time < "2024-01-25T16:00:00+08:00")' yourfile.json
```

## Filter by sql and beatiful print with -r option output raw strings, not JSON texts;
```bash
jq  -r 'select(.sql != null) | .sql' gorm.log
```