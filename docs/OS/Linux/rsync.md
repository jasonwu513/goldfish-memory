# Rsync

## 一般用法

```bash
 rsync -avhu --no-compress --progress --exclude='node_modules' source/ target/
 ```

 -a : archive mode; equals -rlptgoD (no -H,-A,-X)
 -v : verbose
 -h : human readable
 -u : update, skip files that are newer on the receiver

## 從遠端同步到本地

```bash
rsync -avhu --no-compress --progress --exclude='node_modules' user@remote:/path/to/source/ /path/to/target/
```

## exclude from file

```bash
rsync -avhu --no-compress --progress --exclude-from 'exclude.txt' source/ target/
```

## include from file

```bash
rsync -avhu --no-compress --progress --include-from 'include.txt' source/ target/
```