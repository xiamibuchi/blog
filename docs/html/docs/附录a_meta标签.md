# meta 标签

HTML 中的 `<meta>` 元素，是 head 区的一个辅助性标签。可用于搜索引擎优化、控制页面缓存、网页显示等。

meta 标签的组成：meta 标签共有两个属性，它们分别是 http-equiv 属性和 name 属性，不同的属性又有不同的参数值，这些不同的参数值就实现了不同的网页功能。

## name 属性

name 属性主要用于描述网页，与之对应的属性值为 content，content 中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。

meta 标签的 name 属性语法格式是：

`<meta name="参数"content="具体的参数值">`

其中 name 属性主要有以下几种参数：

A、Keywords(关键字)

说明：keywords 用来告诉搜索引擎你网页的关键字是什么。

举例：`<meta name="keywords"content="science,education,culture,politics,ecnomics，relationships,entertaiment,human">`

B、description(网站内容描述)

说明：description 用来告诉搜索引擎你的网站主要内容。

举例：`<meta name="description"content="Thispageisaboutthemeaningofscience,education,culture.">`

C、robots(机器人向导)

说明：robots 用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。

content 的参数有 all,none,index,noindex,follow,nofollow。默认是 all。

举例：`<meta name="robots"content="none">`

D、author(作者)

说明：标注网页的作者

举例：`<meta name="author"content="root,root@xxxx.com">`

## http-equiv 属性

http-equiv 顾名思义，相当于 http 的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为 content，content 中的内容其实就是各个参数的变量值。

meta 标签的 http-equiv 属性语法格式是：

`<meta http-equiv="参数"content="参数变量值">`

其中 http-equiv 属性主要有以下几种参数：

A、Expires(期限)

说明：可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。

用法：`<meta http-equiv="expires"content="Fri,12Jan200118:18:18GMT">`

注意：必须使用 GMT 的时间格式。

B、Pragma(cache 模式)

说明：禁止浏览器从本地计算机的缓存中访问页面内容。

用法：`<meta http-equiv="Pragma"content="no-cache">`

注意：这样设定，访问者将无法脱机浏览。

C、Refresh(刷新)

说明：自动刷新并指向新页面。

用法：`<meta http-equiv="Refresh" content="2;URL=http://www.baidu.com">`

(注意后面的引号，分别在秒数的前面和网址的后面)

注意：其中的 2 是指停留 2 秒钟后自动刷新到 URL 网址。

D、Set-Cookie(cookie 设定)

说明：如果网页过期，那么存盘的 cookie 将被删除。

用法：`<meta http-equiv="Set-Cookie" content="cookievalue=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/">`

注意：必须使用 GMT 的时间格式。

E、Window-target(显示窗口的设定)

说明：强制页面在当前窗口以独立页面显示。

用法：`<meta http-equiv="Window-target" content="_top">`

注意：用来防止别人在框架里调用自己的页面。

F、content-Type(显示字符集的设定)

说明：设定页面使用的字符集。

用法：`<meta http-equiv="content-Type" content="text/html;charset=gb2312">`

G、content-Language（显示语言的设定）

用法：`<meta http-equiv="Content-Language" content="zh-cn"/>`

H、Cache-Control 指定请求和响应遵循的缓存机制。
Cache-Control 指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置 Cache-Control 并不会修改另一个消息处理过程中的缓存处理过程。请求时的缓存指令包括 no-cache、no-store、max-age、max-stale、min-fresh、on

ly-if-cached，响应消息中的指令包括 public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age。各个消息中的指令含义如下
Public 指示响应可被任何缓存区缓存
Private 指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效
no-cache 指示请求或响应消息不能缓存
no-store 用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。
max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应
min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应
max-stale 指示客户机可以接收超出超时期间的响应消息。如果指定 max-stale 消息的值，那么客户机可以接收超出超时期指定值之内的响应消息。

使用技巧

Meta 标签是用来描述网页属性的一种语言，标准的 Meta 标签可以便于搜索引擎排序，提高搜索引擎网站权重排名。要想网站做的更符合搜索引擎标准就必须了解 meta 标签

1、META 标签的 keywords

写法为：<metaname="Keywords"content="信息参数"/>

meat 标签的 Keywords 的的信息参数，代表说明网站的关键词是什么。

2、META 标签的 Description

<metaname="Description"content="信息参数"/>

meta 标签的 Description 的信息参数，代表说明网站的主要内容，概况是什么。

3、META 标签的 http-equiv=Content-Typecontent="text/html

http-equiv=Content-Type 代表的是 HTTP 的头部协议，提示浏览器网页的信息，

<metahttp-equiv="Content-Type"content="text/html;charset=信息参数"/>

meta 标签的 charset 的信息参数如 GB2312 时，代表说明网站是采用的编码是简体中文；

meta 标签的 charset 的信息参数如 BIG5 时，代表说明网站是采用的编码是繁体中文；

meta 标签的 charset 的信息参数如 iso-2022-jp 时，代表说明网站是采用的编码是日文；

meta 标签的 charset 的信息参数如 ks_c_5601 时，代表说明网站是采用的编码是韩文；

meta 标签的 charset 的信息参数如 ISO-8859-1 时，代表说明网站是采用的编码是英文；

meta 标签的 charset 的信息参数如 UTF-8 时，代表世界通用的语言编码；

4、META 标签的 generator

<metaname="generator"content="信息参数"/>

meta 标签的 generator 的信息参数，代表说明网站的采用的什么软件制作。

5、META 标签的 author

<metaname="author"content="信息参数">

meta 标签的 author 的信息参数，代表说明网页版权作者信息。

6、META 标签的 http-equiv="Refresh"

<Metahttp-equiv="Refresh"Content="时间;Url=网址参数">

meta 标签的 Refresh 代表多少时间网页自动刷新，加上 Url 中的网址参数就代表，多长时间自动链接其他网址。

7、META 标签的 HTTP-EQUIV="Pragma"CONTENT="no-cache"

<METAHTTP-EQUIV="Pragma"CONTENT="no-cache">代表禁止浏览器从本地计算机的缓存中访问页面内容,这样设定，访问者将无法脱机浏览。

8、META 标签的 COPYRIGHT

<METANAME="COPYRIGHT"CONTENT="信息参数">

meta 标签的 COPYRIGHT 的信息参数，代表说明网站版权信息。

9、META 标签的 http-equiv="imagetoolbar"

<metahttp-equiv="imagetoolbar"content="false"/>

指定是否显示图片工具栏，当为 false 代表不显示，当为 true 代表显示。

10、META 标签的 Content-Script-Type

<Metahttp-equiv="Content-Script-Type"Content="text/javascript">

W3C 网页规范，指明页面中脚本的类型。

11、META 标签的 revisit-after

<METAname="revisit-after"CONTENT="7days">

revisit-after 代表网站重访,7days 代表 7 天，依此类推。

12、META 标签的 Robots<metaname="Robots"contect="信息参数">

Robots 代表告诉搜索引擎机器人抓取哪些页面

其中的属性说明如下：

信息参数为 all：文件将被检索，且页面上的链接可以被查询；

信息参数为 none：文件将不被检索，且页面上的链接不可以被查询；

信息参数为 index：文件将被检索；

信息参数为 follow：页面上的链接可以被查询；

信息参数为 noindex：文件将不被检索，但页面上的链接可以被查询；

信息参数为 nofollow：文件将被检索，但页面上的链接不可以被查询；

## 常用meta标签

## 网页相关信息

### 网页关键字 (SEO)

```html
<meta name="keywords"  content="bolg"/>
```

### 网页描述 (SEO)

```html
<meta name="description"  content="blog from Qi"/>
```

### 标注网页的作者或制作组

```html
<meta name="author"  content="Qi"/>
```

### 编辑器的说明

```html
<meta name="generator" content="webstrom"/> 
```

### 标注版权

```html
 <meta name='Copyright'  content='zhoulujun'/>
```

### 通知搜索引擎多少天访问一次

```html
 <meta name="revisit-after"  content="7days"/>
```

## http-equiv

### 设定网页的到期时间。一旦网页过期，必须到服务器上重新传输

```html
<meta http-equiv="expires" content="Fri,12Jan200118:18:18GMT"/> 
```

### 禁止浏览器从本地计算机的缓存中访问页面内容

```html
<meta http-equiv="Pragma" content="no-cache"/> 
```

### 自动刷新并指向新页面。其中的1是指停留1秒钟后自动刷新到URL网址

```html
<meta http-equiv="Refresh" content="1;URL=https://github.com/QiShaoXuan"/>
```

### 如果网页过期，那么存盘的cookie将被删除

必须使用GMT的时间格式

```html
<meta http-equiv="Set-Cookie" content="cookie value=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/"/>
```

### 设定页面使用的字符集

```html
<meta http-equiv=" content-Type" content="text/html;charset=gb2312"/> 
```

### 设定显示语言

```html
<meta http-equiv=" content-Language" content="zh-cn"/> 
```

### 页面中脚本的类型

```html
<meta http-equiv=" content-Script-Type"  content="text/javascript"/>
```

## IOS

### 添加到主屏后的标题

```html
<meta name="apple-mobile-web-app-title" content="blog from Qi"/>
```

### 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏

```html
<meta name="apple-mobile-web-app-capable" content="yes"/>
```

### 添加智能 App 广告条 Smart App Banner

```html
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=https://github.com/QiShaoXuan"/>
```

### 设置苹果工具栏颜色

```html
<meta name="apple-mobile-web-app-status-bar-style" content="#00adb5"/>
```

## windows

### 网页主题颜色

目前只发现 chrome 的 app 顶部工具栏会根据该色值变色

[在移动端使用 chrome app 打开](https://qishaoxuan.github.io/blog/)

```html
<meta name="msapplication-TileColor" content="#000"/>    
```

### Windows 8 磁贴图标 (即开始栏的icon)

```html
<meta name="msapplication-TileImage" content="icon.png"/> 
```

## QQ

### QQ强制竖屏

```html
<meta name="x5-orientation" content="portrait"/>
```

### QQ强制全屏

```html
<meta name="x5-fullscreen" content="true"/>
```

### QQ应用模式

```html
<meta name="x5-page-mode" content="app"/>
```

## UC

### UC强制竖屏

```html
<meta name="screen-orientation" content="portrait"/>
```

### UC强制全屏

```html
<meta name="full-screen" content="yes"/>
```

### UC应用模式

```html
<meta name="browsermode" content="application"/>
```

## 其他

### 双内核浏览器优先加载webkit内核

```html
<meta name="renderer" content="webkit">
```

### 双内核浏览器优先加载IE兼容模式

```html
<meta name="renderer" content="ie-comp">
```