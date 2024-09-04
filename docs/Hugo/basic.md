# Hugo

## Install Hugo

```bash
sudo apt update && sudo apt install hugo -y

```

## Check the version

```bash
hugo version
```

## Create a new site

```bash
hugo new site quickstart
cd quickstart
```

## Add a theme

```bash
git init
git submodule add xxx
```

## Copy an example site

```bash
cp -r themes/xxx/exampleSite/* .
```

## Add a content

```bash
hugo new posts/my-first-post.md
```

## Start the Hugo server

```bash
hugo server -D
```

## Build the site

```bash
hugo 
```

在 Hugo 中，預設情況下，當執行 `hugo` 命令時，它會將網站打包並生成靜態網站檔案到 `public/` 資料夾。如果你想改變輸出目錄，將打包結果放到 `dist/` 資料夾中，可以透過以下步驟完成：

1. **修改配置檔案**：
   在 Hugo 的配置檔案 (`config.toml` 或 `config.yaml`) 中，新增或修改以下設定來指定輸出目錄：

   若使用 TOML 格式的配置檔：
   ```toml
   publishDir = "dist"
   ```

   若使用 YAML 格式的配置檔：
   ```yaml
   publishDir: "dist"
   ```

2. **執行 Hugo 打包**：
   保存設定後，執行以下命令，將網站內容打包到 `dist/` 資料夾：
   ```bash
   hugo
   ```

這樣 Hugo 就會自動將靜態網站的檔案打包到 `dist/` 資料夾，而不是預設的 `public/` 資料夾。