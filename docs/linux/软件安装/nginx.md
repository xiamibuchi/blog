# nginx

## 安装依赖

编译环境、开发库需提前装好

```shell
yum install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel  PCRE pcre-devel
```

### gcc

安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境

### PCRE pcre-devel

PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。

### zlib

zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip

### OpenSSL

OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http）

## 安装 nginx

```shell
wget http://nginx.org/download/nginx-1.6.2.tar.gz // 下载nginx，建议下载到 /usr/local/src

tar zxvf nginx-1.6.2.tar.gz // 解压安装包

cd nginx-1.6.2 // 进入安装包目录

./configure // 编译安装，默认地址 /usr/local/nginx

make // 安装

make install
```

> 第一次编译的时候：使用 64 位的系统第一次编译安装出现
> `error while loading shared libraries: libpcre.so.1: cannot open shared object file: No such file or directory` 这种情况，nginx 默认是在 lib64 下,32 位的是在 lib 下

> 查找：find / -name 'libpcre.so.1' 出现 /usr/local/lib/libpcre.so.1，我们建立以符号链接：ln -s /usr/local/lib/libpcre.so.1 /lib64/libpcre.so.1
> 这样可以查看 nginx 版本 /usr/local/nginx/sbin/nginx -v 出现版本号

## 开机自启

即在 rc.local 增加启动代码就可以了。

vi /etc/rc.local
增加一行 /usr/local/nginx/sbin/nginx
设置执行权限：

chmod 755 rc.local
