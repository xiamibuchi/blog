# composer

## 简介

## 安装 Composer

### Linux/Mac：

```shell
wget https://dl.laravel-china.org/composer.phar -O /usr/local/bin/composer
chmod a+x /usr/local/bin/composer
```

如遇权限不足，可添加 `sudo`。

### Windows：

1. 直接下载 composer.phar，地址：<https://dl.laravel-china.org/composer.phar>
2. 把下载的 composer.phar 放到 PHP 安装目录
3. 新建 composer.bat, 添加如下内容，并保存：

```shell
@php "%~dp0composer.phar" %*
```

### 查看当前版本

```shell
composer -V
```

### 升级版本

```shell
composer selfupdate
```

> 注意 `selfupdate` 升级命令会连接官方服务器，速度很慢。建议直接下载我们的 `composer.phar` 镜像，每天都会更新到最新。

### 遇到问题？

`composer` 命令后面加上 -vvv （是3个v）可以打印出调错信息，命令如下：

```shell
composer -vvv create-project laravel/laravel blog
composer -vvv require psr/log
```

如果自己解决不了，或发现 BUG，可以在 [@扣丁禅师](https://laravel-china.org/users/12063) 的 GitHub 上 [创建 Issue](https://github.com/zencodex/composer/issues/new)。

注意提问时请带上 -vvv 的输出，并且要求叙述清晰，第一次提问的同学请阅读 [关于提问的智慧](https://laravel-china.org/topics/2396/wisdom-of-asking-questions-chinese-version)。

## 镜像

### laravel-china

[地址](https://packagist.laravel-china.org/)

使用 Composer 镜像加速有两种选项：

+ 选项一：全局配置，这样所有项目都能惠及（推荐）；
+ 选项二：单独项目配置；

选项一、全局配置（推荐）

```shell
composer config -g repo.packagist composer https://packagist.laravel-china.org
```

选项二、单独使用

如果仅限当前工程使用镜像，去掉 -g 即可，如下：

```shell
composer config repo.packagist composer https://packagist.laravel-china.org
```

#### 常见问题

1. 已存在 composer.lock 文件，先删除，再运行 `composer install` 重新生成。

   > 原因：composer.lock 缓存了之前的配置信息，从而导致新的镜像配置无效。

2. 使用 `laravel new` 命令创建工程， 这个命令会从 [这里](http://cabinet.laravel.com/latest.zip) 下一个zip包，里面自带了 composer.lock，和上面原因一样，也无法使用镜像加速，解决方法：

+ 方法一（推荐）：
  不使用 `laravel new`，直接用 `composer create-project laravel/laravel xxx` 新建工程。
+ 方法二：
  运行 `laravel new xxx`，当看见屏幕出现 - Installing doctrine/inflector 时，`Ctrl + C` 终止命令，cd xxx 进入，删除 composer.lock，再运行 `composer install`。