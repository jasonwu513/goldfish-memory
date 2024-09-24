# Loki

## 觀念
透過各種agent ex: fluent-bit , promtail ..., 將LOG 集中儲存至LOKI, 再利用GRAFANA UI 作呈現

## 為何選擇此方案



## Grafana + LOKI + promtail 設定檔
```
version: "3"

networks:
  loki:

services:
  loki:
    image: grafana/loki:2.6.1
    # volumes:
    #   - "./loki:/loki"
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml
    restart: always
    networks:
      - loki

  grafana:
    image: grafana/grafana:latest
    ports:
      - "6000:3000"
    restart: always
    networks:
      - loki
```

docker-compose up -d 啟動後

下指令將docker loki 儲存空間複製出來
```
docker cp loki_docker_id:/loki .
```

關閉container 
```
docker-compose down
```

取消docker-compose.yml 註解, 使loki 內容持久化
```
    # volumes:
    #   - "./loki:/loki"
```

重啟 container.
```
docker-compose  up -d
```



## GRAFANA 設定
登入Grafana後 新增 Data Source  
Type: Loki , 
URL: http://loki:3100
此端口用於接收AGENT 傳送之LOG


## Fluent-bit 

### 載點

https://docs.fluentbit.io/manual/installation/getting-started-with-fluent-bit

下載 windows zip 檔

### 設定檔

 conf 資料夾下新增 out_loki.conf ,  相關參數請自行調整.

```
[SERVICE]
    flush     5
    log_level info

[INPUT]
    name      tail
    path      C:\flog\aa.log
    db        .\logs.db

[OUTPUT]
    name                   loki
    match                  *
    host                   192.168.1.106
    port                   3100
    labels                 job=fluentbit3, instance=192.168.100.36, service=bpm, env=lab
```

啟動 fluent-bit
```
./bin/fluent-bit -c .\conf\loki.conf
```



## LOG 產生器 (如果沒有LOG 可使用下列 repo 產生LOG)

https://github.com/mingrammer/flog
```
./flog -t log -o cc.log  -n 3000 -d 1s
```

## @INCLUDE 引用多個設定檔

https://faun.pub/how-to-set-up-multiple-input-output-in-fluent-bit-5f322111de37

fluent-bit 資料結構如下, 可以拆分複雜的config

├─bin
├─conf
├─include
│  ├─fluent-bit
│  │  ├─tls
│  │  └─wasm
│  ├─luajit
│  └─monkey
│      └─mk_core
├─lib
└─log

a.conf
b.conf

multi.conf (內容如下)
```
@INCLUDE a.conf
@INCLUDE b.conf
```



## 設定參考

https://ithelp.ithome.com.tw/articles/10280701


## 備註
在Linux 上安裝會需要管理員權限, 可製作image 檔案, 執行container 替代本機安裝.


