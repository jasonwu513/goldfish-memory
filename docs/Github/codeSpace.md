# Code Space

Github pro 帳戶 180hr / 月  2core 8G ram   
Github 免費 帳戶 120hr / 月  2core 8G ram  

1. 可以使用 Code Space 來建立一個線上的開發環境，可以直接在瀏覽器上開發，不需要安裝任何軟體。
2. 也可以用 VS Code 連線到 Code Space，就像連線到遠端的 Server 一樣。

3. 如果需要用到 Mysql 或 redis 等服務，可以使用 Docker Compose 來啟動

.devcontainer/devcontainer.json
```
{
  "name": "開發容器名稱",
  "dockerComposeFile": "docker-compose.yml",
  "service": "nana_srv",  // 應用程式服務的名稱
  "workspaceFolder": "/workspace",
  
  // 其他配置設定...
  
  "extensions": [
    // 要安裝的 VS Code 擴充套件列表
  ],

  "postCreateCommand": "apt-get update && apt-get install -y 需要的軟體包",

  "forwardPorts": [
    3306,  // 轉發 MariaDB 的埠
    6379   // 轉發 Redis 的埠
  ],

  "remoteUser": "遠端使用者"
}

```

docker-compose.yml
```
version: '3'

services:
  nana_srv:
    image: nana_srv:latest
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    volumes:
      - .:/workspace
  mariadb:
    image: mariadb:latest
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: testdb
      MYSQL_USER: user
      MYSQL_PASSWORD: pass
    ports:
      - "3306:3306"

  redis:
    image: redis:latest
    ports:
      - "6379:6379"

```

```
version: '3'

services:
  projectName:
    image: mcr.microsoft.com/devcontainers/go:1-1.20-bullseye
    stdin_open: true
    tty: true
    command: ["tail", "-f", "/dev/null"]
    ports:
      - "8080:8080"
    volumes:
      - /Users/xxxxx/projects/go/projectName:/workspace
  mariadb:
    image: mariadb:latest
    user: root
    environment:
      MYSQL_ROOT_PASSWORD: xxxxxx
      MYSQL_DATABASE: projectName
      MYSQL_USER: root
      MYSQL_PASSWORD: xxxxxx
    ports:
      - "13306:3306"

  redis:
    image: redis:latest
    ports:
      - "16379:6379"



```


```

// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/go
{
	"name": "projectName",
	"dockerComposeFile": "docker-compose.yml",
	"service": "projectName",
	"workspaceFolder": "/workspace",
	// "forwardPorts": [8080],
	// "appPort": ["13306:3306"],
	"features": {
		"ghcr.io/devcontainers/features/node:1": {
			"nodeGypDependencies": true,
			"version": "18",
			"nvmVersion": "latest"
		}
	},
	// "postCreateCommand": "go version"
}

```