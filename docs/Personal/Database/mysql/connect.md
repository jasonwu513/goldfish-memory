# Synology mariadb 10 connect
1. 安裝完mariadb10後 開啟了 TCP 連線 和設定防火牆 但仍無法使用Dbeaver 連線
2. 設定grant host

ERROR 1130 (HY000): Host 'labcchaha.localdomain' is not allowed to connect to this MariaDB server

```
SELECT host FROM mysql.user WHERE user = "root";
GRANT ALL ON *.* to 'root'@'allowDoaminOrIp'IDENTIFIED BY 'password';
SELECT host FROM mysql.user WHERE user = "root";
FLUSH PRIVILEGES;


```


ERROR 1698 (28000): Access denied for user 'root'@'localhost'

```
GRANT ALL ON *.* to 'root'@'localhost' IDENTIFIED BY 'password';
```