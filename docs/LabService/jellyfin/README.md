# jellyfin & metatube

## Steps

1. 將影片空間掛載至/mnt/nfs_truenas1
2. docker-compose up -d 啟動 jellyfin and metatube
3. 基本設定
4. 參考: https://metatube-community.github.io/wiki/plugin-installation/ 安裝插件
5. 附加元件設定 metathub url ex: http://192.168.1.xx:8000
5. 重啟 jellyfin, 移除媒體庫重新加入, 重新掃描媒體庫