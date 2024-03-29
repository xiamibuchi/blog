# Node

- 前后端语言统一
- 高性能I/O
- 命令行工具
- 桌面图形应用程序
- 混合应用

## install

[volta](https://volta.sh/)

```bash
curl https://get.volta.sh | bash
# install Node
volta install node
# start using Node
node

# show current npm registry
npm get registry
# set npmmirror registry
npm config set registry https://registry.npmmirror.com

# show current npm registry
yarn config get registry
# set npmmirror registry
yarn config set registry https://registry.npmmirror.com
```

也可用 `.npmrc` 修改配置

```
# registry
registry=https://registry.npmmirror.com

# common cdn config
sentrycli_cdnurl=https://npmmirror.com/mirrors/sentry-cli
chromedriver_cdnurl=https://npmmirror.com/mirrors/chromedriver
puppeteer_download_host=https://npmmirror.com/mirrors
```

## 加密

- 数学上的加密： https://nodejs.org/api/crypto.html
- 压缩文件： https://nodejs.org/api/zlib.html
- 文件系统交互： https://nodejs.org/api/fs.html

## 常用

### npm

```bash
# why package installed
npm why [package_name]
```

### pnpm

- Saving disk space
  - 只会将不同版本间有差异的文件添加到仓库
  - 依赖统一存在硬盘上的某一位置，当软件包被被安装时，包里的文件会硬链接到这一位置
  - pnpm 的 node_modules 布局使用符号链接来创建依赖项的嵌套结构

1. set [Workspace](https://pnpm.io/workspaces)

> monorepo 的配置，一般是书写一个基础配置，每个项目再各自扩展

> 添加本地项目  pnpm add local-ui --filter local-app --workspace

### http

```js
const http = require("http");
function start() {
  function onRequest(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html;charset=UTF-8"
    });
    // 往页面打印值
    response.write('<h1 style="text-align:center">Hello NodeJS</h1>');
    // 结束响应
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start = start;
```

### fs

一般用 `fs-extra` 替代

### pm2

PM2 是 node 进程管理工具，可以利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等

- 启用一个应用：`pm2 start app.js`
- 查看应用详情：`pm2 show app_name|app_id`
- 停止：`pm2 stop app_name|app_id`
- 删除：`pm2 delete app_name|app_id`
- 重启：`pm2 restart app_name|app_id`
- 停止所有：`pm2 stop all`
- 查看所有的进程：`pm2 list`
- 查看所有的进程状态：`pm2 status`
- 查看某一个进程的信息：`pm2 describe app_name|app_id`
- 开机启动：`pm2 startup`
- 删除自启动服务：`pm2 unstartup systemd`

[ecosystem.config.js](https://pm2.keymetrics.io/docs/usage/application-declaration/)

```js
module.exports = {
  apps : [{
    name   : "app",
    script : "app.js",
    exec_mode: 'cluster',
    max_memory_restart: process.env.NODE_ENV === 'production' ? '3584M' : '2G',
    instances: 10,
    env_production: {
      PORT: 80,
      NODE_ENV: "production"
    },
    env_development: {
      PORT: 80,
      NODE_ENV: "development"
    }
  }]
}
```

```bash
# Start applications in development env
pm2 start ecosystem.config.js
# Start applications in production env
pm2 start ecosystem.json --env production

# Stop
pm2 stop ecosystem.config.js

# Restart
pm2 restart ecosystem.config.js

# Reload
pm2 reload ecosystem.config.js

# Delete
pm2 delete ecosystem.config.js
```

### npx

1. 查找当前目录下的 `./node_modules/.bin` 里查找是否有可执行的命令，
2. 没有找到的话再从全局里查找是否有安装对应的模块
3. 全局也没有就会自动下载对应的模块，用完即删

```bash
# 调用项目内部安装的模块
npx vitepress

# 自动安装依赖包并执行某个命令
npx create-react-app my-react-app

# 使用特定 node 版本执行命令
npx node@0.12.8 -v

# -p 指定 npx 要安装的模块，常用于安装多模块依赖时
npx -p node@0.12.8 node -v

# -c npx所有命令都用 npx 解释
npx -p lolcatjs -p cowsay -c 'cowsay hello | lolcatjs'

# -c 将环境变量带入所要执行的命令
npx -c 'echo "$npm_package_name"'

# 执行远程模块
npx github:piuccio/cowsay hello
```

## ERROR

### digital envelope routines::initialization error

报错：

```
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]
library: 'digital envelope routines'
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

原因：

node17及以后版本中支持 OpenSSL3.0, 而OpenSSL3.0对允许算法和秘钥大小增加了严格的限制。

解决：

- 用 Node.js v16
- 升级 webpack 至 5.75 以上版本
- 设置环境变量 `export SET NODE_OPTIONS=--openssl-legacy-provider` ,让 Nodejs 使用旧版本兼容的 OpenSSL

### The chromium binary is not available for arm64

Mac m系列芯片 或者其他 arm 架构的系统会遇到这个问题

报错：

```
The chromium binary is not available for arm64:
If you are on Ubuntu, you can install with:

 apt-get install chromium-browser
```

解决：

- Install chromium with Homebrew
  - brew install chromium
  - which chromium
- Skip future Chromium installs

```bash
# ~/.zshrc
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`
```
