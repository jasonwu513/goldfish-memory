# yt-dlp

## 介紹

[yt-dlp](https://github.com/yt-dlp/yt-dlp)

## 安裝

Global install

```bash
brew install yt-dlp
```

venv install

```bash
mkdir yt-dlp
cd yt-dlp 
python3 -m venv yt-dlp-env
source yt-dlp-env/bin/activate
pip3 install xyz
```


## 使用

### 下載影片

```bash
yt-dlp --output "%(title)s.%(ext)s" --embed-thumbnail --add-metadata --merge-output-format mp4 「影片網址」
```

```python
import yt_dlp

yt_opts = {
    'format': 'bestvideo+bestaudio/best',
    'outtmpl': '%(title)s.%(ext)s',
    'embed_thumbnail': True,
    'add_metadata': True,
    'merge_output_format': 'mp4'
}

with yt_dlp.YoutubeDL(yt_opts) as ydl:
    ydl.download(['影片網址'])
```






## 僅下載音訊

```bash
yt-dlp --output "%(title)s.%(ext)s" --embed-thumbnail --add-metadata --extract-audio --audio-format mp3 --audio-quality 320K 「影片網址」

```

```python
import yt_dlp

yt_opts = {
    'format': 'bestaudio/best',
    'outtmpl': '%(title)s.%(ext)s',
    'extract_audio': True,
    'audio_format': 'mp3',  # Ensure audio is converted to MP3
    'audio_quality': '320K',
    'postprocessors': [
        {  # Extract and convert audio to mp3 using ffmpeg
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '320',
        },
        {  # Embed thumbnail in mp3 file
            'key': 'FFmpegMetadata',
        },
        {  # Embed metadata in mp3 file
            'key': 'EmbedThumbnail',
        }
    ],
}

with yt_dlp.YoutubeDL(yt_opts) as ydl:
    ydl.download(['影片網址'])
```



## 參考資料

- [yt-dlp-usage](https://ivonblog.com/posts/yt-dlp-usage/)