# Install

## 安裝

```bash
npx create-docusaurus@latest my-website classic
cd my-website
```

本地開發
```
npm run start
```

遠端開發
```
npm run start -- --host 0.0.0.0
```

在本地開啟網站服務(no hot reload)
```
npm run serve
```




使用 gh-pages 部署
```bash
npm run deploy
```

注意不要手動update gh-pages分支， 直接在其他分支執行上面的指令即可