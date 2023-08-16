# VSCODE


reusse current window 
```
code -r path
```

## devcontainer

可以在本機或遠端將專案用container 啟動
可以在devcontainer 中, 設定多種參數
參照

遠端有兩種使用模式,

1. 將程式碼塞入 container volume 中, (建議開發完就commit 避免 container 被rm 程式碼消失), 建議直接用 CLONE REPOSITORY IN CONTAINER VOLUME
2. 將遠端主機上之程式碼 bind 至 container
3. 如果用HARBOR 要記得 改,   "insecure-registries": [ "192.168.1.56:8888"], 並記得 docker login


settings.json
```json
"docker.environment": {
    "DOCKER_HOST": "ssh://your-remote-user@your-remote-machine-fqdn-or-ip-here"
}
```

1. 第一種方式 workspace 不用特別去改


devcontainer.json
```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node
{
	"name": "Node.js",
	"image": "mcr.microsoft.com/devcontainers/javascript-node:0-18",
	"features": {
		"ghcr.io/rocker-org/devcontainer-features/apt-packages:1": {},
		"ghcr.io/devcontainers-contrib/features/zsh-plugins:0": {}
	},
	"appPort": ["3001:3000"]

}
```

1. 第二種方式 workspace 如下修改
```json
{
	"name": "Python 3.11",
	// Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
	// "build": {
    //     "dockerfile": "Dockerfile"
    // },
	"image": "python:3.11.1",
	"customizations": {
		"vscode": {
			"extensions": [
				"alefragnani.Bookmarks",
				"eamodio.gitlens",
				"ms-python.python",
				"ms-python.vscode-pylance"
			]
		}
	},

	"forwardPorts": [1237],

	"remoteUser": "root",
    // 將遠端server folder掛載至container 內部
    "workspaceMount": "source=/home/jasonwu513/remote/python3.11/aspeed,target=/aspeed,type=bind,consistency=cached",
    // 指定 workspaceFolder 路徑 IN CONTAINER
    "workspaceFolder": "/aspeed"
}
```