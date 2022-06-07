# 常用 git 命令

## 常用命令

```bash
git add .                                将所有改动放进暂存区
git commit -m "描述"                     提交并附带概要信息
git pull                                 从远程仓库拉去代码
git push                                 推送代码到远程仓库（master分支）
```

## 其余常用命令

```bash
git log                                  查看日志
git log -p                               查看详细历史
git log --stat                           查看简要统计
git status                               查看工作区状态
git branch 名称                          创建分支
git checkout 名称                        切换分支
git checkout -b 名称                     创建并切换到新分支
git branch -d 名称                       删除该分支（不能删除当前所在的分支，不能删除没有合并到master上的分支）
git branch -D 名称                       删除该分支（可以删除没有合并到master上的分支）
git commit --amend                       对最新的一条commit进行修正
git reset --hard HEAD^                   丢弃最新提交（未提交的内容会被擦掉）
git reset --soft HEAD^                   丢弃最新提交（未提交的内容不会被擦掉）
git revert HEAD^                         回到某个commit
git rebase 目标基础点                     重新设置基础点
git merge 名称                           将分支合并到head指向的分支
git push origin localbranch              将代码推送到远程仓库的指定分支
git push -d origin branchName            删除远程分支
git stash                                暂存代码
git stash pop                            弹出暂存代码
git branch | grep ‘dev*’ | xargs git branch -d   删除分支名包含指定字符的分支
```

## 配置别名

对常用的一些命令进行别名配置，提升自己的工作效率

```bash
git config --global alias.st status                 git status ==> git st
git config --global alias.ci commit                 git commit ==> git ci
git config --global alias.co checkout               git checkout ==> git co
git config --global alias.br branch                 git barnch ==> git br
git config --global alias.sh stash                  git stash ==> git sh
git config --global alias.pop "stash pop"           git stash pop ==> git pop
```
