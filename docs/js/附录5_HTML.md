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

## 浏览器

[How Browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm#The_browsers_we_will_talk_about)
https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/

### 主流浏览器

- IE（Edge）： Trident（EdgeHTML）（「Internet Explorer for Mac」的网页浏览器排 版引擎，称为 Tasman）
- firefox：Gecko
- chrome：以前用 WebKit 的分支，现用 Blink
- safari：WebKit
- opera：Presto（2013 年 2 月宣布放弃）现用 Blink

### 浏览器内核

浏览器内核，即浏览器核心。

- 渲染引擎(Rendering Engine)：渲染页面 （解析 HTML + CSS）负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机
- JS 引擎：解析执行 Javascript

### 浏览器组成

- #### 用户界面 ( User Interface )

  - 包括地址栏、前进/后退、书签菜单等
  - 除了浏览器主窗口显示的你请求的页面外,其他显示的各个部分都属于用户界面

- #### 渲染引擎（ Rendering engine )

  - 负责显示请求的内容。

  - 如果请求的内容是 HTML, 它就负责解析 HTML (如果有样式,也顺便解析 CSS 内容), 并 **将解析后的内容显示在屏幕上。**

- #### 浏览器引擎（ Browser engine ）

  - 在用户界面和渲染引擎之间传达指令。(如: 点击刷新...)

- #### 网络模块（Networking）

  - 用户网络调用。

  - > 解析我们 js 语法编写的 ajax 和 xhr 代码,然后发送网络请求!

  - 例如 http 请求，它具有平台无关的接口，可以在不同平台上工作 :

  - > 如 ajax ,各种浏览器中都可以发送请求

- #### UI 后端 ( UI Backend)

  - 用户绘制基本的窗口小部件, (比如:对话框、弹窗等)。

  - 具有不特定于某个平台的通用接口，底层使用操作系统的用户接口

- #### JS 解释器 ( JavaScript Interpreter )

  - 用来 解析 和 执行 JS 代码 。(比如 chrome 的 javascript 解释器是: js V8 引擎)

  - ```js
    v8引擎: 它是谷歌研发的一种解析引擎,效率很高
    因为自身的高级语言和内存策略决定了其效率很高
    - 高级语言: 使用了偏底层的  C/C++, 它自身执行效率很高
    - 内存策略: 一切在运行堆栈里无用的数据都会被强行回收,从而可以大大提高 js 代码的运行效率
    - 还有使用缓存等等其他技术
    ```

- #### 数据存储 ( Data Persistence )

  - 属于持久层
  - Cookie、HTML5 中的本地存储 LocalStorage、SessionStorage）(setItem/getItem)
  - Cookie: 字段, 每次 http 请求都会携带 Cookie 这个 字, 根据这个字段可以在两个页面之间进行存值、传值,大小不超过 4k;
  - LocalStorage 和 SessionStorage 主要是因为生命周期长短不同 (最好不要超过 5M )
    - SessionStorage : 关闭浏览器就清除数据
    - LocalStorage: 需要手动清除缓存啊

### 渲染引擎工作原理

> HTML 代码

1. **解析 HTML 构建 DOM 树** ( Document Object Model, 文档对象模型 )。DOM 是 W3C 组织推荐的处理可扩展置标语言的标准编程接口。
2. **构建渲染树**。渲染树并不等同于 DOM 树,因为像`head标签 或 display: none`这样的元素不需要渲染的,故就没有必要放到*渲染树*中了，但是它们在*Dom 树*中。
3. **对渲染树进行布局**。 定位坐标和大小、确定是否换行、确定 position、overflow、z-index 等等，这个过程叫`"layout" 或 "reflow"`。
4. **绘制渲染树**。调用操作系统底层 API, 进行绘制操作

## Iframe

用法：
Iframe 是用来在网页中插入第三方页面，早期的页面使用 iframe 主要是用于导航栏这种很多页面都相同的部分，这样可以在切换页面的时候避免重复下载。
优点：便于修改，模块分离，像一些信息管理系统会用到。
但现在基本上不推荐使用。除非特殊需要，一般不推荐使用。

缺点：

- iframe 的创建比一般的 DOM 元素慢了 1-2 个数量级
- iframe 标签会阻塞页面的加载，如果页面的 onload 事件不能及时触发，会让用户觉得网页加载很慢，用户体验不好.在 Safari 和 Chrome 中可以通过 js 动态设置 iframe 的 src 属性来避免阻塞.
- iframe 对于 SEO 不友好，替代方案一般就是动态语言的 Incude 机制和 ajax 动态填充内容等.

常用于：在线编辑器，邮箱

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

- section 标签
  ​ 表示页面中的一个内容区块,比如章节、页眉、页脚或页面的其他部分。可以和 h1、 h2……等标签结合起来使用，表示文档结构。例：HTML5 中 `<section>……</section>`HTML4 中`<div> ……</div>`。
- article 标签
  ​ 表示页面中一块与上下文不相关的独立内容。比如一篇文章。
- aside 标签
  ​ 表示 article 标签内容之外的、与 article 标签内容相关的辅助信息。
- header 标签
  ​ 表示页面中一个内容区块或整个页面的标题。
- hgroup 标签
  ​ 表示对整个页面或页面中的一个内容区块的标题进行组合。
- footer 标签
  ​ 表示整个页面或页面中一个内容区块的脚注。一般来说，他会包含创作者的姓名、创作日期以及创作者的联系信息。
- nav 标签
  ​ 表示页面中导航链接的部分。
- figure 标签
  ​ 表示一段独立的流内容（图像、图表、照片、代码等等），一般表示文档主体流内容中的一个独立单元。使用 figcaption 标签为 figure 标签组添加标题。元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。例如：

  ```html
  <figure>
    <figcaption>PRC</figcaption>

    <p>The People's Republic of China was born in 1949</p>
  </figure>
  ```

## 文本格式化标签

- 加粗：`<b><strong>`
- 倾斜：`<i><em>`
- 删除线：`<s><del>`
- 下划线：`<u><ins>`

注意：前面四个废弃了，尽量用后面四个，后面四个有语义

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

### HTML5 表单新属性

- placeholder：提示信息
- autofocus：元素自动获取焦点
- required：必填项
- autocomplete：是否启用自动完成（必须有提交按钮，该表单控件必须有 name 属性，必须提交过一次）
- multple：多文件上传

### input

### email

### url

### number

### range

### Date Pickers（日期选择器）

- 拥有多个可供选取日期和时间的新输入类型：
- date - 选取日、月、年
- month - 选取月、年
- week - 选取周和年
- time - 选取时间（小时和分钟）
- datetime - 选取时间、日、月、年（UTC 时间）
- datetime-local - 选取时间、日、月、年（本地时间）

### search

### color

## 多媒体标签

### embed

嵌入的内容，插件。

src：嵌入的多媒体地址

### audio

播放音频

autoplay 自动播放

controls 是否显不默认播放控件

loop 循环播放 ( 赋值就是播放几遍 )

### video

播放视频

autoplay 自动播放

controls 是否显示默认播放控件

loop 循环播放

width 设置播放窗口宽度

height 设置播放窗口的高度

内嵌`<source>`标签引入资源(可引入多个，防止浏览器不支持)

### 新增的其他标签

- mark 标签
  ​ 主要用来在视觉上向用户呈现哪些需要突出显示或高亮显示的文字。典型应用搜索结果中高亮显示搜素关键字。
- progress 标签
  ​ 进度条
- time 标签
  ​ 表示日期时间
- ruby 标签
  ​ 定义 ruby 注释（中文注音或字符）。
  ​ 与 `<ruby>` 以及 `<rt>` 标签一同使用。ruby 标签由一个或多个字符（需要一个解释/发音）和一个提供该信息的 rt 标签组成，还包括可选的 rp 标签，定义当浏览器不支持
  ​ "ruby" 标签时显示的内容。
  ​ `<ruby>`
  ​ 漢 `<rt><rp>(</rp>ㄏㄢ ˋ<rp>)</rp></rt>`
  ​ </ruby>
- rt 标签
  ​ 定义字符（中文注音或字符）的解释或发音。
- rp 标签
  ​ 在 ruby 注释中使用，以定义不支持 ruby 标签的浏览器所显示的内容。
- wbr 标签
  ​ 表示软换行。与 br 标签的区别：br 标签表示此处必须换行；wbr 表示浏览器窗口或父级标签足弓宽时（没必要换行时），不换行，而宽度不够时主动在此处换行。
- canvas 标签
  ​ 定义图形，比如图表和其他图像。
  图形容器（画布），用 js 来绘制图形。。

- details 标签 目前只有 Chrome 支持 details 标签

用于描述文档或文档某个部分的细节 。
可与
summary 标签配合使用，summary 可以为 details 定义标题。标题是可见的，用户点击标题时，会显示出 details。summary 应该是 details 的第一个子标签。

- datalist 标签 （类似于百度关键词提示）
  定义选项列表。请与 input 标签配合使用该标签，来定义 input 可能的值。datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。使用 input 标签的 list 属性来绑定 datalist。

  ```html
  <input id="myCar" list="cars" />
  <datalist id="cars">
    <option value="BMW"> </option>
    <option value="Ford"> </option>
    <option value="Volvo"> </option>
  </datalist>
  ```

- keygen 标签
  标签规定用于表单的密钥对生成器字段。

当提交表单时，私钥存储在本地，公钥发送到服务器。

```html
<form action="demo_keygen.asp" method="get">
  Username: <input type="text" name="usr_name" /> Encryption: `<keygen
    name="security"
  />`
  <input type="submit" />
</form>
```

- output 标签
  ​ 定义不同类型的输出，比如脚本的输出。

  ```html
  <form action="form_action.asp" method="get" name="sumform">
    <output name="sum"></output>
  </form>
  ```

- source 标签
  ​ 标签为媒介标签（比如 `<video>` 和 `<audio>`）定义媒介资源。

- menu 标签
  ​ 定义菜单列表。当希望列出表单控件时使用该标签。注意与 nav 的区别，menu 专门用于表单控件。

  ```html
  <menu type=""
    >有三种类型
    <li><input type="checkbox" />Red</li>
    <li><input type="checkbox" />blue</li>
  </menu>
  ```

### 废除的标签

- 能用 css 代替的标签

basefont、big、center、font、s、strike、tt、u。这些标签纯粹是为画面展示服务的，[**HTML5**](http://lib.csdn.net/base/html5)中提倡把画面展示性功能放在 css 中统一编辑。

- 不再使用 frame 框架。

frameset、frame、noframes。[**html5**](http://lib.csdn.net/base/html5)中不支持 frame 框架，只支持 iframe 框架，或者用服务器方创建的由多个页面组成的符合页面的形式，删除以上这三个标签。

- 只有部分浏览器支持的标签

applet、bgsound、blink、marquee 等标签。

- 其他被废除的标签

废除 rb，使用 ruby 替代。

废除 acronym 使用 abbr 替代。

废除 dir 使用 ul 替代。

废除 isindex 使用 form 与 input 相结合的方式替代

废除 listing 使用 pre 替代

废除 xmp 使用 code 替代

废除 nextid 使用 guids

废除 plaintex 使用“text/plian”（无格式正文）MIME 类型替代

## 新增和废除的属性

### 新增的属性

#### 表单相关的属性

- 对 input（type=text）、select、textarea 与 button 指定 autofocus 属性。它以指定属性的方式让标签在画面打开时自动获得焦点。
- 对 input（type=text）、textarea 指定 placeholder 属性，它会对用户的输入进行提示，提示用户可以输入的内容。
- 对 input、output、select、textarea、button 与 fieldset 指定 form 属性。它声明属于哪个表单，然后将其放置在页面的任何位置，而不失表单之内。
- 对 input（type=text）、textarea 指定 required 属性。该属性表示用户提交时进行检查，检查该标签内必定要有输入内容。
- 为 input 标签增加几个新的属性：autocomplete、min、max、multiple、pattern 与 step。还有 list 属性与 datalist 标签配合使用；datalist 标签与 autocomplete 属性配合使用。multiple 属性允许上传时一次上传多个文件； pattern 属性用于验证输入字段的模式，其实就是正则表达式。step 属性规定输入字段的合法数字间隔（假如 step="3"，则合法数字应该是 -3、0、3、6，以此类推），step 属性可以与 max 以及 min 属性配合使用，以创建合法值的范围。
- 为 input、button 标签增加 formaction、formenctype、formmethod、formnovalidate 与 formtarget 属性。用户重载 form 标签的 action、enctype、method、novalidate 与 target 属性。为 fieldset 标签增加 disabled 属性，可以把它的子标签设为 disabled 状态。
- 为 input、button、form 增加 novalidate 属性，可以取消提交时进行的有关检查，表单可以被无条件地提交。

#### 链接相关属性

- 为 a、area 增加 media 属性。规定目标 URL 是为什么类型的媒介/设备进行优化的。该属性用于规定目标 URL 是为特殊设备（比如 iPhone）、语音或打印媒介设计的。该属性可接受多个值。只能在 href 属性存在时使用。
- 为 area 增加 herflang 和 rel 属性。hreflang 属性规定在被链接文档中的文本的语言。只有当设置了 href 属性时，才能使用该属性。注释：该属性是纯咨询性的。rel 属性规定当前文档与被链接文档/资源之间的关系。只有当使用 href 属性时，才能使用 rel 属性。
- 为 link 增加 size 属性。sizes 属性规定被链接资源的尺寸。只有当被链接资源是图标时 (rel="icon")，才能使用该属性。该属性可接受多个值。值由空格分隔。
- 为 base 标签增加 target 属性，主要是保持与 a 标签的一致性。

#### 其他属性

- 为 ol 增加 reversed 属性，它指定列表倒序显示。

- 为 meta 增加 charset 属性

- 为 menu 增加 type 和 label 属性。label 为菜单定义一个标注，type 属性定义可以 menu 以上下文菜单、工具条与列表三种形式出现。

- 为 style 增加 scoped 属性。它允许我们为文档的指定部分定义样式，而不是整个文档。如果使用 "scoped" 属性，那么所规定的样式只能应用到 style 标签的父标签及其子标签。

- 为 script 增减属性，它定义脚本是否异步执行。async 属性仅适用于外部脚本（只有在使用 src 属性时）有多种执行外部脚本的方法：

- 如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）

- 如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
- 如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本

- 为 html 标签增加 manifest，开发离线 web 应用程序时他与 API 结合使用，定义一个 URL，在这个 URL 上描述文档的缓存信息。

- 为 iframe 增加撒个属性，sandbox、seamless、srcdoc。用来提高页面安全性，防止不信任的 web 页面执行某些操作。

新增的属性在下面的 html 中可看出作用

```html
<!DOCTYPE html>
<html lang="en" manifest="cache.manifest">
  <!-- 离线文件应用 -->
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="pragma" content="no-cache" />
    <!-- 禁止页面缓存 -->
    <title>html5新增属性</title>
    <link rel="icon" href="icon.gif" type="image/gif" sizes="16x16" />
    <!-- icon可自定义大小-->
    <base href="http://localhost/" target="_blank" />
    <!--相对localhost地址里的a链接都在新页面打开-->
    <script defer src="base.js"></script>
    <!-- 延迟加载 加载完在执行该js-->
    <script async src="base2.js"></script>
    <!-- 异步加载 加载页面时即可执行-->
  </head>
  <body>
    <a media="handheld" href="">手持设备</a>
    <!-- 将会对手持设备进行优化 -->
    <a media="tv" href="">电视</a>
    <!-- 将会对电视设备进行优化 -->
    <a href="http://www.baidu.com" hreflang="zh" ref="external ">百度</a
    ><!-- 中文的链接 external:外部链接 -->

    <ol start="5" reversed>
      <!-- 序列号从5开始的倒序排列 -->
      <li>222</li>
      <li>333</li>
      <li>444</li>
    </ol>

    <div>
      <style type="text/css" scoped>
        h1 {
          color: red;
        }
      </style>
      <h1>上面的scoped只对本h1有效果</h1>
    </div>

    <iframe seamless srcdoc="HTML_code" src="http://www.baidu.com"></iframe>
    <!--   
    seamless:无边距无边框  
    srcdoc：显示在框架中的 HTML 内容  
    sandbox：（可有三种赋值）严格安全模式 ，会禁止提交表单，会禁止js脚本，会决定iframe和本页面是不同的源是跨域的   
    -->
  </body>
</html>
```

#### 废除的属性

HTML4 中一些属性在[**Html5**](http://lib.csdn.net/base/html5)中不再被使用，而是采用其他属性或其他方式进行替代

| 在 HTML 4 中使用的属性                                                | 使用该属性的标签                                       | 在 HTML 5 中的替代方案                                                                                  |
| --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| rev                                                                   | link、a                                                | rel                                                                                                     |
| charset                                                               | link、a                                                | 在被链接的资源的中使用 HTTP Content-type 头标签                                                         |
| shape、coords                                                         | a                                                      | 使用 area 标签代替 a 标签                                                                               |
| longdesc                                                              | img、iframe                                            | 使用 a 标签链接到校长描述                                                                               |
| target                                                                | link                                                   | 多余属性，被省略                                                                                        |
| nohref                                                                | area                                                   | 多余属性，被省略                                                                                        |
| profile                                                               | head                                                   | 多余属性，被省略                                                                                        |
| version                                                               | html                                                   | 多余属性，被省略                                                                                        |
| name                                                                  | img                                                    | id                                                                                                      |
| scheme                                                                | meta                                                   | 只为某个表单域使用 scheme                                                                               |
| archive、chlassid、codebose、codetype、declare、standby               | object                                                 | 使用 data 与 typc 属性类调用插件。需要使用这些属性来设置参数时，使用 param 属性                         |
| valuetype、type                                                       | param                                                  | 使用 name 与 value 属性，不声明之的 MIME 类型                                                           |
| axis、abbr                                                            | td、th                                                 | 使用以明确简洁的文字开头、后跟详述文字的形式。可以对更详细内容使用 title 属性，来使单元格的内容变得简短 |
| scope                                                                 | td                                                     | 在被链接的资源的中使用 HTTP Content-type 头标签                                                         |
| align                                                                 | caption、input、legend、div、h1、h2、h3、h4、h5、h6、p | 使用 CSS 样式表替代                                                                                     |
| alink、link、text、vlink、background、bgcolor                         | body                                                   | 使用 CSS 样式表替代                                                                                     |
| align、bgcolor、border、cellpadding、cellspacing、frame、rules、width | table                                                  | 使用 CSS 样式表替代                                                                                     |
| align、char、charoff、height、nowrap、valign                          | tbody、thead、tfoot                                    | 使用 CSS 样式表替代                                                                                     |
| align、bgcolor、char、charoff、height、nowrap、valign、width          | td、th                                                 | 使用 CSS 样式表替代                                                                                     |
| align、bgcolor、char、charoff、valign                                 | tr                                                     | 使用 CSS 样式表替代                                                                                     |
| align、char、charoff、valign、width                                   | col、colgroup                                          | 使用 CSS 样式表替代                                                                                     |
| align、border、hspace、vspace                                         | object                                                 | 使用 CSS 样式表替代                                                                                     |
| clear                                                                 | br                                                     | 使用 CSS 样式表替代                                                                                     |
| compace、type                                                         | ol、ul、li                                             | 使用 CSS 样式表替代                                                                                     |
| compace                                                               | dl                                                     | 使用 CSS 样式表替代                                                                                     |
| compace                                                               | menu                                                   | 使用 CSS 样式表替代                                                                                     |
| width                                                                 | pre                                                    | 使用 CSS 样式表替代                                                                                     |
| align、hspace、vspace                                                 | img                                                    | 使用 CSS 样式表替代                                                                                     |
| align、noshade、size、width                                           | hr                                                     | 使用 CSS 样式表替代                                                                                     |
| align、frameborder、scrolling、marginheight、marginwidth              | iframe                                                 | 使用 CSS 样式表替代                                                                                     |
| autosubmit                                                            | menu                                                   |                                                                                                         |

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
<meta name="apple-mobile-web-app-title" content="blog from Qi" />
```

### 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
```

### 添加智能 App 广告条 Smart App Banner

```html
<meta
  name="apple-itunes-app"
  content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=https://github.com/QiShaoXuan"
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
