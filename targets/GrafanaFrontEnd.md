# Grafana FrontEnd

## 技術線

- React: 17.0.1
- Redux: 4.0.5
- jest: 26.6.3


主要頁面是由 Index.go 生成的
api  由 api.go 生成的


## 路由

- public/routes/routes.ts


## example route for api key

```ts
.when('/org/apikeys', {
      template: '<react-container />',
      reloadOnSearch: false,
      resolve: {
        roles: () => ['Editor', 'Admin'],
        component: () =>
          SafeDynamicImport(import(/* webpackChunkName: "ApiKeysPage" */ 'app/features/api-keys/ApiKeysPage')),
      },
    })
```

在點擊不同的Link 的時候, 會依據路由的設定, 來決定要載入哪個component


## 解析 ApiKeysPage

```ts
提
```