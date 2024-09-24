# Excel py 函數

## 說明

可以在 Cell 中執行 Python 程式碼，並且取得結果。 但和我預期的可以取代 VBA 不同，Excel 的 py 函數只能在 Cell 中執行 (只能把資料當成source/只能計算 =py 的 cell) 目前無法取代 VBA 的功能。 未來應該有機會可以取代 VBA。


```excel

=py

x = xl("G5:G5")
print(x)

// set value for G5

y = 5

xl("G5:G5", y)
// 沒反應沒報錯

x.value = y
// int object has no attribute 'value'

```