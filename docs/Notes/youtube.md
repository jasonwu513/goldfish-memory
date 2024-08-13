# youtube 快速摘要

## mapify

- [mapify](https://mapify.so/) 是一個可以將 youtube 影片轉換成心智圖的服務
- 可以節省時間，讓你快速瀏覽影片重點
- 將資料匯出 markdown 後, 整理至 docusaurus 中
- 缺點: 為付費軟體且需要有 cc 字幕才能正確轉換


## 自行轉換的流程

1. 下載影片mp3 透過 youtube-dl 
2. 透過 whisper 進行音訊轉文字
3. 透過 chatgpt or gemini api 將資訊轉為 整理過的 markdown 格式, 並整理至 docusaurus 中


## 視覺化流程評估

1. 採用 n8n 進行自動化流程

- [n8n](https://n8n.io/) 是一個開源的自動化工具，可以將不同的服務串接在一起
- 可以透過 n8n 將上述流程串接在一起，並且視覺化呈現
- 可以透過 n8n 的 webhook 功能，將資料直接傳送至 docusaurus 中



2. 採用 langflow 進行自動化流程

- [langflow](https://www.langflow.org//) 是一個自然語言處理的服務
- 可以透過 langflow 將上述流程串接在一起，並且視覺化呈現


3. 採用 flowise

- [flowise](https://flowise.com/) 是一個自動化流程視覺化工具
- 可以透過 flowise 將上述流程串接在一起，並且視覺化呈現


## 結論

- 透過自動化流程，可以節省大量時間
- 透過視覺化流程，可以更清楚的了解整個流程 (或著其實不需要視覺化)

連結
- [如何使用Whisper API 與 ChatGPT API 快速摘要YouTube 影片?](https://www.youtube.com/watch?v=uD5_pKbBhgo)