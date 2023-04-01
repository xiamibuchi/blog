# 简介

特点：

1. DOCTYPE 更简单`<!DOCTYPE html>`
2. 简单的编码类型 `<meta charset=”utf-8″ />`
3. 大小不敏感 `<input tYPe="text" name="" id="">`
4. 布尔值 `<input type="radio" checked>`
5. 可以省略引号 `<input type=radio>`
6. 可以进行省略的标签
   1. 不允许写的结束符的标签：area、basebr、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
   2. 可以省略结束符的标签：li、dt、dd、p、rt、optgroup、option、colgroup、thread、tbody、tr、td、th
   3. 可以完全省略的标签：html、head、body、colgroup、tbody

## DOCTYPE 文档类型

DOCTYPE 是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义来解析文档。只有确定了一个正确的文档类型，超文本标记语言或可扩展超文本标记语言中的标签和层叠样式表才能生效，甚至对 javascript 脚本都会有所影响

## web 标准

web 标准简单来说可以分为结构、表现和行为。其中结构主要是有 HTML 标签组成，表现即指 css 样式表，行为是指页面和用户具有一定的交互，同时页面结构或者表现发生变化，主要由 js 组成。

1. 统一标准
2. 解决了早期各大浏览器对代码有不同的理解造成的大部分兼容性问题，但是局部的兼容性还是存在的
3. 前端的前景会更广阔

### 语义化

1. 方便代码的阅读维护。
2. 有利于 SEO。让浏览器和网络爬虫可以很好地解析，从而更好分析其中的内容

## 编码类型

`<meta charset=”utf-8″ />`

## 标签关系

1. 嵌套关系
2. 并列关系

### 锚点定位

1. 创建链接文本 `<a href="#id名字" >链接文本</a>`
2. 给目标添加 id 名

## 结构标签

- section 标签：表示页面中的一个内容区块,比如章节、页眉、页脚或页面的其他部分。可以和 h1、 h2……等标签结合起来使用，表示文档结构。例：HTML5 中 `<section>……</section>`HTML4 中`<div> ……</div>`。
- article 标签：表示页面中一块与上下文不相关的独立内容。比如一篇文章。
- aside 标签：表示 article 标签内容之外的、与 article 标签内容相关的辅助信息。
- header 标签：表示页面中一个内容区块或整个页面的标题。
- hgroup 标签：表示对整个页面或页面中的一个内容区块的标题进行组合。
- footer 标签：表示整个页面或页面中一个内容区块的脚注。一般来说，他会包含创作者的姓名、创作日期以及创作者的联系信息。
- nav 标签：表示页面中导航链接的部分。
- figure 标签：表示一段独立的流内容（图像、图表、照片、代码等等），一般表示文档主体流内容中的一个独立单元。使用 figcaption 标签为 figure 标签组添加标题。元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。例如：
  ```html
  <figure>
    <figcaption>PRC</figcaption>

    <p>The People's Republic of China was born in 1949</p>
  </figure>
  ```

## 文本格式化标签

- 加粗：`<strong>`
- 倾斜：`<em>`
- 删除线：`<del>`
- 下划线：`<ins>`

注意：`<b>`、`<i>`、`<s>`、`<u>` 已经废弃，没有语义

## table

1. 表格边框：border
2. 单元格与 单元格 间隙：cellspacing
3. 单元格内 内容与边框的间距： cellpadding
4. 表格宽度： width
5. 表格高度： height
6. 表格对齐方式： align table 整个表格对齐方式，tr 单元格对齐方式
7. 跨行合并：rowspan ，留住合并的单元格中，最上面的，删除其他。跨列合并：colspan，留住合并的单元格中，最左边的，删除其他

## 表单控件

### label 绑定

1. 用 for 绑定 id
2. 将 input 及需绑定的内容放入 label 标签内（此时不需写 for）

### fieldset 表单域

`<fieldset>` 标签可以将表单内的相关元素分组。
`<fieldset>` 标签会在相关表单元素周围绘制边框。
`<legend>` 标签可以为 fieldset 元素定义标题。

#### 属性

1. disabled
2. form：规定 fieldset 所属的一个或多个表单。
3. name：规定 fieldset 的名称。

### datalist

**datalist 定义选项列表**，表示数据源，页面中不可见。配合 input 使用。

input 通过在 list 属性中写 datalist 的 id 进行关联

```html
<input id="myCar" list="cars" />
<datalist id="cars">
  <option value="BMW"> </option>
  <option value="Ford"> </option>
  <option value="Volvo"> </option>
</datalist>
```

## 全局属性 任何标签都可以使用

| **描述**                                               | **属性**                                                                          |
| ------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 规定激活元素的快捷键。                                 | [accesskey](http://www.w3school.com.cn/tags/att_standard_accesskey.asp)           |
| 规定元素的一个或多个类名（引用样式表中的类）。         | [class](http://www.w3school.com.cn/tags/att_standard_class.asp)                   |
| 规定元素内容是否可编辑。                               | [contenteditable](http://www.w3school.com.cn/tags/att_global_contenteditable.asp) |
| 规定元素的上下文菜单。上下文菜单在用户点击元素时显示。 | [contextmenu](http://www.w3school.com.cn/tags/att_global_contextmenu.asp)         |
| 用于存储页面或应用程序的私有定制数据。                 | [data-\*](http://www.w3school.com.cn/tags/att_global_data.asp)                    |
| 规定元素中内容的文本方向。                             | [dir](http://www.w3school.com.cn/tags/att_standard_dir.asp)                       |
| 规定元素是否可拖动。                                   | [draggable](http://www.w3school.com.cn/tags/att_global_draggable.asp)             |
| 规定在拖动被拖动数据时是否进行复制、移动或链接。       | [dropzone](http://www.w3school.com.cn/tags/att_global_dropzone.asp)               |
| 规定元素仍未或不再相关。                               | [hidden](http://www.w3school.com.cn/tags/att_global_hidden.asp)                   |
| 规定元素的唯一 id。                                    | [id](http://www.w3school.com.cn/tags/att_standard_id.asp)                         |
| 规定元素内容的语言。                                   | [lang](http://www.w3school.com.cn/tags/att_standard_lang.asp)                     |
| 规定是否对元素进行拼写和语法检查。                     | [spellcheck](http://www.w3school.com.cn/tags/att_global_spellcheck.asp)           |
| 规定元素的行内 CSS 样式。                              | [style](http://www.w3school.com.cn/tags/att_standard_style.asp)                   |
| 规定元素的 tab 键次序。                                | [tabindex](http://www.w3school.com.cn/tags/att_standard_tabindex.asp)             |
| 规定有关元素的额外信息。                               | [title](http://www.w3school.com.cn/tags/att_standard_title.asp)                   |
| 规定是否应该翻译元素内容。                             | [translate](http://www.w3school.com.cn/tags/att_global_translate.asp)             |

### 全局属性案例：

```html
<!-- 1、data-*  自定义属性 -->
<input type="text" data-curtime="20140818" name="time" id="time" />
<script>
  //js获取方式
  var oTime = document.getElementById("time");
  alert(oTime.dataset.curtime);
  //jq获取方式
  //$('#time').data('curtime');
</script>

<!-- 2、hidden -->
<span hidden>你看不见我</span>

<!-- 3、spellcheck -->
<!--spellcheck会对这里输入的内容进行语法纠错-->
<textarea spellcheck="true" name="" id="" cols="30" rows="10">
    likke spellcheck会对这里输入的内容进行语法纠错
</textarea>

<!-- 4、contenteditable -->
<!-- 这里的内容是可以编辑的 -->
<p contenteditable="true">这里的内容是可以编辑的</p>

<!-- 5、desginmode -->
<!-- 这个是针对js使用的，设置on元素就可编辑 off为不可编辑 -->
<script>
  window.document.designMode = "on"; //整个html都可以编辑
</script>
```

HTML5 的设计目的是为了在移动设备上支持多媒体。新的语法特征被引进以支持这一点，如 video、audio 和 canvas 标记。HTML5 还引进了新的功能，可以真正改变用户与文档的交互方式。
html5 除了更加适合开发移动端还有很多新的特性如：
语义特性，HTML5 赋予网页更好的意义和结构。更加丰富的标签将随着对 RDFa 的，微数据与微格式等方面的支持，构建对程序、对用户都更有价值的数据驱动的 Web。
本地存储特性，基于 HTML5 开发的网页 APP 拥有更短的启动时间，更快的联网速度，这些全得益于 HTML5 APP Cache，以及本地存储功能。Indexed DB（html5 本地存储最重要的技术之一）和 API 说明文档。
设备兼容特性 ，HTML5 为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5 提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与 microphones 及摄像头相联。
三维、图形及特效特性，基于 SVG、Canvas、WebGL 及 CSS3 的 3D 功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。
CSS3 特性，在不牺牲性能和语义结构的前提下，CSS3 中提供了更多的风格和更强的效果。此外，较之以前的 Web 排版，Web 的开放字体格式（WOFF）也提供了更高的灵活性和控制性。等等。
总之，html5 是一个具有跨时代意义的一个版本，它使得 html 也有了编程的特性，而且大量的 api 接口使得 html5 可以做一些编程语言做的事情，如 webapp 等。

## meta 标签

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

## 常用 meta 标签

## 网页相关信息

### 网页关键字 (SEO)

```html
<meta name="keywords" content="bolg" />
```

### 网页描述 (SEO)

```html
<meta name="description" content="blog from Qi" />
```

### 标注网页的作者或制作组

```html
<meta name="author" content="Qi" />
```

### 编辑器的说明

```html
<meta name="generator" content="webstrom" />
```

### 标注版权

```html
<meta name="Copyright" content="zhoulujun" />
```

### 通知搜索引擎多少天访问一次

```html
<meta name="revisit-after" content="7days" />
```

## http-equiv

### 设定网页的到期时间。一旦网页过期，必须到服务器上重新传输

```html
<meta http-equiv="expires" content="Fri,12Jan200118:18:18GMT" />
```

### 禁止浏览器从本地计算机的缓存中访问页面内容

```html
<meta http-equiv="Pragma" content="no-cache" />
```

### 自动刷新并指向新页面。其中的 1 是指停留 1 秒钟后自动刷新到 URL 网址

```html
<meta http-equiv="Refresh" content="1;URL=https://github.com/QiShaoXuan" />
```

### 如果网页过期，那么存盘的 cookie 将被删除

必须使用 GMT 的时间格式

```html
<meta
  http-equiv="Set-Cookie"
  content="cookie value=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/"
/>
```

### 设定页面使用的字符集

```html
<meta http-equiv=" content-Type" content="text/html;charset=gb2312" />
```

### 设定显示语言

```html
<meta http-equiv=" content-Language" content="zh-cn" />
```

### 页面中脚本的类型

```html
<meta http-equiv=" content-Script-Type" content="text/javascript" />
```

## IOS

### 添加到主屏后的标题

```html
<meta name="apple-mobile-web-app-title" content="主屏幕启动标题" />
```

### 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
```

> iPad 2018 主屏幕启动的网页，从后台重新打开会导致重新渲染。

### 添加智能 App 广告条 Smart App Banner

```html
<meta
  name="apple-itunes-app"
  content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=https://www.baidu.com"
/>
```

### 设置苹果工具栏颜色

```html
<meta name="apple-mobile-web-app-status-bar-style" content="#00adb5" />
```

## windows

### 网页主题颜色

目前只发现 chrome 的 app 顶部工具栏会根据该色值变色

[在移动端使用 chrome app 打开](https://qishaoxuan.github.io/blog/)

```html
<meta name="msapplication-TileColor" content="#000" />
```

### Windows 8 磁贴图标 (即开始栏的 icon)

```html
<meta name="msapplication-TileImage" content="icon.png" />
```

## QQ

### QQ 强制竖屏

```html
<meta name="x5-orientation" content="portrait" />
```

### QQ 强制全屏

```html
<meta name="x5-fullscreen" content="true" />
```

### QQ 应用模式

```html
<meta name="x5-page-mode" content="app" />
```

## UC

### UC 强制竖屏

```html
<meta name="screen-orientation" content="portrait" />
```

### UC 强制全屏

```html
<meta name="full-screen" content="yes" />
```

### UC 应用模式

```html
<meta name="browsermode" content="application" />
```

## 其他

### 双内核浏览器优先加载 webkit 内核

```html
<meta name="renderer" content="webkit" />
```

### 双内核浏览器优先加载 IE 兼容模式

```html
<meta name="renderer" content="ie-comp" />
```

filereader

classList

websocket
