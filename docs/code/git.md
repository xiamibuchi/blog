# git

常见的版本控制系统有：git（分布式）、svn（集中式）

[git 官网](https://git-scm.com/)

## config

```bash
# git config  user.name [username]
# git config  user.email [email]

# --global，配置全局参数
git config  --global user.name [username]
git config  --global user.email [email]

# show config
git config --list

# 初始化
git init

# 查看状态
git status

# 从工作区添加到暂存区
git add .
git add --all
git add a.text dir/

# 从暂存区提交到仓库区
git commit -m 'commit message'

# 日志
git log

# 回退
git reset --hard 版本号
git reset --hard head~1 # 回退到上一次提交
```

## githooks

[githooks](https://git-scm.com/docs/githooks)

常用的 hook 有：

- pre-commit：git commit 前运行，用于检查即将提交的快照。如代码风格检查、单元测试
- commit-msg：校验 commit message

## .gitignore

> 在仓库中，有些文件是不想被 git 管理的，比如数据的配置密码、写代码的一些思路等、ide 配置文件。git 可以通过配置从而达到忽视掉一些文件，这样这些文件就可以不用提交了。

- 在仓库的根目录创建一个`.gitignore`的文件，文件名是固定的。
- 将不需要被 git 管理的文件路径添加到`.gitignore`中

> 某些文件加入忽略规则但未生效，原因`.gitignore` 只能忽略没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 是无效的。
> 解决方法：就是先把本地缓存删除（改变成未被追踪状态），再提交

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## 分支

> 在 git 中，分支实质上仅仅是一个指针，每次代码提交后，这个分支指针就会向后移动，保证一直指向最后一次提交的的版本。

### 创建分支

- `git branch 分支名称`创建分支，分支中的代码，在创建时与当前分支的内容完全相同。
- git 在第一次提交时，就有了一个叫`master`的主分支。

### 查看分支

- `git branch`可以查看所有的分支，
- 在当前分支的前面会有一个`*`

### 切换分支

- `git checkout 分支名称`切换分支
- 在当前分支的任何操作，都不会影响到其他的分支，除非进行了分支合并。
- 切换分支之前，**必须保证代码已经提交了**

### 创建并切换分支

- `git checkout -b 分支名称` 创建并切换分支
- 切换分支会做两件事情
  - 把 head 指针指向当前的分支
  - 将工作区的文件变成当前分支最新的内容。

### 删除分支

- `git branch -d 分支名称` 可以删除分支
- 注意：不能在当前分支删除当前分支，需要切换到其他分支才能删除。
- 注意：`master`分支是可以删除的，但是不推荐那么做。

### 合并分支

- `git merge 分支名称` 将其他分支的内容合并到当前分支。
- 在`master`分支中执行`git merge dev` 将`dev`分支中的代码合并到`master`分支
- [分支合并]

## git 合并冲突

- 对于同一个文件，如果有多个分支需要合并时，容易出现冲突。
- 合并分支时，如果出现冲突，只能手动处理，再次提交，一般的作法，把自己的代码放到冲突代码的后面即可。

## 远程仓库

所有的程序员都可以通过远程仓库来进行版本的共享，达到所有人的代码一致的效果。

## 远程仓库相关的命令

### git push

- 作用：将本地仓库中代码提交到远程仓库
- `git push 仓库地址 master` 在代码提交到远程仓库，注意 master 分支必须写，不能省略
- 例子：`git push git@github.com:hucongcong/test.git master` 如果第一次使用，需要填写 github 的用户名和密码

### git pull

- 作用：将远程的代码下载到本地
- `git pull 代码地址` 将远程的代码中 master 分支下载到本地
- 通常在 push 前，需要先 pull 一次。

### git clone

- 作用：克隆远程仓库的代码到本地
- `git clone [远程仓库地址]
- `git clone git://github.com/schacon/test.git`会在本地新建一个`test`文件夹，在 test 中包含了一个`.git`目录，用于保存所有的版本记录，同时 test 文件中还有最新的代码，你可以直接进行后续的开发和使用。
- git 克隆默认会使用远程仓库的项目名字，也可以自己指定。需要是使用以下命令：`git clone [远程仓库地址] [本地项目名]`

### git remote

每次 push 和 pull 操作都需要带上远程仓库的地址，非常的麻烦，我们可以给仓库地址设置一个别名

- `git remote add 仓库别名 仓库地址` 使用仓库别名替代仓库地址。仓库别名相当于一个 js 变量，仓库地址就是对应的值。
  - `git remote add hucc git@github.com:hucongcong/test.git` 设置了一个 hucc 的仓库别名，以后 push 和 pull 都可以不用仓库地址，而用 hucc
- `git remote remove hucc` 删除 hucc 这个仓库别名。
- `git remote` 查看所有的仓库别名
- 如果使用了`git clone`命令从远程仓库获取下来的，那么这个本地仓库会自动添加一个 origin 的远程地址，指向的就是克隆的远程地址。

git push origin master // 把本地 master 分支的最新修改推送至 GitHub

## SSH 免密码登陆

git 支持多种数据传输协议：

- https 协议：`https://github.com/hucongcong/jquery.git`
- ssh 协议：`git@github.com:hucongcong/jquery.git`

每次 push 或者 pull 代码，如果使用 https 协议，那么都需要输入用户名和密码进行身份的确认，非常麻烦。

- github 为了账户的安全，需要对每一次 push 请求都要验证用户的身份，只有合法的用户才可以 push
- 使用 ssh 协议，配置 ssh 免密码，可以做到免密码往 github 推送代码

### SSH 免密码登录配置

注意：这些命令需要在 bash 中敲

- 1 创建 SSH Key：`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
- 2 在文件路径  `C:\用户\当前用户名\` / `/Users/you/.ssh/` 找到  `.ssh`  文件夹
- 3 文件夹中有两个文件：
  - 私钥：`id_rsa`
  - 公钥：`id_rsa.pub`
- 4 在  `github -> settings -> SSH and GPG keys`页面中，新创建 SSH key
- 5 粘贴 公钥  `id_rsa.pub`  内容到对应文本框中
- 5 在 github 中新建仓库或者使用现在仓库，拿到`git@github.com:用户名/仓库名.git`
- 6 此后，再次 SSH 方式与 github“通信”，不用输入密码确认身份了

## github pages 介绍

[GitHub Pages ](https://pages.github.com/)本用于介绍托管在 GitHub 的项目， 不过，由于他的空间免费稳定，用来做搭建一个博客再好不过了。

缺点：只能放静态页面，也就说 github pages 只能解析 html、css、js，无法解析后端语言。

[用户名.github.io] 将来访问路径

博客搭建步骤：

1. 在本地工作目录使用 git 初始化 `git init`
2. 创建自己的博客项目
3. 将创建好的博客添加到暂存区 `git add [文件路径]`
4. 本地提交： `git commit -m "第一个博客"`
5. 在 github 上创建一个项目，项目名`用户名.github.io` 固定的
6. 提交到 github：`git push github仓库地址 master`
7. 查看 github 中对应的仓库中，是不是提交到了
8. 访问：用户名.github.io

## Git Clone 命令直接使用用户名密码

Git Clone 命令,大家都知道这个是克隆项目的.
当我们在服务器部署测试的时候,每次更新都需要输入账户和密码来确认,这样很麻烦,有没有一次性解决的办法呢?有!
在使用 git clone 命令的时候我们可以将用户名和密码嵌入到链接,
代码格式如下:
git clone http://userName:password@链接

示例:
git clone https://username:password@git.oschina.net/wdm/familycloud.git

## stash 暂存

git stash // 可以暂时隐藏工作区未上传的文件

git stash list //查看所有的暂时隐藏

git stash apply // 恢复，恢复后，stash 内容并不删除，你需要使用命令 git stash drop 来删除
git stash pop // 恢复的同时把 stash 内容也删除了。

## tag 标签

`git tag <tagname>`

`git tag -d <tagname>`

### 轻标签

- 添加名称
### 注解标签

- 添加名称
- 添加注解
- 添加签名

## Commit Message

基本格式：

```
<type>[optional scope]: <description>
​<BLANK LINE>
[optional body]
​<BLANK LINE>
[optional footer(s)]
```

- 标题行: 必填, 描述主要修改类型和内容
- body: 描述为什么修改, 做了什么样的修改, 以及开发的思路等等
- footer: BREAKING CHANGE 或 Closed Issues

### TYPE

- feat: 新特性/新功能
- fix: bugfix
- refactor: 重构代码
- perf：提升性能
- docs: 文档修改
- style: 代码格式修改（空格，换行，双引号...）, 注意不是 css 修改
- test: 测试
- chore: 其他修改, 比如构建流程, 依赖管理
- revert: 撤回

### scope

commit 影响的范围, 比如: route, component, utils, build...

### commitlint

[commitlint](https://commitlint.js.org/)

用于规范 commit message

```bash
# install
npm install --save-dev @commitlint/config-conventional @commitlint/cli
# Configure commitlint to use conventional config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# install husky
npm install husky --save-dev
# Activate hooks
npx husky install
# Add git hook
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

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

## Fast-Forward

Fast-Forward

当前分支合并到另一分支时，如果没有分歧解决，就会直接移动文件指针。这个过程叫做 fastforward。

开发一直在 master 分支进行，但忽然有一个新的想法，于是新建了一个develop的分支，并在其上进行一系列提交，完成时，回到 master分支，此时，master分支在创建develop分支之后并未产生任何新的commit。此时的合并就叫 fast forward。

如果执行了 Fast Forward，开发者根本不会看到这个分支，就像在 master 直接 commit 一样。

示例：

1. 新建一个work tree，在master中做几次commit
2. 新建develop的branch，然后再做多次commits

此时的分支流图如下(gitx)：

正常合并

(master)$ git merge develop 
Updating 5999848..7355122
Fast-forward
c.txt |    1 +
d.txt |    1 +
2 files changed, 2 insertions(+), 0 deletions(-)
create mode 100644 c.txt
create mode 100644 d.txt

可以看出这是一次fast-forward式的合并，且合并完之后的视图为扁平状，看不出develop分支开发的任何信息。

使用–no-ff进行合并

—no-ff (no fast foward)，使得每一次的合并都创建一个新的commit记录。即使这个commit只是fast-foward，用来避免丢失信息。

(master)$ git merge –no-ff develop
Merge made by recursive.
c.txt | 2 +-
d.txt | 2 +-
2 files changed, 2 insertions(+), 2 deletions(-)

可以看出，使用no-ff后，会多生成一个commit 记录，并强制保留develop分支的开发记录（而fast-forward的话则是直接合并，看不出之前Branch的任何记录）。这对于以后代码进行分析特别有用，故有以下最佳实践。

–no-ff，其作用是：要求git merge即使在fast forward条件下也要产生一个新的merge commit。此处，要求采用–no-ff的方式进行分支合并，其目的在于，希望保持原有“develop branches”整个提交链的完整性。Git – Fast Forward 和 no fast foward

## git autocomplete commands

### Zsh

```shell
echo 'autoload -Uz compinit && compinit' >> ~/.zshrc
source ~/.zshrc
```

### Bash

Download the necessary script to your Mac by using the following curl command:

`curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash`

Add the following line to the ~/.bash_profile file:

```bash
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
```

Make the Bash script executable by running the following command:

`chmod +x ~/.git-completion.bash`

Restart your Terminal application or run the following command:

`source ~/.bash_profile`

## use git in Android

### Limitations

- If Termux is closed in the background by Android, the cron service will stop updating your repository and you must open Termux again. Refer to instructions for your device model to disable the killing of certain background applications.
- This may negatively affect your devices battery life. I'm not entirely sure yet. 

### Setup

- Install [Termux – Apps on Google Play](https://play.google.com/store/apps/details?id=com.termux&hl=en_GB&gl=US)
- Open Termux, run `termux-change-repo`. Press the ↓ button and press spacebar to tick all repositories, then press enter to move to the next screen
- Press ↓, then spacebar to tick the "Mirrors hosted by Albatross", press enter
- `pkg update && pkg upgrade`
- `pkg install git`
- Run `cd storage/shared` (If you get permissions issues, refer to [this page](https://wiki.termux.com/wiki/Termux-setup-storage))
- Run `git config --global user.email "<your_email>"`
- Run `git config --global user.name "<The name you want on your commits>"`
- Run `git clone <your repository>` 
- With this setup so far, you will need to manually go into the folder in Termux and type `git pull`. If you'd like to create shortcuts to do this on your homescreen, see [this guide](https://renerocks.ai/blog/obsidian-encrypted-github-android/#shortcuts-for-committing-pushing-and-pulling)

[Termux-setup-storage](https://wiki.termux.com/wiki/Termux-setup-storage)
