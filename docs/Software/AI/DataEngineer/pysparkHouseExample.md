**PySpark 房價預測範例和詳細步驟**

在這個範例中，我們將使用 PySpark 來建立一個預測房價的機器學習模型。我們將使用加州房價數據集（California Housing Dataset），該數據集包含了美國人口普查局收集的加州住房相關資訊。

我們將遵循以下步驟：

1. **設定 PySpark 環境**
2. **載入並探索數據集**
3. **數據預處理**
4. **劃分訓練集和測試集**
5. **建立並訓練回歸模型**
6. **評估模型**
7. **進行預測（可選）**

---

### **步驟 1：設定 PySpark 環境**

首先，我們需要導入必要的庫並創建一個 SparkSession。

```python
from pyspark.sql import SparkSession

# 創建 SparkSession
spark = SparkSession.builder \
    .appName("HousePricePrediction") \
    .getOrCreate()
```

---

### **步驟 2：載入並探索數據集**

我們將數據集載入 PySpark 的 DataFrame 中。假設你已經下載了加州房價數據集（可以從 [Kaggle](https://www.kaggle.com/datasets/camnugent/california-housing-prices) 獲取），並將 `california_housing.csv` 放在可訪問的目錄中。

```python
# 載入數據集
data = spark.read.csv("path/to/california_housing.csv", header=True, inferSchema=True)

# 顯示前五行
data.show(5)

# 打印數據結構
data.printSchema()
```

---

### **步驟 3：數據預處理**

**3.1 檢查缺失值**

```python
from pyspark.sql.functions import col, sum

# 計算每列的缺失值數量
data.select([sum(col(c).isNull().cast("int")).alias(c) for c in data.columns]).show()
```

**3.2 處理缺失值**

假設 `total_bedrooms` 列有缺失值，我們可以用該列的平均值進行填充。

```python
from pyspark.sql.functions import mean

mean_total_bedrooms = data.select(mean(data['total_bedrooms'])).collect()[0][0]
data = data.na.fill({'total_bedrooms': mean_total_bedrooms})
```

**3.3 特徵組合**

使用 `VectorAssembler` 將特徵組合成一個向量。

```python
from pyspark.ml.feature import VectorAssembler

feature_columns = ['longitude', 'latitude', 'housing_median_age', 'total_rooms',
                   'total_bedrooms', 'population', 'households', 'median_income']

assembler = VectorAssembler(inputCols=feature_columns, outputCol='features')
data = assembler.transform(data)
```

---

### **步驟 4：劃分訓練集和測試集**

```python
# 選擇特徵和標籤
final_data = data.select('features', 'median_house_value')

# 劃分數據集
train_data, test_data = final_data.randomSplit([0.8, 0.2], seed=42)
```

---

### **步驟 5：建立並訓練回歸模型**

我們將使用線性回歸模型。

```python
from pyspark.ml.regression import LinearRegression

# 初始化線性回歸模型
lr = LinearRegression(featuresCol='features', labelCol='median_house_value')

# 訓練模型
lr_model = lr.fit(train_data)
```

---

### **步驟 6：評估模型**

```python
# 在測試集上進行預測
test_results = lr_model.evaluate(test_data)

# 輸出評估指標
print(f"RMSE（均方根誤差）：{test_results.rootMeanSquaredError}")
print(f"R2（決定係數）：{test_results.r2}")
```

**查看模型的係數和截距**

```python
print(f"迴歸係數：{lr_model.coefficients}")
print(f"截距：{lr_model.intercept}")
```

---

### **步驟 7：進行預測（可選）**

如果你有新的數據，可以使用已訓練的模型進行預測。

```python
# 構建新數據（範例）
new_data = spark.createDataFrame([
    (-122.23, 37.88, 41.0, 880.0, 129.0, 322.0, 126.0, 8.3252)
], ['longitude', 'latitude', 'housing_median_age', 'total_rooms',
    'total_bedrooms', 'population', 'households', 'median_income'])

# 特徵組合
new_data = assembler.transform(new_data)

# 進行預測
predictions = lr_model.transform(new_data)
predictions.select('prediction').show()
```

---

### **完整代碼範例**

以下是上述所有步驟的完整代碼：

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, mean
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression

# 創建 SparkSession
spark = SparkSession.builder \
    .appName("HousePricePrediction") \
    .getOrCreate()

# 載入數據集
data = spark.read.csv("path/to/california_housing.csv", header=True, inferSchema=True)

# 檢查缺失值
data.select([sum(col(c).isNull().cast("int")).alias(c) for c in data.columns]).show()

# 填充缺失值
mean_total_bedrooms = data.select(mean(data['total_bedrooms'])).collect()[0][0]
data = data.na.fill({'total_bedrooms': mean_total_bedrooms})

# 特徵組合
feature_columns = ['longitude', 'latitude', 'housing_median_age', 'total_rooms',
                   'total_bedrooms', 'population', 'households', 'median_income']
assembler = VectorAssembler(inputCols=feature_columns, outputCol='features')
data = assembler.transform(data)

# 準備最終數據集
final_data = data.select('features', 'median_house_value')

# 劃分數據集
train_data, test_data = final_data.randomSplit([0.8, 0.2], seed=42)

# 初始化並訓練模型
lr = LinearRegression(featuresCol='features', labelCol='median_house_value')
lr_model = lr.fit(train_data)

# 評估模型
test_results = lr_model.evaluate(test_data)
print(f"RMSE（均方根誤差）：{test_results.rootMeanSquaredError}")
print(f"R2（決定係數）：{test_results.r2}")

# 顯示模型係數和截距
print(f"迴歸係數：{lr_model.coefficients}")
print(f"截距：{lr_model.intercept}")

# 在測試集上進行預測
predictions = lr_model.transform(test_data)
predictions.select('median_house_value', 'prediction').show(5)

# 停止 SparkSession
spark.stop()
```

---

### **步驟解釋**

- **數據載入**：使用 PySpark 的 DataFrame 來高效地處理大型數據集。
- **數據清洗**：檢查並處理缺失值，確保數據質量。
- **特徵工程**：使用 `VectorAssembler` 將多個特徵列組合成一個向量，供機器學習模型使用。
- **數據劃分**：將數據集劃分為訓練集和測試集，以評估模型在未見過的數據上的表現。
- **模型訓練**：使用線性回歸模型進行訓練。
- **模型評估**：使用評估指標（如 RMSE 和 R²）來衡量模型的性能。
- **預測**：使用訓練好的模型對新數據進行預測。

---

### **注意事項**

- **特徵縮放**：在某些情況下，對特徵進行標準化或正規化可以提高模型性能。可以使用 `StandardScaler` 進行特徵縮放。
  
  ```python
  from pyspark.ml.feature import StandardScaler
  
  scaler = StandardScaler(inputCol="features", outputCol="scaledFeatures")
  scaler_model = scaler.fit(final_data)
  final_data = scaler_model.transform(final_data)
  ```

- **模型調優**：可以使用交叉驗證和參數調整來優化模型性能。

  ```python
  from pyspark.ml.tuning import CrossValidator, ParamGridBuilder
  from pyspark.ml.evaluation import RegressionEvaluator

  # 創建參數網格
  paramGrid = ParamGridBuilder() \
      .addGrid(lr.regParam, [0.01, 0.1, 0.5]) \
      .addGrid(lr.elasticNetParam, [0.0, 0.5, 1.0]) \
      .build()

  # 創建評估器
  evaluator = RegressionEvaluator(labelCol="median_house_value", metricName="rmse")

  # 創建交叉驗證器
  cv = CrossValidator(estimator=lr, estimatorParamMaps=paramGrid, evaluator=evaluator, numFolds=5)

  # 執行交叉驗證
  cv_model = cv.fit(train_data)

  # 評估最佳模型
  best_model = cv_model.bestModel
  test_results = best_model.evaluate(test_data)
  print(f"經過調優後的 RMSE：{test_results.rootMeanSquaredError}")
  ```

- **更複雜的模型**：可以嘗試使用決策樹回歸、隨機森林回歸或梯度提升樹等模型，可能會獲得更好的結果。

  ```python
  from pyspark.ml.regression import RandomForestRegressor

  rf = RandomForestRegressor(featuresCol='features', labelCol='median_house_value')
  rf_model = rf.fit(train_data)
  predictions = rf_model.transform(test_data)
  evaluator = RegressionEvaluator(labelCol="median_house_value", predictionCol="prediction", metricName="rmse")
  rmse = evaluator.evaluate(predictions)
  print(f"隨機森林模型的 RMSE：{rmse}")
  ```

---

### **總結**

通過這個範例，我們學習了如何使用 PySpark 進行房價預測，包括數據的載入、預處理、模型的建立和評估。PySpark 強大的分散式計算能力使其能夠處理大型數據集，適合在生產環境中部署機器學習模型。

你可以根據需要，進一步優化模型，嘗試不同的特徵工程方法和模型算法，以提高預測性能。

---

**參考資源：**

- [PySpark 官方文檔](https://spark.apache.org/docs/latest/api/python/index.html)
- [機器學習管道（PySpark MLlib）](https://spark.apache.org/docs/latest/ml-pipeline.html)
- [加州房價數據集（Kaggle）](https://www.kaggle.com/datasets/camnugent/california-housing-prices)