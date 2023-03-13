# Node

## ERROR

### Error:error:0308010C:digital enveloperoutines::unsupported

原因：

node17及以后版本中支持 OpenSSL3.0, 而OpenSSL3.0对允许算法和秘钥大小增加了严格的限制。

解决：

- 用 Node.js v16
- 升级 webpack 至 5.75 以上版本
- 设置环境变量 export SET NODE_OPTIONS=--openssl-legacy-provider ,让 Nodejs 使用旧版本兼容的 OpenSSL