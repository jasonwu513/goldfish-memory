# Hugo

## Install Hugo

```bash
sudo apt update && sudo apt install hugo -y

```

## Check the version

```bash
hugo version
```

## Create a new site

```bash
hugo new site quickstart
cd quickstart
```

## Add a theme

```bash
git init
git submodule add xxx
```

## Copy an example site

```bash
cp -r themes/xxx/exampleSite/* .
```

## Add a content

```bash
hugo new posts/my-first-post.md
```

## Start the Hugo server

```bash
hugo server -D
```

## Build the site

```bash
hugo 
```