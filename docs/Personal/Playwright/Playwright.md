# Playwright 


## Introduction

Playwright 是一個開源的自動化瀏覽器測試工具，支援三大主流瀏覽器：Chrome, Firefox 和 Safari。它可以自動操作網頁上的元素，並且可以測試 JavaScript 和網頁性能。Playwright 的 API 相當直觀易用，支援多種程式語言，比如 JavaScript, Python, C# 等。這使得 Playwright 成為一個非常適合用於網頁測試的工具。


## 好處

1. 在BPM程式更新後, 可以針對常用程式快速進行測試, 避免同仁追殺.
2. 在開發流程中, 修改流程或表單後, 常常會重複測試, 透過自動化測試, 並避免因疲勞而造成的錯誤.

## 缺點

1. 要花時間寫測試


## 使用方法

1. 安裝 playwright

```bash
pip install playwright
```

2. 範例

```python
import re
import time
from playwright.sync_api import Page, expect


def test_homepage_has_Playwright_in_title_and_get_started_link_linking_to_the_intro_page(page: Page):
    page.goto("https://playwright.dev/")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("Playwright"))

    # create a locator
    get_started = page.get_by_role("link", name="Get started")

    # Expect an attribute "to be strictly equal" to the value.
    expect(get_started).to_have_attribute("href", "/docs/intro")

    # Click the get started link.
    get_started.click()

    # Expects the URL to contain intro.
    expect(page).to_have_url(re.compile(".*intro"))
    time.sleep(1)
```


3. 執行 測試

```bash
python -m pytest  --headed  # --headed 會顯示瀏覽器 無瀏覽器模式會報錯
```

```bash
python -m pytest .\test_it_apply_2.py --headed 
```


4. 錄製script

```bash
python3 -m playwright codegen --target python -o it_apply.py -b chromium http://192.1xx.xxx.xxx:8006
```

5. 選取和操縱元素

```python
# radio button select
page.frame_locator("#ifmFucntionLocation").frame_locator("#ifmAppLocation").locator('input[value="MIS"]').check()
# select by value
page.get_by_label('Choose a color').select_option(label='Blue')
# fill text
page.frame_locator("#ifmFucntionLocation").frame_locator("#ifmAppLocation").locator("#desp").fill("MIS")
```

## todo

1. 不要將人員資料寫死, 改成yml file 讀取


