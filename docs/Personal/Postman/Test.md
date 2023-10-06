在 Postman 的 "Tests" 腳本部分，你可以使用 JavaScript 來撰寫測試。如果你想確保回應（Response）中的 JSON 對象等於一個特定的對象，你可以這樣寫：

```javascript
// 將回應內容解析為 JSON
var jsonData = pm.response.json();

// 預期的對象
var expectedObject = {
    key1: "value1",
    key2: "value2",
    // ... 其他鍵值對
};

// 進行測試
pm.test("Check if response object is equal to the expected object", function () {
    pm.expect(jsonData).to.eql(expectedObject);
});
```

在這裡，`pm.response.json()` 會解析回應內容並將其轉換為一個 JavaScript 對象。然後，`pm.expect(jsonData).to.eql(expectedObject);` 這一行會檢查 `jsonData` 是否與 `expectedObject` 完全相等（包括所有的鍵和值）。

注意：`.eql` 會考慮到對象的深度相等性（Deep Equality），這意味著它會遞歸地比較對象和/或數組的所有屬性和值。

如果你的目標是比較對象的某一部分，你也可以選擇只比較該部分。

```javascript
pm.test("Check if a subset of the response object is as expected", function () {
    var subset = {
        key1: jsonData.key1,
        key2: jsonData.key2
    };
    pm.expect(subset).to.eql(expectedObject);
});
```

這個測試只會比較回應中的 `key1` 和 `key2` 是否與 `expectedObject` 中的 `key1` 和 `key2` 相符。

不論你選擇哪種方式，只有當條件滿足時，測試才會通過。這樣，你就可以確保你的 API 回應是符合期望的。