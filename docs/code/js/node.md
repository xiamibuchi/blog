# Node

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
