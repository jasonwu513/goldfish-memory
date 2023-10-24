# gore

## 說明

gore 是一個可以在命令列中執行的 REPL 工具，可以用來測試 Go 程式碼。


## 安裝

```bash
go install github.com/x-motemen/gore/cmd/gore@latest
```

把 `$GOPATH/bin` 加到 `$PATH` 中，就可以在命令列中執行 `gore` 了。

## 使用

```bash
$ gore

gore version 0.5.1  :help for help

gore> 1+1

gore> import "testGore/t2"  // 注意main package不能import

gore> t2.Hello()

```