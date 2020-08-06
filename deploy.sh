#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.dukeshao.com' > CNAME

git init
git add -A
git commit -m 'deploy'

expect << EOF
spawn git push -f https://github.com/dukeshao/dukeshao.github.io.git master
expect "*sername"
send "dukeshao\n"
expect "*assword"
send "wa711858\n"
EOF

# 如果发布到 https://<USERNAME>.github.io

# 走 ssh
# git push -f git@dukeshao:dukeshao/dukeshao.github.io.git master

# 走 https
# git push -f https://github.com/dukeshao/dukeshao.github.io.git master

cd -