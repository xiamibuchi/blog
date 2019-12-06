# HTTP 协议

HTTP 协议是 HyperText Transfer Protocol（超文本传输协议）的缩写，是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。
HTTP 是一个基于 TCP/IP 通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。
HTTP 是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。

## 主要特点

1. 支持客户/服务器模式。(C/S 客户端-服务器,B/S 浏览器-服务器)
2. 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有 GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于 HTTP 协议简单，使得 HTTP 服务器的程序规模小，因而通信速度很快。
3. 灵活：HTTP 允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。4.无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
4. 无状态：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

> 注：HTTP 的默认端口号为 80，HTTPS 的默认端口号为 443。

## URL

`统一资源标识符`(uniform resource identifier URI)

URI 是个纯粹的句法结构，用于指定标识 Web 资源的字符串的各个不同部分。URL 是 URI 的一个特例，它包含了定位 Web 资源的足够信息。

**URI 是统一资源标识符，而 URL 是统一资源定位符。**因此，笼统地说，每个 URL 都是 URI，但不一定每个 URI 都是 URL。这是因为 URI 还包括一个子类，即统一资源名称 (URN)，它命名资源但不指定如何定位资源。

**URI—Uniform Resource Identifier 通用资源标志符**Web 上可用的每种资源如 HTML 文档、图像、视频片段、程序等都是一个来 URI 来定位的
URI 一般由三部组成
① 访问资源的命名机制
② 存放资源的主机名
③ 资源自身的名称，由路径表示，着重强调于资源。

**URL—Uniform Resource Location 统一资源定位符**URL 是 Internet 上用来描述信息资源的字符串，主要用在各种 WWW 客户程序和服务器程序上，特别是著名的 Mosaic。
采用 URL 可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。
URL 一般由三部组成
① 协议(或称为服务方式)
② 存有该资源的主机 IP 地址(有时也包括端口号)
③ 主机资源的具体地址。如目录和文件名等

HTTP 请求的内容通称为"资源"。”资源“这一概念非常宽泛，它可以是一份文档，一张图片，或所有其他你能够想到的格式。每个资源都由一个 ([URI](https://developer.mozilla.org/en-US/docs/Glossary/URI)) 来进行标识。

一般情况下，资源的名称和位置由同一个 URL（统一资源定位符，它是 URI 的一种）来标识。也有某些特殊情况，资源的名称和位置由不同的 URI 进行标识：例如，待请求的资源希望客户端从另外一个位置访问它。我们可以使用一个特定的首部字段，[`Alt-Svc`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Alt-Svc)，来指示这种情况。

统一资源标志符 URI 就是在某一规则下能把一个资源独一无二地标识出来。
拿人做例子，假设这个世界上所有人的名字都不能重复，那么名字就是 URI 的一个实例，通过名字这个字符串就可以标识出唯一的一个人。
现实当中名字当然是会重复的，所以身份证号才是 URI，通过身份证号能让我们能且仅能确定一个人。
那统一资源定位符 URL 是什么呢。也拿人做例子然后跟 HTTP 的 URL 做类比，就可以有：

动物住址协议://地球/中国/浙江省/杭州市/西湖区/某大学/14 号宿舍楼/525 号寝/张三.人

可以看到，这个字符串同样标识出了唯一的一个人，起到了 URI 的作用，所以 URL 是 URI 的子集。URL 是以描述人的位置来唯一确定一个人的。
在上文我们用身份证号也可以唯一确定一个人。对于这个在杭州的张三，我们也可以用：

身份证号：[123456789](tel:123456789)

来标识他。
所以不论是用定位的方式还是用编号的方式，我们都可以唯一确定一个人，都是 URl 的一种实现，而 URL 就是用定位的方式实现的 URI。

http://741236985.html**

## URLs 与 URNs

### URLs

URI 的最常见形式是统一资源定位符 ([URL](https://developer.mozilla.org/en-US/docs/Glossary/URL))，它也被称为 _Web 地址_。

```
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

在浏览器的地址栏中输入上述任一地址，浏览器就会加载相应的网页（资源）。

URL 由多个必须或可选的组件构成。下面给出了一个复杂的 URL：

```
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

URN 是另一种形式的 URI，它通过特定命名空间中的唯一名称来标识资源。

```
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

上面两个 URN 标识了下面的资源：

- 乔治·奥威尔所著的《1984》
- IETF 规范 7230，超文本传输协议 (HTTP/1.1)：Message Syntax and Routing.

## 统一资源标识符的语法 (URI)

### 方案或协议

- ![Protocol](https://mdn.mozillademos.org/files/8013/mdn-url-protocol@x2.png)

  `“http://”告诉浏览器使用何种协议。对于大部分 Web 资源，`通常使用 HTTP 协议或其安全版本，HTTPS 协议。另外，浏览器也知道如何处理其他协议。例如， “mailto:” 协议指示浏览器打开邮件客户端；“ftp:”协议指示浏览器处理文件传输。常见的方案有：

| 方案        | 描述                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| data        | [Data URIs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs)                       |
| file        | 指定主机上文件的名称                                                                           |
| ftp         | [文件传输协议](https://developer.mozilla.org/en-US/docs/Glossary/FTP)                          |
| http/https  | [超文本传输协议／安全的超文本传输协议](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) |
| mailto      | 电子邮件地址                                                                                   |
| ssh         | 安全 shell                                                                                     |
| tel         | 电话                                                                                           |
| urn         | 统一资源名称                                                                                   |
| view-source | 资源的源代码                                                                                   |
| ws/wss      | （加密的） [WebSocket](https://developer.mozilla.org/zh-CN/docs/WebSockets) 连接               |

### 主机

- ![Domaine Name](https://mdn.mozillademos.org/files/8015/mdn-url-domain@x2.png)

  ` www.example.com 既是一个域名，也代表管理该域名的机构``。 `它指示了需要向网络上的哪一台主机发起请求。当然，也可以直接向主机的 [IP address](https://developer.mozilla.org/en-US/docs/Glossary/IP_address) 地址发起请求。但直接使用 IP 地址的场景并不常见。

### 端口

- ![Port](https://mdn.mozillademos.org/files/8017/mdn-url-port@x2.png)

  `:80 是端口。`它表示用于访问 Web 服务器上资源的技术“门”。如果访问的该 Web 服务器使用 HTTP 协议的标准端口（HTTP 为 80，HTTPS 为 443）授予对其资源的访问权限，则通常省略此部分。否则端口就是 URI 必须的部分。

### 路径

- ![Path to the file](https://mdn.mozillademos.org/files/8019/mdn-url-path@x2.png)

  `/path/to/myfile.html`是 Web 服务器上资源的路径。在 Web 的早期，类似这样的路径表示 Web 服务器上的物理文件位置。现在，它主要是由没有任何物理实体的 Web 服务器抽象处理而成的。

### 查询

- ![Parameters](https://mdn.mozillademos.org/files/8021/mdn-url-parameters@x2.png)

  `?key1=value1&key2=value2` 是提供给 Web 服务器的额外参数。这些参数是用 & 符号分隔的键/值对列表。Web 服务器可以在将资源返回给用户之前使用这些参数来执行额外的操作。每个 Web 服务器都有自己的参数规则，想知道特定 Web 服务器如何处理参数的唯一可靠方法是询问该 Web 服务器所有者。

### 片段

- ![Anchor](https://mdn.mozillademos.org/files/8023/mdn-url-anchor@x2.png)

  `#SomewhereInTheDocument` 是资源本身的某一部分的一个锚点。锚点代表资源内的一种“书签”，它给予浏览器显示位于该“加书签”点的内容的指示。 例如，在 HTML 文档上，浏览器将滚动到定义锚点的那个点上；在视频或音频文档上，浏览器将转到锚点代表的那个时间。值得注意的是 # 号后面的部分，也称为片段标识符，永远不会与请求一起发送到服务器。

## 示例

```
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
```

## 规范

| Specification                                                                                      | Title                                                              |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [RFC 7230, section 2.7: Uniform Resource Identifiers](http://tools.ietf.org/html/7230#section-2.7) | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## 参见

- [What is a URL?](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL)
- [IANA list of URI schemes](http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

## TCP/IP 协议

### 三次握手

首先，客户端与服务器均处于未连接状态，并且是客户端主动向服务器请求建立连接：

客户端将报文段中的 SYN=1，并选择一个 seq=x，(即该请求报文的序号为 x) 将这个报文发送到服务器。此时，客户端进入同步已发送状态（SYN-SEND）.SYN 报文段不能携带数据，但是要消耗掉一个序号。
服务器收到请求报文后，若同意建立连接，则回复报文中，SYN=1,ACK=1，并选择一个 seq = y,且报文中确认号为 x+1，序号为 y .此时服务器进入同步已接收状态（SYN-RCVD）

客户端收到服务器的同步确认后，对服务器发送确认的确认。将 ACK=1,确认号为 y+1,而报文首部的序号为 x+1，将该报文发出后，客户端进入已连接状态（ESTABLISHED）。

服务器收到客户端的确认后，也进入已连接状态。即三次握手

### 四次挥手

连接的释放较连接的建立复杂。

现假设客户端与服务器均处于连接建立状态，客户端主动断开连接：

1. 客户端向服务器发送 FIN 报文：FIN=1,序号 seq=上一个最后传输的字节序号+1=u，发送后，客户端进入 FIN-WAIT-1 状态。
2. 服务器接收到该报文后，发送一个确认报文：令 ACK=1，确认序号 ack = u+1,自己的报文序号 seq=v，发送后，服务器进入 CLOSE-WAIT 状态。
3. 此时 TCP 连接进入连接半关闭状态，服务器可能还会向客户端发送一些数据。
4. 客户端收到来自服务器的确认之后，进入 FIN-WAIT-2 状态。等待服务器发送连接释放报文。
5. 如果服务器已经没有要发送的数据，则释放 TCP 连接，向客户端发送报文：令 FIN=1，ACK=1,确认号 ack =u+1，自己的序号 seq = w（w 可能等于 v 也可能大于 v），服务器进入 LAST-ACK 状态。
6. 客户端收到服务器的连接释放报文后，对该报文发出确认，令 ACK=1,确认号 ack=w+1，自己的序号 seq=u+1，发送此报文后，等待 2 个 msl 时间后，进入 CLOSED 状态。
7. 服务器收到客户端的确认后，也进入 CLOSED 状态并撤销传输控制块。

客户端状态变化：未连接----->SYN-SEND----->ESTABLISHED----->FIN-WAIT-1----->FIN-WAIT-2----->TIME-WAIT----->CLOSED

服务器状态变化：未连接----->SYN-RCVD----->ESTABLISHED----->CLOSE-WAIT----->LAST-ACK----->CLOSED

通俗描述 3 次握手就是：

A 对 B 说：我的序号是 x，我要向你请求连接；（第一次握手，发送 SYN 包，然后进入 SYN-SEND 状态）

B 听到之后对 A 说：我的序号是 y，期待你下一句序号是 x+1 的话（意思就是收到了序号为 x 的话，即 ack=x+1），同意建立连接。（第二次握手，发送 ACK-SYN 包，然后进入 SYN-RCVD 状态）

A 听到 B 说同意建立连接之后，对 A 说：与确认你同意与我连接（ack=y+1,ACK=1,seq=x+1）。（第三次握手，A 已进入 ESTABLISHED 状态）

B 听到 A 的确认之后，也进入 ESTABLISHED 状态。

描述四次挥手就是：

1.A 与 B 交谈结束之后，A 要结束此次会话，对 B 说：我要关闭连接了（seq=u,FIN=1）。（第一次挥手，A 进入 FIN-WAIT-1）

2.B 收到 A 的消息后说：确认，你要关闭连接了。（seq=v,ack=u+1,ACK=1）（第二次挥手，B 进入 CLOSE-WAIT）

3.A 收到 B 的确认后,等了一段时间，因为 B 可能还有话要对他说。（此时 A 进入 FIN-WAIT-2）

4.B 说完了他要说的话（只是可能还有话说）之后，对 A 说，我要关闭连接了。（seq=w, ack=u+1,FIN=1，ACK=1）(第三次挥手)
5.A 收到 B 要结束连接的消息后说：已收到你要关闭连接的消息。（seq=u+1,ack=w+1,ACK=1）(第四次挥手，然后 A 进入 CLOSED)
6.B 收到 A 的确认后，也进入 CLOSED。
