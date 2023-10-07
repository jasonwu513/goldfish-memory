使用分支保護規則是一種在 GitHub 上確保存儲庫的穩定性和安全性的方法。以下是如何設置和一些常見的分支保護規則的範例：

### 如何設置分支保護規則：

1. 登入 GitHub 並前往存儲庫。
2. 點擊存儲庫的 "Settings"。
3. 在左側欄中，點擊 "Branches"。
4. 在 "Branch protection rules" 區域，點擊 "Add rule"。

### 常見的分支保護規則範例：

1. **保護分支**:
   - 在 "Branch name pattern" 中輸入想要保護的分支名稱，如 `main`。
   - 勾選 "Require pull request reviews before merging"。
     - 這確保在合併變更之前，必須有人審查拉取請求。

2. **要求檢查**:
   - 勾選 "Require status checks to pass before merging"。
     - 這意味著在合併變更之前，例如 CI 測試，必須通過所有選定的狀態檢查。
   - 在顯示的列表中選擇需要的檢查。

3. **要求審查者批准**:
   - 在 "Require pull request reviews before merging" 部分，設定 "Required approving reviews" 的數量。例如，如果輸入 `2`，則需要兩名審查者批准拉取請求。

4. **禁止直接推送**:
   - 勾選 "Restrict who can push to matching branches"。
     - 這將防止任何人直接推送到分支，除非他們在以下列表中。

5. **包括管理員**:
   - 通常，存儲庫的管理員可以繞過分支保護規則。如果你想要規則也適用於管理員，勾選 "Include administrators"。

6. **要求線性歷史**:
   - 勾選 "Require linear commit histories"。
     - 這將確保合併前所有的提交都是線性的，意味著不允許合併提交。

完成上述設置後，點擊 "Create" 或 "Save changes" 以應用規則。

這些只是一些基本的分支保護規則範例，可以根據團隊和項目的需求進行調整。