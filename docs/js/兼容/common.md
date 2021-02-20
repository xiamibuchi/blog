# common

## HTML5 Shiv

This script is the defacto way to enable use of HTML5 sectioning elements in legacy Internet Explorer

[Github](https://github.com/aFarkas/html5shiv)

### 原理

对于未知的标签元素 mytag，只要在 head 中执行一次document.createElement(mytag)，那么body里所有mytag标签在渲染时就会自动正确应用css样式了。”让CSS 样式应用在未知元素上只需执行 document.createElement(elementName) 即可实现。

html5shiv.js的原理是在执行时先往head中插入应用到html5标签的css样式，然后对于所有html5标签都执行一次document.createElement(nodeName)，这样，浏览器在渲染body部分时，对于html5标签就能够正确的应用css样式，这也就是html5shiv.js必须放置在head中的原因。

### 用法

html5shiv的使用非常的简单，考虑到IE9是支持html5的，所以只需要在页面head（必须要在head中）中添加如下代码即可：

```html
<!--[if lt IE9]>

<script type="text/javascript" src="scripts/html5shiv.js"></script>

<![endif]-->

```

## CSS 条件注释

CSS IE 条件注释 专门用于兼容 IE 低版本

所以只有 IE9 及 IE9 以下版本 才认识，其他版本的浏览器或者 IE10 以上 的版本会当成注释, 不会解析

```
lte：就是Less than or equal to的简写，也就是小于或等于的意思。
lt ：就是Less than的简写，也就是小于的意思。
gte：就是Greater than or equal to的简写，也就是大于或等于的意思。
gt ：就是Greater than的简写，也就是大于的意思。
```

用法实例:

在小于等于 IE 8 的浏览器中才会执行, 在 IE9 中, 就是普通的注释, 不会解析执行

```html
<!--[if lte IE 8]>
    <script>
      alert("呵呵, 小于等于IE8都会执行这段话");
    </script>
    <script src="html5shiv.js"></script>
<![endif]-->
```

大于 IE 8 的浏览器才执行, 只有 IE 9 认识, 其他浏览器, IE 10 及以上, 都将条件注释当成注释

```html
<!--[if gt IE 8]>
   <script>
      alert("只有IE9才执行这句话");
   </script>
<![endif]-->
```
