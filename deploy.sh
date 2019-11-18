#!/usr/bin/env sh
set -e
cd docs/.vuepress/dist
git init
git config --global user.email "13601935905@163.com"
git config --global user.name "Rex-Xinchao"
git add -A
git commit -m 'deploy'
git push -f https://github.com/Rex-Xinchao/Rex-Xinchao.github.io.git master