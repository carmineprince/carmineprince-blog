#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add .
git commit -m "deploy"
# git push -f https://github.com/carmineprince/carmineprince-docs-pages.git master
git remote add origin https://github.com/carmineprince/carmineprince-docs-pages.git
git push origin master --force

# cd -
# rm -rf docs/.vuepress/dist
