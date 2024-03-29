# 文件

## Blob

Blob (binary large object)，对象表示一个不可变、原始数据的类文件对象。

### 创建 Blob 对象

- Blob 支持结构化克隆算法（structured clone algorithm），所以可以通过消息事件从另外一个窗口或线程中获取 blob 对象
- 调用 Blob 构造函数。`new Blob(blobParts[, options]);`
- 使用 Blob 对象上的 slice()方法切出另一个 Blob 对象
- 调用 canvas 对象上的 toBlob 方法
- 网络下载 blob

Blob 对象有两个只读属性：

- size：二进制数据的大小，单位为字节。
- type：二进制数据的 MIME 类型，全部为小写，如果类型未知，则该值为空字符串。

在 Ajax 操作中，如果 xhr.responseType 设为 blob，接收的就是二进制数据。

### 作用

- 通过 window.URL.createObjectURL(blob) 生成 Blob URL 实现下载
- 文件分片上传。通过 Blob.slice(start,end)可以分割大 Blob 为多个小 Blob

## URL 对象

URL 对象用于生成指向 File 对象或 Blob 对象的 URL。

`window.URL.createObjectURL`

创建一个 DOMString，它的 URL 表示参数中的对象。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的 URL 对象表示着指定的 File 对象或者 Blob 对象。

```js
const OBJECT_URL = window.URL.createObjectURL(file);
```

`window.URL.revokeObjectURL`

用来释放一个之前通过调用 `window.URL.createObjectURL` 创建的已经存在的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法释放对这个文件的引用

```js
window.URL.revokeObjectURL(OBJECT_URL);
```

```js
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = 'd=e&f=g';
myURL.hash = '#hig';

const myURL = url.parse(myURL.href);
```

## FileReader

对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

> FileReader 仅用于以安全的方式从用户（远程）系统读取文件内容 它不能用于从文件系统中按路径名简单地读取文件。 要在 JavaScript 中按路径名读取文件，应使用标准 Ajax 解决方案进行服务器端文件读取，如果读取跨域，则使用 CORS 权限。

### DataURI 对象

"data:image/png;base64,xxxxxxxxxxxxx"这种形式的字符串叫做 DataURI 对象，允许将一个小文件进行编码后嵌入到另外一个文档里，格式为：

`data:[<MIME type>][;charset=<charset>][;base64],<encoded data>`

整体可以视为三部分，即声明：参数+数据，逗号左边的是各种参数，右边的是数据。

URL 是 uniform resource locator 的缩写，在 web 中的每一个可访问资源都有一个 URL 地址，例如图片，HTML 文件，js 文件以及 style sheet 文件，我们可以通过这个地址去 download 这个资源。其实 URL 是 URI 的子集，URI 是 uniform resource identifier 的缩写。URI 是用于获取资源，包括其附加的信息的一种协议。附加信息可能是地址，也可能不是地址，如果是地址，那么这时 URI 就变成 URL 了。注意的是 data URI 不是 URL，因为它并不包含资源的公共地址。

我们可以通过 FileReader 的 readAsDataURL 方法获得：

```js
const reader = new FileReader();
reader.onload = function() {
  console.log(this.result);
};
reader.readAsDataURL(file);
```

有时候我们需要将 DataURI 对象转 blob 对象：

```js
/**
 * dataURI 转 blob
 * @param {Object} dataURI
 */
function dataURItoBlob(dataURI) {
  const arr = dataURI.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
```

### FileReader API 详解

#### 状态常量

- **EMPTY**：值为 0，还没有加载任何数据;
- **LOADING**：值为 1，数据正在被加载;
- **DONE**：值为 2，已完成全部的读取请求。

#### 属性

- `error`：在读取文件时发生的错误， 只读;
- `readyState`：表明 FileReader 对象的当前状态，值为 State constants 中的一个，只读；
- `result`：取到的文件内容，这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的，只读。

#### 方法

- `abort()`：中止该读取操作.在返回时,readyState 属性的值为 DONE.
- `readAsArrayBuffer()`：开始读取指定的 Blob 对象或 File 对象中的内容. 当读取操作完成时,readyState 属性的值会成为 DONE,如果设置了 onloadend 事件处理程序,则调用之.同时,result 属性中将包含一个 ArrayBuffer 对象以表示所读取文件的内容.
- `readAsBinaryString()`：开始读取指定的 Blob 对象或 File 对象中的内容. 当读取操作完成时,readyState 属性的值会成为 DONE,如果设置了 onloadend 事件处理程序,则调用之.同时,result 属性中将包含所读取文件的原始二进制数据.
- `readAsDataURL()`：开始读取指定的 Blob 对象或 File 对象中的内容. 当读取操作完成时,readyState 属性的值会成为 DONE,如果设置了 onloadend 事件处理程序,则调用之.同时,result 属性中将包含一个 data: URL 格式的字符串以表示所读取文件的内容.
- `readAsText()`：开始读取指定的 Blob 对象或 File 对象中的内容. 当读取操作完成时,readyState 属性的值会成为 DONE,如果设置了 onloadend 事件处理程序,则调用之.同时,result 属性中将包含一个字符串以表示所读取的文件内容.

#### 事件处理

- `onabort`：当读取操作被中止时调用.
- `onerror`：当读取操作发生错误时调用.
- `onload`：当读取操作成功完成时调用.
- `onloadend`：当读取操作完成时调用,不管是成功还是失败.该处理程序在 onload 或者 onerror 之后调用.
- `onloadstart`：当读取操作将要开始之前调用.
- `onprogress`：在读取数据过程中周期性调用.

## 上传

文件上传的几种方式：

- 传统 flash 上传
- 隐藏 iframe 框上传
- 表单数据提交
- HTML5 的新工具——File API

### form 表单上传

```js
<form action="upload" method="post" enctype="multipart/form-data">
  <input type="file" name="pic" />
  <input type="submit" value="上传" />
</form>
```

- `action` 请求的后端方法
- `enctype="multipart/form-data` 在使用包含文件上传控件的表单时，必须使用该值。

### FormData 上传

form 表单提交会导致页面刷新，不希望页面被刷新，可以用 ajax 上传 FormData 数据。

> XMLHttpRequest Level 2 添加了一个新的接口 FormData，用来模拟一系列表单控件，使用 XMLHttpRequest 的 send()方法来异步的提交。

```html
<form>
  <input type="file" name="pic" id="pic" />
  <input type="button" onClick="upload()" value="上传" />
</form>

<script>
  function upload(){
    let url="upload";
    // 获取文件
    let pic = document.getElementById('pic').files[0];
  // 初始化一个 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();
    // 初始化一个 FormData 对象
    const form = new FormData();
    // 携带文件
    form.append("pic", pic);
    //开始上传
    xhr.open("POST", url, true);
    //在readystatechange事件上绑定一个事件处理函数
    xhr.onreadystatechange=() => {
      // do something
    };
    xhr.send(form);
</script>
```

### File API

File 对象可以用来获取某个文件，还可以读取这个文件的内容。通常情况下，File 对象是来自用户在一个`<input>`元素上选择文件后返回的`FileList`对象,也可以是来自由拖放操作生成的 DataTransfer 对象。

### input 上传

我们可以通过给 input file 标签设置 accept 属性进行文件选择过滤，该属性的值必须为一个逗号分割的列表,包含了多个唯一的内容类型声明：

- 以 STOP 字符 (U+002E) 开始的文件扩展名。（例如：".jpg,.png,.doc"）
- 一个有效的 MIME 类型，但没有扩展名
- `audio/*` 表示音频文件 HTML5
- `video/*` 表示视频文件 HTML5
- `image/*` 表示图片文件

设置 multiple 属性可以进行设置为多选。

设置 capture 属性可以进行设置打开摄像拍照或者录像。

```html
<!-- Capture Image: -->
<input type="file" accept="image/*" capture="camera" />
<!-- Capture Audio: -->
<input type="file" accept="audio/*" capture="microphone" />
<!-- Capture Video: -->
<input type="file" accept="video/*" capture="camcorder" />
```

multiple 属性和 capture 属性不能同时生效。

通过 File API,我们可以在用户选取一个或者多个文件之后,访问到代表了所选文件的一个或多个 File 对象，这些对象被包含在一个 FileList 对象中。所有 type 属性(attribute)为 file 的`<input>`元素都有一个 files 属性，用来存储用户所选择的文件。files 有一个 length 属性和 item 方法，我们可以通过 files[index]或者 files.item(index)获取我们选择的 file 对象。可以通过 change 事件监听 input file 输入完成事件：

```js
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener(
  "change",
  function(event) {
    const file = fileInput.files[0];
    console.log(file);
  },
  false
);
```

File API 提供 File 对象，它是 FileList 对象的成员，包含了文件的一些元信息，比如文件名、上次改动时间、文件大小和文件类型。下图可以 File 对象的属性：

- lastModifiedDate：文件对象最后修改的日期
- name：文件名,只读字符串,不包含任何路径信息.
- size：文件大小,单位为字节,只读的 64 位整数.
- type：MIME 类型,只读字符串,如果类型未知,则返回空字符串.

例如：我们可以根据 size 换算出我们习惯的文件大小表达方式：

```js
/**
 * 读文件大小
 * @param {Object} file
 */
function readFileSize(file) {
  var size = file.size / 1024;
  var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  var fileSizeString = "";
  for (var i = 0; size > 1; size /= 1024, i++) {
    fileSizeString = size.toFixed(2) + " " + aMultiples[i];
  }
  return fileSizeString;
}
```

## 下载

### a 标签下载

对于图片文件和文本文件这种可以被浏览器打开的文件不会被下载

### DataUrl 和 BlobUrl

```js
function image2base64(img) {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const mime = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  const dataUrl = canvas.toDataURL("image/" + mime);
  return dataUrl;
}

const image = new Image();
image.setAttribute("crossOrigin", "Anonymous");
image.src = self url;
image.onload = function() {
  const imageDataUrl = image2base64(image);
  let anchor = document.createEle
  anchor.href = imageDataUrl;
  anchor.download = file name;
  anchor.click();
  anchor = null;
};
```

### csv

csv 结构简单，实际是导入有格式的文本

```js
let values = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
];
const HEADERS = ["header1", "header2"];
const CSV_STR =
  HEADERS.join(",") +
  "\n" +
  values.reduce((result, ele) => {
    result += Object.values(ele).join(",\t") + "\n"; // 如需保证csv顺序，按照字段顺序排列
    return result;
  }, "");

const blob = new Blob([CSV_STR], {
  type:
    ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
});

const URI = window.URL.createObjectURL(blob);
const FILE_NAME = "文件流下载" + ".csv";
let anchor = document.createElement("a");
anchor.href = URI;
anchor.setAttribute("download", FILE_NAME);
anchor.click();
anchor = null;
```

## xlsx

借助 xlsx 插件，前端可以生成 .xlsx 文件进行导出
