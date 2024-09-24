# Golang 註解


## Function 註解範例

1. 單行註解

```go
// Add adds two integers and returns the result
func Add(x, y int) int {
    return x + y
}
```

2. 加上 paramter and return 說明

```go
// Add adds two integers and returns the result
// param x: int
// param y: int
// return int
func Add(x, y int) int {
    return x + y
}
```



參考:
https://medium.com/@helbingxxx/how-to-write-go-doc-comments-421e0ca85996