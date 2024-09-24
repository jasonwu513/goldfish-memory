在 Postman 中，變數（Variables）用於儲存和管理在請求（Requests）中可用的數據。根據變數的作用域（Scope），這些變數有不同的類型。以下為你說明這四種變數（Global, Variable, Collection, Environment）之間的差異，以及如何設定它們：

### Global Variable（全局變數）

全局變數具有 Postman 中最高的作用域。一旦設置了全局變數，它將在整個 Postman 工作區的任何集合（Collection）、文件夾（Folder）或請求（Request）中都可用。

#### 設置全局變數

- 從 "Quick Look"（右上角的眼睛圖標）
- 從 "Environment"（環境）標籤頁
- 通過腳本：`pm.globals.set("variable_name", "variable_value");`

### Collection Variable（集合變數）

集合變數的作用域僅限於其所屬的集合。如果在集合級別定義了一個變數，則該變數僅在該集合內的每個文件夾和請求中可用。

#### 設置集合變數

- 通過進入集合概覽 > 變數標籤頁（Variables tab）來設置。

### Environment Variable（環境變數）

環境變數的作用域限於你所選擇的環境。在 Postman 中，環境是一組鍵-值對，允許你使用變數自定義請求。

#### 設置環境變數

- 從 "Environment"（環境）標籤頁
- 通過腳本：`pm.environment.set("variable_name", "variable_value");`

### Variable（一般的變數）

"Variable" 是一個通用術語，可能指任何類型的變數。在 Postman 腳本中，你也可以有局部變數（Local Variables）。

#### 設置局部變數

- 通過在 Pre-request Script 或 Tests 腳本中使用 JavaScript 來設置。

```javascript
let localVar = "some value";
```

### 如何使用變數

在請求中，你可以通過包裹它們的名稱在雙大括號中來使用這些變數。

```
{{variable_name}}
```

這些變數的作用域是有層次的，意味著如果在多個作用域中定義了相同的變數名稱，Postman 會按照這樣的優先順序來使用變數：局部（Local）> 環境（Environment）> 集合（Collection）> 全局（Global）。