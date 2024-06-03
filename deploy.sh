#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:githubhtml233/githubhtml233.github.io.git main:gh-pages

cd -