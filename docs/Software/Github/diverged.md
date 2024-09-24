### Main push fail


```
git pull origin main
From github.com:jasonwu513/goldfish-memory
 * branch            main       -> FETCH_HEAD
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
```


From github.com:jasonwu513/goldfish-memory
 * branch            main       -> FETCH_HEAD
fatal: Not possible to fast-forward, aborting.




這個錯誤訊息表示，當嘗試使用 `git pull` 拉取 `main` 分支的最新更改時，Git 試圖使用快進（fast-forward）合併，但由於本地 `main` 分支和遠程 `main` 分支之間存在分歧（diverged），快進合併不是可能的選擇。

簡而言之，這意味著本地 `main` 分支和遠程 `main` 分支都有獨立的提交，因此Git不知道如何自動合併它們。

要解決此問題，有幾個選擇：

1. **使用合併 (Merge)**: 這將合併遠程分支的更改到本地分支，並可能創建一個新的合併提交。
   ```bash
   git pull --no-rebase
   ```

2. **使用變基 (Rebase)**: 這將重新設置本地分支的基點到遠程分支的最新提交，並將在本地分支上的所有提交放在頂部。這可以保持提交歷史的線性。
   ```bash
   git pull --rebase
   ```

選擇哪一種方法取決於偏好和工作流程。如果與其他開發者協同工作，建議在使用變基之前先與他們協商，因為這會改變提交的歷史。