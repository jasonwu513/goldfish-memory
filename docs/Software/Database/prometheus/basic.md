# Prometheus


## Intro
Prometheus is a free software application used for event monitoring and alerting.[2] It records real-time metrics in a time series database (allowing for high dimensionality)


## Knowlage

1. Metrics  監控指標 
    -  4 type
    - Counter : http_requests_total
    - Gauge : node_memory_MemFree
    - Histogram : prometheus_tsdb_compaction_chunk_range_bucket
    - Summary : prometheus_tsdb_wal_fsync_duration_seconds



2. Label
    - http_requests_total{path="/login"} path is label
    - http_requests_total{path="/logout"}
    - http_requests_total{path="/adduser"}
    - node_memory_MemFree{instance="****"} instance is label
    - variable => node label_values(node_uname_info{job="$job"},instance) (get host )