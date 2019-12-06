# 浏览器

## 基本渲染原理

### 游览器功能

- 游览器的主要功能总结起来是一句话：

  将用户输入的 url 转变成可视化的图像

  - 从 url 到 dom 树
  - 从 dom 树到可视化图像
  - 这两个过程之间的关系并没有那么明确， 可以统称这两个过程为页面的渲染

### 游览器的内核（渲染引擎）

> 在游览器中有一个最重要的模块， 它主要的作用是将页面转变成可视化的图像结果， 这个模块就是游览器内核， **通常它也被称为渲染引擎**。

- IE—————>Trident
- Safari————>WebKit
  - Webkit 本身主要是由两个引擎构成的
  - 一个是渲染引擎“WebCore”
  - 另一个则是 javascript 解释引擎“JSCore”
  - 它们均是从 KDE 的渲染引擎 KHTML 及 javascript 解释引擎 KJS 衍生而来。
- Chrome———>WebKit 的分支引擎———>Blink
  - 在 13 年发布的 Chrome 28.0.1469.0 版本开始，Chrome 放弃 Chromium 引擎转而使用最新的 Blink 引擎（基于 WebKit2——苹果公司于 2010 年推出的新的 WebKit 引擎）
  - Blink 对比上一代的引擎精简了代码、改善了 DOM 框架，也提升了安全性。
- Opera
  - 旧版 Opera 4 至 6 版本 :Elektra 排版引擎
    Opera7.0 :Presto 渲染引擎
  - Opera 在 2013 年 2 月宣布放弃 Presto:
    - 采用 Chromium 引擎;
    - 又转为 Blink 引擎;
- Firefox———>Gecko

### 进程与线程

> 进程和线程都是一个时间段的描述，是 CPU 工作时间段的描述

- 进程 process：进程就是时间总和=执行环境切换时间+程序执行时间-->CPU 加载执行环境->CPU 执行程序->CPU 保存执行环境
- 线程 thread：线程也是时间总和=执行环境切换时间（共享进程的）+程序模块执行时间-->CPU 加载执行环境（共享进程的）->CPU 执行程序摸块->CPU 保存执行环境（共享进程的）
- 进程和线程都是描述 CPU 工作的时间段，线程是更细小的时间段。

#### 进程

> 程序的一次执行，它占有一片独有的内存空间， 是操作系统执行的基本单元

- 一个程序可以同时允许运行多个进程， 那么就是**多进程**
- 一个进程内的数据可以供其中的多个线程直接共享， 多个进程之间的数据是不能直接共享的

#### 线程

> 是进程内的一个独立执行单元， 是 CPU 调度的最小单元， 程序运行的基本单元

- 一个进程中至少有一个运行的线程： **主线程**，进程启动后自动创建
- 一个进程中也可以同时运行多个线程，我们会说程序是多线程运行的
- 线程池（thread pool）：保存多个线程对象的容器
- JS 引擎是单线程运行的

b.进程&线程

### 现代浏览器的多进程多线程模型

1. 不堪回首的过去:

- 当你通过浏览器打开很多页面的时候,如果其中一个页面不响应了或者崩溃了,
- 那么随之而来的将会是更不幸的事情,你开打的所有页面都会得不到响应,
- 最让人不能忍受的是,其中的一些页面可能还包含了未保存或者未发送的信息

1. 浏览器产商如何解决

- 采用多进程模型,该模型可以带来的好处:
  - 避免因单个页面的不响应或者崩溃影响整个浏览器的稳定性
  - 当第三方插件崩溃时,也不会影响整个浏览器的稳定性
  - 安全

1. 浏览器到底有些什么进程

- Browser 进程:
  - 浏览器的主进程,负责浏览器界面的显示,和各个页面的管理,
  - 浏览器中所有其他类型进程的祖先,负责其他进程的的创建和销毁
  - 它有且只有一个!!!!!
- Renderer 进程:
  - 网页渲染进程,负责页面的渲染,可以有多个
  - 当然渲染进程的数量不一定等于你开打网页的个数
- NPAPI 插件进程
- Pepper 插件进程
- GPU 进程
- 移动设备的浏览器可能不太一样:
  - Android 不支持插件,所以就没有插件进程
  - GPU 演化成了 Browser 进程的一个线程
  - Renderer 进程演化成了操作系统的一个服务进程,它仍然是独立的

1. 每个进程内部又有很多线程

- 多线程的目的主要是保持用户界面的高度响应
- 例如:为了不让 Browser 进程的 UI 线程被其他耗时的操作(数据库读写,本地文件读写)所阻塞,那么我们就把这些操作放到分线程中去处理
- 在 Renderer 进程中,为了不让其他操作阻止渲染线程的高速执行,我们通常会将渲染过程管线化,利用计算机的多核优势,让渲染的不同阶段在不同的线程中执行

## 渲染引擎

### 主要模块

- 一个渲染引擎主要包括：HTML 解析器，CSS 解析器，javascript 引擎，布局 layout 模块，绘图模块
  - HTML 解析器：解释 HTML 文档的解析器，主要作用是将 HTML 文本解释成 DOM 树。
  - CSS 解析器：级联样式表的解析器，它的作用是为 DOM 中的各个元素对象计算出样式信息，为布局提供基础设施
  - Javascript 引擎：使用 Javascript 代码可以修改网页的内容，也能修改 css 的信息，javascript 引擎能够解释 javascript 代码，并通过 DOM 接口和 CSSOM 接口来修改网页内容和样式信息，从而改变渲染的结果。
  - 布局（layout）：在 DOM 创建之后，Webkit 需要将其中的元素对象同样式信息结合起来，计算他们的大小位置等布局信息，形成一个能表达这所有信息的内部表示模型
  - 绘图模块（paint）：使用图形库将布局计算后的各个网页的节点绘制成图像结果

> 以上这些模块依赖很多其他的基础模块，包括要使用到网络 存储 2D/3D 图像 音频视频解码器 和 图片解码器。
> 所以渲染引擎中还会包括如何使用这些依赖模块的部分。

### 渲染过程

- 浏览器渲染页面的整个过程：浏览器会从上到下解析文档。

  1. 遇见 HTML 标记，调用 HTML 解析器解析为对应的 token （一个 token 就是一个标签文本的序列化）并构建 DOM 树（就是一块内存，保存着 tokens，建立它们之间的关系）。
  2. 遇见 style/link 标记 调用 css 解析器 处理 CSS 标记并构建 CSSOM 树。
  3. 遇见 script 标记 调用 javascript 解析器 处理 script 标记，绑定事件、修改 DOM 树/CSSOM 树 等
  4. 将 DOM 与 CSSOM 合并成一个渲染树。
  5. 根据渲染树来布局，以计算每个节点的几何信息。
  6. 将各个节点绘制到屏幕上。
     > 需要明白，这五个步骤并不一定按顺序执行完成。如果 DOM 或 CSSOM 被修改，以上过程需要重复执行，这样才能计算出哪些像素需要在屏幕上进行重新渲染。
     > 实际页面中，CSS 与 JavaScript 往往会多次修改 DOM 和 CSSOM

  阻塞渲染

  - html 资源
    - 调用 html 解析器解析的，异步非阻塞
  - css 资源
    - 调用 css 解析器解析的
    - 使用 style 标签，是异步非阻塞
    - 使用 link 标签，是同步阻塞
    - **问题**: `<u>闪屏</u>`：通过 link 标签引入样式解决，性能更高（减少重绘重排），缺点首屏渲染速度更慢
  - js 阻塞
    - 内部 js/外部引入的 js，都是同步阻塞的
    - 直接引入的 js 会阻塞页面的渲染
      Javascript 代码可能会修改 DOM 树的结构
    - js 顺序执行，阻塞后续 js 逻辑的执行，不阻塞 js 等其他资源的加载
      维护依赖关系
    - 预解析
      WebKit 和 Firefox 都进行了这项优化。在执行 js 脚本时，其他线程会解析文档的其余部分，
      找出并加载需要通过网络加载的其他资源。通过这种方式，资源可以在并行连接上加载，从而提高总体速度。预解析器不会修改 DOM 树，而是将这项工作交由主解析器处理；
      预解析器只会解析外部资源（例如外部脚本、样式表和图片）的引用。

  > 在上述的过程中，网页在加载和渲染过程中会发出“DOMContentloaded”和“onload”事件
  > 分别在 DOM 树构建完成之后，以及 DOM 树构建完并且网页所依赖的资源都加载完之后发生、
  > 因为某些资源的加载并不会阻碍 DOM 树的创建，所以这两个事假多数是不同时发生的

- 从 DOM 树到可视化图像

  1. CSS 文件被 CSS 解析器解释成内部表示结构(CSSDOM)
  2. CSS 解析器工作完成之后，在 DOM 树上附加解释后的样式信息，这就是 RenderObject 树
  3. RenderObject 在创建的同时，Webkit 会根据网页的结构创建 RenderLayer，同时构建一个绘图上下文
  4. 根据绘图上下文生成最终的图像（这一过程需要依赖图形库）

- 上面介绍的是一个完整的渲染过程，但现代网页很多都是动态的，这意味着在渲染完成之后，由于网页的动画或者用户的交互，浏览器其实一直在不停地重复执行渲染过程。（重绘重排），以上的数字表示的是基本顺序，这不是严格一致的，这个过程可能重复也可能交叉

## 图层&重绘重排

### css 图层

> 浏览器在渲染一个页面时，会将页面分为很多个图层，图层有大有小，每个图层上有一个或多个节点。

在渲染 DOM 的时候，浏览器所做的工作实际上是：

1. 获取 DOM 后分割为多个图层
   - 对每个图层的节点计算样式结果 （Recalculate style--样式重计算）
   - 为每个节点生成图形和位置 （Layout--重排,回流）
   - 将每个节点绘制填充到图层位图中 （Paint--重绘）
2. 图层作为纹理上传至 GPU
3. 符合多个图层到页面上生成最终屏幕图像 （Composite Layers--图层重组）

### 图层创建的条件

1. 拥有具有 3D 变换的 CSS 属性
2. 使用加速视频解码的`<video>`节点
3. `<canvas>`节点
4. CSS3 动画的节点
5. 拥有 CSS 加速属性的元素(will-change)
6. 元素有一个 z-index 较低且包含一个复合层的兄弟元素（换句话说就是该元素在复合层上面渲染）
   你在图层上渲染，有一个 z-index 较低兄弟元素，而且这个兄弟元素本身就是一个图层，性能更高

### 重绘（Repaint）

> 重绘是一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制
> 使元素呈现新的外观。重绘不会带来重新布局，所以并不一定伴随重排。

- 图层中某个元素需要重绘，那么整个图层都需要重绘（比如一个图层包含很多节点，其中有个 gif 图，gif 图的每一帧，都会重回整个图层的其他节点，然后生成最终的图层位图，所以这需要通过特殊的方式来强制 gif 图属于自己一个图层（translateZ(0)或者 translate3d(0,0,0)，CSS3 的动画也是一样（好在绝大部分情况浏览器自己会为 CSS3 动画的节点创建图层））

### 重排（Reflow 回流）

> 渲染对象在创建完成并添加到渲染树时，并不包含位置和大小信息。计算这些值的过程称为布局或重排

- "重绘"不一定需要"重排"，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。
- 但是，"重排"必然导致"重绘"，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。

### 常见的触发重排的操作

> Reflow 的成本比 Repaint 的成本高得多的多。DOM Tree 里的每个结点都会有 reflow 方法，
> 一个结点的 reflow 很有可能导致子结点，甚至父点以及同级结点的 reflow

### 优化

> 如果我们需要使得动画或其他节点渲染的性能提高，需要做的就是减少浏览器在运行时所需要做的工作（减少 1234 中的步骤）

1. 元素位置移动变换时尽量使用**CSS3 的 transform**来代替对 top left 等的操作，变换（transform）和透明度（opacity）的改变仅仅影响图层的组合
2. 使用 opacity 来代替 visibility，透明度不会触发重绘，透明度的改变时，GPU 在绘画时只是简单的降低之前已经画好的纹理的 alpha 值来达到效果，并不需要整体的重绘，这个前提是这个被修改 opacity 本身必须是一个图层，如果图层下还有其他节点，GPU 也会将他们透明化
3. 不要使用 table 布局，table-cell
4. 将多次改变样式属性的操作**合并成一次操作**（class），不要一条一条地修改 DOM 的样式，预先定义好 class，然后修改 DOM 的 className
5. 将 DOM 离线后再修改，由于**display 属性为 none**的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。
   - 如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发 2 次重排。
6. 利用文档碎片 `document.createDocumentFragment()`
7. 不要把某些 DOM 节点的属性值放在一个循环里当成循环的变量
   - 当你请求向浏览器请求一些 style 信息的时候，就会让浏览器 flush 队列，比如：
8. 动画实现过程中，启用 GPU 硬件加速(3d)，为动画元素新建图层，提高动画元素的 z-index

## requestAnimationFrame

- `window.requestAnimationFrame(callback)`

- 大多数电脑显示器的刷新频率是 60Hz，大概相当于每秒钟重绘 60 次。大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也不会有提升。因此，最平滑动画的最佳循环间隔是 1000ms/60，约等于 16.6ms
- setTimeout 和 setInterval 都不精确。它们的内在运行机制决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器 UI 线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行
- requestAnimationFrame 采用系统时间间隔，保持最佳绘制效率，让各种网页动画效果能够有一个统一的刷新机制
- requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
- 在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然就意味着更少的 CPU、GPU 和内存使用量
- requestAnimationFrame 是由浏览器专门为动画提供的 API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了 CPU 开销

  ```JavaScript
  var start = null;
  var element = document.getElementById('test');
  element.style.position = 'absolute';

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.left = Math.min(progress / 10, 200) + 'px';
    if (progress < 1000) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
  ```

严格兼容

```JavaScript
if(!window.requestAnimationFrame){
    var lastTime = 0;
    window.requestAnimationFrame = function(callback){
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0,16.7-(currTime - lastTime));
        var id  = window.setTimeout(function(){
            callback(currTime + timeToCall);
        },timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    }
}
```

## DNS&CDN

### Http 协议

- HTTP/0.9
- HTTP/1.0
- HTTP/1.1（主流）
- HTTP/2.0
- HTTP 协议是在 TCP/IP 协议族的基础上运作起来的，用于客户端和服务端之间的通信
- 其属于 TCP/IP 协议族内的一个子集；HTTP 协议是无状态的协议。
- TCP/IP 协议族是按层次去划分的
  - 应用层，决定了向用户提供应用服务时通信的活动。
    - FTP 协议（文件传输协议）
    - DNS（域名协议）
    - HTTP（超文本传输协议）
  - 传输层，提供处于网络连接中两台计算机之间的数据传输
    - TCP（传输控制协议）
    - UDP（用户数据报协议）
  - 网络层，用来处理在网络上流动的数据包
    - IP 协议
  - 数据链路层，用来处理连接网络的硬件设备

### DNS 域名解析服务

- DNS 服务是和 HTTP 协议一样位于应用层的协议，它提供域名到 IP 地址之间的解析服务。

- 计算机既可以被赋予 IP 地址，也可以被赋予主机名和域名。比如[www.test.com](http://www.test.com)

- 用户通常使用主机名或域名来访问对方的计算机，而不是通过 IP 地址访问，因为与 IP 地址的一组纯数字相比，用域名来指定计算机名更符合人类的记忆习惯。

- 但是要让计算机去理解域名，相对而言就变得困难了，因为计算机更擅长处理一长串数字。

- 为了解决上述问题，DNS 服务应运而生。NDS 协议提供通过域名查找 IP，或逆向从 IP 地址反查域名的服务

  <hrome://dns/> :查看浏览器上的 DNS 缓存
  pconfig /displaydns :查看操作系统中的 DNS 缓存

### 一次完整的请求在网络层面我们需要关注什么

1. DNS 是否可以通过缓存来减少查询 IP 地址的时间？
2. 网络的请求过程是否走的是最近的网络？
3. 是否可以少发几次请求？ （资源合并）
4. 请求体是否可以尽量的小？（资源压缩）

### DNS 是否可以通过缓存来减少查询 IP 地址的时间

- DNS 的查找是有开销的
- 在 DNS 查找完成之前，浏览器不能从主机下载任何东西
- DNS 可以被缓存起来提高性能的，这种缓存可以发生在网络运营商的服务器上，也可以发在本机所处的局域网中，甚至可以发生在本地的操作系统或浏览器中
- 但是服务器的 IP 地址是可变的，缓存会消耗内存，因此不管是哪个级别的缓存都应该周期性的清除一下。

#### DNS 域名解析过程

1. 查找浏览器缓存。浏览器会检查缓存中有没有这个域名对应的解析过的 IP 地址，如果缓存中有，这个解析过程就将结束。
2. 第 2 步，查找系统缓存。如果用户的浏览器缓存中没有，浏览器会查找操作系统缓存中是否有这个域名对应的 DNS 解析结果
3. 查找路由器缓存。如果系统缓存中也找不到，那么查询请求就会发向路由器，它一般会有自己的 DNS 缓存。
4. 查找 ISP DNS 缓存。(网络运营商)。运气实在不好，就只能查询 ISP DNS 缓存服务器了。在我们的网络配置中都会有"DNS 服务器地址"这一项，操作系统会把这个域名发送给这里设置的 DNS，也就是本地区的域名服务器，这个专门的域名解析服务器性能都会很好，它们一般都会缓存域名解析结果，当然缓存时间是受域名的失效时间控制的。大约 80%的域名解析都到这里就已经完成了，所以 ISP DNS 主要承担了域名的解析工作。
5. 递归搜索。最无奈的情况发生了, 在前面都没有办法命中的 DNS 缓存的情况下，(1) 本地 DNS 服务器即将该请求转发到互联网上的根域(2) 根域将所要查询域名中的顶级域（即 blog.baidu.com 中的 com)的服务器 IP 地址返回到本地 DNS。(3) 本地 DNS 根据返回的 IP 地址，再向顶级域（就是 com 域）发送请求。(4) com 域服务器再将域名中的二级域（即 blog.baidu.com 中的 baidu）的 IP 地址返回给本地 DNS。(5) 本地 DNS 再向二级域发送请求进行查询。(6) 之后不断重复这样的过程，直到本地 DNS 服务器得到最终的查询结果，并返回到主机。这时候主机才能通过域名访问该网站。 |

#### 减少 DNS 查询

1. 一个多资源的站点最好使用 2 到 4 个不一样的主机来存放服务端资源。
   1. 这是在减少 DNS 查询和允许高度并行下载之间作出的最好权衡
   2. (高度并行下载,浏览器一次能并发加载的量是受域名控制的)
2. 使用 Keep-alive 进行持久连接

### 网络的请求过程是否走的是最近的网络

> 网站通常将其所有的服务器都放在同一个地方，当用户群增加时，公司就必须在多个地理位置不同的服务器上部署内容
> 为了缩短 http 请求的时间，我们应该把大量的静态资源放置的离用户近一点。

- **内容发布网络 CDN（Content Delivery Networks）**

  CDN 是一组分布在多个不同地理位置的 web 服务器，用于更加有效的向用户发布内容

- **基本思路：**

  尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

  通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，

  CDN 系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息

  将用户的请求重新导向离用户最近的服务节点上。

基础架构：最简单的 CDN 网络由一个 DNS 服务器和几台缓存服务器组成

1. 当用户点击网站页面上的内容 URL，经过本地 DNS 系统解析，DNS 系统会最终将域名的解析权交给 CNAME 指向的 CDN 专用 DNS 服务器。
2. CDN 的 DNS 服务器将 CDN 的全局负载均衡设备 IP 地址返回用户。 3.用户向 CDN 的全局负载均衡设备发起内容 URL 访问请求。
3. CDN 全局负载均衡设备根据用户 IP 地址，以及用户请求的内容 URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求。
4. 区域负载均衡设备会为用户选择一台合适的缓存服务器提供服务，选择的依据包括：根据用户 IP 地址，判断哪一台服务器距用户最近；根据用户所请求的 URL 中携带的内容名称，判断哪一台服务器上有用户所需内容；查询各个服务器当前的负载情况，判断哪一台服务器尚有服务能力。基于以上这些条件的综合分析之后，区域负载均衡设备会向全局负载均衡设备返回一台缓存服务器的 IP 地址。
5. 全局负载均衡设备把服务器的 IP 地址返回给用户。
6. 用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送到用户终端。如果这台缓存服务器上并没有用户想要的内容，而区域均衡设备依然将它分配给了用户，那么这台服务器就要向它的上一级缓存服务器请求内容，直至追溯到网站的源服务器将内容拉到本地。 |

## 缓存机制

### 缓存

- 即便缓存服务器（客户端浏览器）内有缓存文件，也不能保证每次都会使用到对应资源的缓存，这和被缓存资源的有效性有关
- 列如客户端的要求，缓存的有效期等
- 当遇上源服务器上的资源更新时，如果还是使用不变的缓存，那就演变成返回更新前的旧资源了

### 客户端自己决定的缓存策略

### 实体首部字段 Expires（响应）——http 1.0

1. 首部字段 Expires 会将资源失效的日期告知客户端，缓存服务器在接收到含有首部字段 Expires 的响应后，
2. 会以缓存来应答请求。在 Expires 字段值指定的时间之前，响应的副本会一直被保存。当超过指定的时间后
3. 缓存服务器在请求发送过来时，会转向源服务器请求资源。
4. 源服务器不希望缓存服务器对资源缓存时，最好在 Expires 字段内写入与首部字段 Date 相同的时间值。
5. 但是在首部字段 cache-control 有指定 max-age 指令时，比起首部字段 Expires，会优先处理 max-age 指令

### 通用首部字段 cache-control —— http 1.1

| 响应指令    | 说明                       |
| ----------- | -------------------------- |
| max-age[秒] | 响应的最大 age 值          |
| no-cache    | 缓存前必须先确认其有效性   |
| no-store    | 不缓存请求或响应的任何内容 |

- 首部字段 cache-control 有指定 max-age 指令时，比起首部字段 Expires，会优先处理 max-age 指令

### 客户端与服务端协商的缓存策略

- 当我们第一次输入一个地址 <https://www.zhipin.com/>

  - 响应头：

    ```
    cache-control: no-cache  //协商缓存
    etag: "5b3e2d1b-13dd"
    last-modified: Thu, 05 Jul 2018 14:37:15 GMT
    ```

- 当我们第二次输入地址访问：

  - 请求头：

    ```
    if-modified-since: Thu, 05 Jul 2018 14:37:15 GMT
    if-none-match: "5b3e2d1b-13dd"
    ```

  - 响应头：

    ```
    cache-control: no-cache  //协商缓存
    etag: "5b3e2d1b-13dd"
    last-modified: Thu, 05 Jul 2018 14:37:15 GMT
    ```

- **强制缓存**（强制读取缓存）

  ```
  Cache-Control: max-age=315360000   http 1.1
  Expires: Tue, 04 Jul 2028 08:03:30 GMT  http 1.0
  ```

### 实体首部字段 last-modified（响应）& 请求首部字段 if-modified-since

- 首部 last-modified 指明资源最终修改的时间，一般来说，这个值就是资源被修改的时间。

- 首部字段 if-modified-since

  第一次请求资源时，资源在响应头中种入 last-modified 字段，并随着响应体一起存到缓存中

  下一次需要再发送请求时，请求体中会将上一次修改时间（last-modified）种入 if-modified-since 字段中

- 带到服务端，它会告知服务器，若在 if-modified-since 字段值之后 对应的资源都没有更新过则返回 304 Not Modified 状态码

  若在 if-modified-since 字段值之后 对应的资源有过更新 则希望服务器能处理

- 此处的客户端与服务端协商的缓存策略一般与 cache-control 一块使用。需要在 cache-control 失效后再走这种缓存策略

- **缺点**：

  1. 某些服务端没有办法获取精确的修改时间，导致 last-modified 有问题

  1. 文件时间修改了，但文件内容却没有变

### 响应首部字段 etag & 请求首部字段 if-None-Match

- 响应首部字段 etag：

  它可以告知客户端实体标识，它是一种可以将资源以字符串做唯一标识的方式，服务器会为每份资源分配对应的 Etag 值。

  另外当资源更新时，etag 的值也需要更新，这个唯一标识的生成没有规定统一的算法，由服务器自行决定

- 请求首部字段 if-None-Match

  机制和 if-modified-since 差不多，当 if-None-Match 字段与 etag 不一致时，就告知服务器该处理这请求

- 此处的客户端与服务端协商的缓存策略一般与 cache-control 一块使用。需要在 cache-control 失效后再走这种缓存策略

### 分级缓存策略

http 缓存机制

1. **200 from cache**

   ```
    这一层由exprise(http1.0)、cache-control(http1.1)控制
   ```

   cache-control 的优先级要高于 exprise
   当它们没有失效时，浏览器只能访问总结的缓存

2. **304 状态**

   ```
    这一层由last-modified或etag来控制，
   ```

   etag 优先级比 last-modified 高
   当上一层失效时，用户刷新时浏览器会发请求给服务器，如果服务端没有变化这返回 304 给浏览器

3. **200 状态**

   ```
    当上两层都失效时，浏览器会去服务器下载最新的数据
   ```

## 游览器存储

1. 静态资源不会携带 cookie
2. cookie 分持久级别和 session 级别
3. cookie 一般用于和 session 通信

> SessionStorage, LocalStorage, Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对！
> (另外一种存储模式叫：session;这种级别的存储属于服务端会话级别的存储)

### Web Storage

SessionStorage 和 LocalStorage 都是本地存储，不会被发送到服务器上。同时空间比 Cookie 大很多，一般支持 5-10M

<http://dev-test.nemikor.com/web-storage/support-test/>

## 执行 innerHTML 里的 `<script>`

之前在做公司的一个抽奖模板的需求时遇到了 innerHTML 里的 `<script>`标签不执行的情况，即脚本不被解析。

### appendChild

appendChild 把`<script>`标签直接塞进页面是可以执行和加载里面的 js 的，我们需要做的就只是把所有的`<script>`找出来，然后通过 appendChild 塞到页面里，需要注意的是`script`的加载和执行并非是同步的。为了流程的控制，在执行 js 的时候，可以使用 promise 来控制（Promise.reduce）

### JQuery.html()

jQuery 会对代码进行正则判断，符合条件就会使用jQuery的`append`

```javascript
// rnoInnerhtml 的值
rnoInnerhtml = /<script|<style|<link/i

// html()
html: function( value ) {
  return access( this, function( value ) {
    var elem = this[ 0 ] || {},
      i = 0,
      l = this.length;

    if ( value === undefined && elem.nodeType === 1 ) {
      return elem.innerHTML;
    }

    // See if we can take a shortcut and just use innerHTML
    if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
      !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

      value = jQuery.htmlPrefilter( value );

      try {
        for ( ; i < l; i++ ) {
          elem = this[ i ] || {};

          // Remove element nodes and prevent memory leaks
          if ( elem.nodeType === 1 ) {
            jQuery.cleanData( getAll( elem, false ) );
            elem.innerHTML = value;
          }
        }

        elem = 0;

      // If using innerHTML throws an exception, use the fallback method
      } catch ( e ) {}
    }

    if ( elem ) {
      this.empty().append( value );
    }
  }, null, value, arguments.length );
}
```

### createContextualFragment

该方法通过调用HTML片段解析算法或XML片段解析算法返回一个文档片段

```javascript
let range = document.createRange();
// make the parent of the first div in the document becomes the context node
range.selectNode(document.body);
let documentFragment = range.createContextualFragment(innerHtml);
document.body.appendChild(documentFragment)
```

### 重新触发DOMContentLoaded

```javascript
let DOMContentLoadedEvent = document.createEvent('Event');
DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true);
document.dispatchEvent(DOMContentLoadedEvent);
```
