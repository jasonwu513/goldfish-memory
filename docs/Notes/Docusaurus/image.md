## 圖片


### 絕對路徑

可以使用 Docusaurus 的靜態資源參考在 Markdown 文件中引用基於 `baseUrl` 的資源。

假設你想在 Markdown 文件中引用一個圖片，你可以這樣做：

```markdown
![My Image](/img/my-image.png)
```

在這個例子中，我們假設圖片位於 `static/img/` 目錄下。當 Docusaurus 建立你的網站時，它會正確地解析這個路徑，考慮到你在 `docusaurus.config.js` 中設置的 `baseUrl`。

這意味著，如果你的 `baseUrl` 是 `/docs/`，上面的圖片最終將被解析為 `/docs/img/my-image.png`。

### 相對路徑

你也可以使用相對路徑引用圖片。這在你想在 Markdown 文件中引用與該文件相同目錄下的圖片時很有用。

假設你有一個 Markdown 文件 `docs/Notes/Docusaurus/image.md`，並且想在其中引用一個圖片 `docs/Notes/Docusaurus/img/my-image.png`，你可以這樣做：

```markdown
![My Image](img/my-image.png)
```

目前搭配 Vscode 的 Markdown Image 插入圖片, 是目前使用起來最順的工作流



