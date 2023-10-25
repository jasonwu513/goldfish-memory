# Marshal & Unmarshal

在Go語言中，`encoding/json`標準庫提供了對JSON數據進行編碼（Marshaling）和解碼（Unmarshaling）的功能。

### Marshal（編碼）
當有一個Go語言的數據結構，想要將其轉換為JSON格式的字符串時，可以使用`json.Marshal`函數。這個過程稱為Marshaling或者Serialization（序列化）。

```go
type Person struct {
    Name string `json:"name"`
    Age  int    `json:"age"`
}

func main() {
    p := Person{Name: "John Doe", Age: 30}
    jsonData, err := json.Marshal(p)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(string(jsonData))  // {"name":"John Doe","age":30}
}
```
在上面的例子中，我們定義了一個`Person`結構，創建了一個此結構的實例`p`，並使用`json.Marshal`將其轉換為JSON格式的字符串。

### Unmarshal（解碼）
當有一個JSON格式的字符串，想要將其轉換為Go語言的數據結構時，可以使用`json.Unmarshal`函數。這個過程稱為Unmarshaling或者Deserialization（反序列化）。

```go
func main() {
    jsonData := []byte(`{"name":"John Doe","age":30}`)
    var p Person
    err := json.Unmarshal(jsonData, &p)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(p)  // {John Doe 30}
}
```
在這個例子中，有一個JSON格式的字符串`jsonData`，並使用`json.Unmarshal`將其解析為`Person`結構的實例`p`。

注意在這兩個過程中，Go語言的結構體字段可以通過標簽（tags）來指定對應的JSON鍵名，以及進行其他一些設定，如忽略字段、條件序列化等。