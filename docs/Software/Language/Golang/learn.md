# Learning Golang

## 怎樣學習一門新語言

1. 了解語言的特性
2. 了解語言的應用場景
3. 尋找相關的教學資源
4. 實作一些小專案
5. 改善自己的程式碼

## Go 語言的特性

1. 編譯型語言
2. 語法簡潔, 關鍵字少

## Go 語言的應用場景

1. Web應用程序：Go語言具有輕量級的協程和內置的高效並發處理機制，因此它非常適合用於構建Web應用程序。一些知名的Web應用程序如Docker和Kubernetes就是使用Go語言編寫的。

2. 網絡編程：Go語言內置的網絡編程庫和高效的並發處理能力，使它成為一種非常適合網絡編程的語言。Go語言中的標準庫包含了許多網絡編程相關的模塊，例如HTTP、TCP、UDP、WebSocket等。

3. 數據庫：Go語言的標準庫中包含了用於訪問多種類型數據庫的庫，例如MySQL、PostgreSQL、MongoDB等，同時也有很多第三方庫可以支持其他類型的數據庫。

4. 雲計算和容器化：由於Go語言的高效性能和輕量級的特性，它非常適合用於雲計算和容器化領域。Go語言編寫的Docker和Kubernetes等工具廣泛應用於雲計算和容器化領域。

## 尋找相關的教學資源

1. 官方文檔, https://golang.org/doc/
2. Github 上用 Star 數量排序的 Go 語言教學資源. ex: https://github.com/Alikhll/golang-developer-roadmap
3. GOOGLE 相關教學資源 go.dev, w3schools go tutorial, gobyexample ...
4. Oreilly, 深入淺出GO

## 實作一些小專案

1. 學完基本語法後, 可以實作一些小專案, 那基本語法要學習那些才能開始開發?
   - 變數
   - 迴圈
   - function
   - 關鍵字

2. 不要一開始就花太多時間在 Project layout 上, 這個可以等到專案變大時再來討論, 套件挑選專案活躍且星星數多的Github project, License 要注意, MIT or APACHE 2.0 License.



4. 目前可以套運的專案為 倉庫到貨通知, 會使用到如下技術
   1. 使用 go mod init xxx 啟動一個專案
   2. MSSQL 資料庫讀取 (帳密不要進入git)
   3. 使用 viper 讀取.env 檔案
   4. 安裝 go web framework gin, gin 是一個快速且簡單的 Go 語言 Web 框架, 用於構建快速且高效的 API 以及 Web 應用程序.
   5. 任務隊列實作, 流程中接到到貨通知後, 需要將資料寫入資料庫, 並且發送到貨通知信件, 接到需求時資料尚未寫入資料庫, 因此需要使用任務隊列來處理.
   6. 功能完成後, 對結構進行重構, 使其更易於維護.

5. 紀錄專案開發流程, 以便日後查閱.
   1. go project cli 建立專案
    - go mod init 的作用為初始化 go module (like nodejs npm init) , 會在專案目錄下產生 go.mod (like nodejs package.json) 檔案, 並且會自動下載相關的套件.
    - go get -u github.com/xxx/xxx 可以下載指定的套件. (like nodejs npm i xxx) 其中-u 參數為更新套件.
    - go.sum (like nodejs package.lock)會紀錄下載的套件的版本, 以便日後更新套件時, 可以知道更新的版本.
    - go mod tidy 可以管理 go.mod 中的套件, 會將不需要的套件移除, 並且會自動下載相關的套件.

   2. 環境變數設定 & mysql 讀取

    ```bash
    go get -u github.com/spf13/viper
    go get -u gorm.io/gorm
    go get -u gorm.io/driver/sqlserver
    ```

    ```golang
    package main

    import (
    	"fmt"
    	"github.com/spf13/viper"
        "gorm.io/driver/mssql"
        "gorm.io/gorm"
    )

    func main() {
    	viper.SetConfigFile(".env")
    	viper.AutomaticEnv()
    	viper.ReadInConfig()

    	db, err := gorm.Open(mssql.Open(fmt.Sprintf("sqlserver://%s:%s@%s:%s?database=%s",
    		viper.GetString("DB_USER"),
    		viper.GetString("DB_PASSWORD"),
    		viper.GetString("DB_HOST"),
    		viper.GetString("DB_PORT"),
    		viper.GetString("DB_NAME"),
    	)), &gorm.Config{})

    	if err != nil {
    		panic(err)
    	}

    	fmt.Println(db)

        // excute pure sql select * from users and print result and user struct
        type User struct {
            ID int
            Name string
            Age int
        }

        var users []User
        db.Raw("select * from users").Scan(&users)
        fmt.Println(users)




    }

    
    ```


    ```env
    # .env
    DB_HOST=xxx.xxx.xxx.xxx
    DB_PORT=1433
    DB_USER=xxx
    DB_PASSWORD=xxx
    DB_NAME=xxx
    ```

    3. gin web framework
    
     ```bash
    go get -u github.com/gin-gonic/gin
    ```

    ```golang
    package main

    import (
    	"fmt"
    	"github.com/gin-gonic/gin"
    	"github.com/spf13/viper"
    	"gorm.io/driver/mssql"
    	"gorm.io/gorm"
    )

    func main() {
    	viper.SetConfigFile(".env")
    	viper.AutomaticEnv()
    	viper.ReadInConfig()

    	db, err := gorm.Open(mssql.Open(fmt.Sprintf("sqlserver://%s:%s@%s:%s?database=%s",
    		viper.GetString("DB_USER"),
    		viper.GetString("DB_PASSWORD"),
    		viper.GetString("DB_HOST"),
    		viper.GetString("DB_PORT"),
    		viper.GetString("DB_NAME"),
    	)), &gorm.Config{})

    	if err != nil {
    		panic(err)
    	}

    	fmt.Println(db)

    	r := gin.Default()

    	r.GET("/ping", func(c *gin.Context) {
    		c.JSON(200, gin.H{
    			"message": "pong",
    		})
    	})

        // listen and serve on port 3008
        r.run(":3008")
    }
    ```