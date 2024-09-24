
# Ubuntu 自動化安裝

## Ubuntu Server 自動化安裝

### 自動化安裝的優點

- 無需人工輸入，可自動完成安裝過程
- 可自訂安裝選項，如主機名稱、使用者密碼等
- 安裝完成後可自動更新系統安全性修補程式

### 自動化安裝的步驟

- 建立自動化安裝設定檔
- 解壓縮 Ubuntu Server ISO 映像檔
- 將設定檔複製到 ISO 映像檔中
- 修改 GRUB 開機選單
- 重新打包 ISO 映像檔

## 建立自動化安裝設定檔

### 設定檔格式

- 使用 YAML 格式
- 包含身分識別、使用者密碼、鍵盤配置等資訊

### 設定檔內容

- 主機名稱
- 使用者名稱和密碼
- 語言和地區設定
- 是否安裝 SSH 伺服器
- 是否自動更新系統

## 解壓縮 Ubuntu Server ISO 映像檔

### 使用 xorriso 工具

- 將 ISO 映像檔解壓縮到本地目錄
- 同時解壓縮開機映像檔

## 將設定檔複製到 ISO 映像檔中

### 建立 no-cloud 目錄

- 將自動化安裝設定檔複製到此目錄
- 可選擇性地添加 metadata 檔案

## 修改 GRUB 開機選單

### 編輯 grub.cfg 檔案

- 新增自動化安裝的 GRUB 選單項目
- 指定自動化安裝設定檔的位置

## 重新打包 ISO 映像檔

### 使用 mkisofs 工具

- 設定 ISO 映像檔的各項屬性
- 指定開機映像檔的位置
- 輸出新的 Ubuntu Server 自動化安裝 ISO 映像檔

> 參考資料來源：[Looki Looki No Hands, Automatic install of Ubuntu server.](https://www.youtube.com/watch?v=DtXZ6BMaKbA)
