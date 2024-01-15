
build image example:

```bash

#!/bin/bash

version=$1
git_commit_hash=$(git rev-parse --short HEAD)

if [ -z "$version" ]; then
    echo "Please input version tag"
    docker images | grep image_name
    exit 1
fi

echo "version: $version"
echo "git_commit_hash: $git_commit_hash"


docker build -t image_name:$version-$git_commit_hash -t image_name:latest -f ./docker/Dockerfile .

echo "docker build success"

docker tag image_name:$version-$git_commit_hash example:5000/image_name:$version-$git_commit_hash
docker tag image_name:latest example:5000/image_name:latest

echo "docker tag success"

docker push example:5000/image_name:$version-$git_commit_hash
docker push example:5000/image_name:latest
```





