# ajax

## parseParam

采用 Ajax 传递参数加号(+)和与符号(&)时候，服务端获取到的参数并不如意！

- "+"号：JavaScript 解析为字符串连接符，所以服务器端接收数据时"+"会丢失。
- "&"：JavaScript 解析为变量连接符，所以服务器端接收数据时&符号以后的数据都会丢失。
  解决办法：在传到服务端之前先将参数中的"+"和"&"符号都编码一下

```JavaScript
function filter(str) {
  let val = obj[k] + ''
  val = val.replace(/[+&]/g, (a) => {
    return '%' + a.charCodeAt().toString(16)
  })
  let res = k + '=' + val
  arr.push(res)
}
```

用该方法将参数过滤后传到服务端，服务端即可获取到正确的"+"或"&"
