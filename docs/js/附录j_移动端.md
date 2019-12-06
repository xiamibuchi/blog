# 移动端

## 阻止虚拟键盘弹出

### 表单 readonly 属性

readonly 属性规定输入字段为只读。只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本
缺点： IOS 的 Safari 可能失效

### document.activeElement.blur()

它返回当前页面中获得焦点的元素，也就是说，如果此时用户按下了键盘上某个键，会在该元素上触发键盘事件，该属性是只读的。
当你点击 input 的时候，document.activeElement 获得了 DOM 中被聚焦的元素，也就是你点击的 input，而调用.blur()方法，就是取消聚焦。
