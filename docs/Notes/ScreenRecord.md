# 螢幕錄影

## Mac

1. 使用內建的錄影程式 cmd + shift + 5
2. 為了能將影片嵌入日記, 透過 ffmpeg 轉換為 gif

```bash 
ffmpeg -i test.mov \
    -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 output.gif
```

3. 為了方便轉換, 新增 zsh function 至 `~/.zshrc`

```bash
function mov2gif() {
    ffmpeg -i $1 \
        -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
        -loop 0 $1.gif
}
```

4. 重新載入 `source ~/.zshrc`, 之後就可以直接使用 `mov2gif test.mov` 來轉換影片為 gif



![picture 0](images/0d3b0471740a4a1da90eb3e83f0f45383194175b12bf5b104133a009c94b444e.gif)  
