# Excel 樞紐分析表

## 說明

Excel 樞紐分析表是 Excel 中的一個功能，用來對資料進行分析，並且可以快速地對資料進行分類、計算、總結。

## 語法

1. 選取資料
2. 插入樞紐分析表
3. 選擇要分析的欄位
4. 選擇要顯示的資料
5. 設定樞紐分析表
6. 分析資料


## 在 SQL 中等效的操作

要在 SQL 中實現類似 Excel 樞紐分析表的效果，你可以使用 **`CASE WHEN`** 或 **`PIVOT`**（某些資料庫支持）來將數據彙總到列和行中。假設情況是：

- **列標籤（Column Labels）**：業務
- **行標籤（Row Labels）**：產品
- **值（Values）**：銷售值

假設表結構如下：

```plaintext
sales_table
-----------------------------------
| 業務 | 產品  | 銷售值 |
-----------------------------------
| A    | 產品1 | 100   |
| B    | 產品2 | 150   |
| A    | 產品2 | 200   |
| C    | 產品1 | 300   |
...
```

### 方法一：使用 `CASE WHEN`（通用 SQL）

如果資料庫不支持 `PIVOT`，你可以使用 `CASE WHEN` 來手動進行數據透視。

```sql
SELECT 
    產品,
    SUM(CASE WHEN 業務 = 'A' THEN 銷售值 ELSE 0 END) AS A_業務,
    SUM(CASE WHEN 業務 = 'B' THEN 銷售值 ELSE 0 END) AS B_業務,
    SUM(CASE WHEN 業務 = 'C' THEN 銷售值 ELSE 0 END) AS C_業務
FROM sales_table
GROUP BY 產品;
```

這樣的查詢會產生類似以下結果：

```plaintext
-----------------------------------
| 產品  | A_業務 | B_業務 | C_業務 |
-----------------------------------
| 產品1 | 100   | 0     | 300    |
| 產品2 | 200   | 150   | 0      |
...
```

### 方法二：使用 `PIVOT`（SQL Server 或 Oracle 等支持的資料庫）

如果使用的資料庫支持 `PIVOT`，可以使用它來簡化這個過程。

#### SQL Server 的 `PIVOT` 寫法：

```sql
SELECT *
FROM (
    SELECT 產品, 業務, 銷售值
    FROM sales_table
) AS SourceTable
PIVOT (
    SUM(銷售值)
    FOR 業務 IN ([A], [B], [C])
) AS PivotTable;
```

#### Oracle 的 `PIVOT` 寫法：

```sql
SELECT *
FROM sales_table
PIVOT (
    SUM(銷售值)
    FOR 業務 IN ('A' AS A_業務, 'B' AS B_業務, 'C' AS C_業務)
);
```

### 方法三：MySQL 模擬樞紐表

MySQL 不直接支持 `PIVOT`，所以你可以用 `GROUP BY` 和 `CASE WHEN` 結合來模擬：

```sql
SELECT 
    產品,
    SUM(CASE WHEN 業務 = 'A' THEN 銷售值 ELSE 0 END) AS A_業務,
    SUM(CASE WHEN 業務 = 'B' THEN 銷售值 ELSE 0 END) AS B_業務,
    SUM(CASE WHEN 業務 = 'C' THEN 銷售值 ELSE 0 END) AS C_業務
FROM sales_table
GROUP BY 產品;
```

### 小結

- 使用 **`CASE WHEN`** 是通用的解法，適用於各類資料庫。
- **`PIVOT`** 則適合支持這個功能的資料庫（如 SQL Server 和 Oracle），能夠更簡單優雅地實現透視。
- 查詢結果會呈現為類似 Excel 樞紐表的形式，列標籤為業務、行標籤為產品，值為銷售額。