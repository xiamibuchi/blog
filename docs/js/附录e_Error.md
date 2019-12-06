# Error                 

通过**Error**的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象可用于用户自定义的异常的基础对象。下面列出了各种内建的标准错误类型。

## 语法

```
new Error([message[, fileName[,lineNumber]]])
```

### 参数

- `message`

  可选。人类可阅读的错误描述信息。


- `fileName `

  可选。被创建的Error对象的fileName属性值。默认是调用Error构造器代码所在的文件的名字。


- `lineNumber `

  可选。被创建的Error对象的lineNumber属性值。默认是调用Error构造器代码所在的文件的行号。

## 描述

当代码运行时的发生错误，会创建新的Error对象，并将其抛出。

该页面描述了Error对象自身的使用,以及其构造函数的使用. 关于Error实例的内部属性和方法,请看 [`Error.prototype`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype).

### Error 类型

除了通用的Error构造函数外，JavaScript还有6个其他类型的错误构造函数。

- **EvalError**

  创建一个error实例，表示错误的原因：与 [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 有关。

- **InternalError  **

  创建一个代表Javascript引擎内部错误的异常抛出的实例。 如: "递归太多".


- **RangeError**

  创建一个error实例，表示错误的原因：数值变量或参数超出其有效范围。


- **ReferenceError**

  创建一个error实例，表示错误的原因：无效引用。


- **SyntaxError**

  创建一个error实例，表示错误的原因：[`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)在解析代码的过程中发生的语法错误。


- **TypeError**

  创建一个error实例，表示错误的原因：变量或参数不属于有效类型。


- **URIError**

  创建一个error实例，表示错误的原因：给 [`encodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)或  [`decodeURl()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)传递的参数无效。

## 属性

- [`Error.prototype`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype)

  允许添加属性到Error实例.

## 方法

全局Error对象自身不包含任何方法,但从原型链中继承了一些方法.

## `Error`

All [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instances and instances of [non-generic errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types) inherit from `Error.prototype`. As with all constructor functions, you can use the prototype of the constructor to add properties or methods to all instances created with that constructor.

### 属性

### Standard properties

- `Error.prototype.constructor`

  Specifies the function that created an instance's prototype.

- [`Error.prototype.message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message)

  Error message.

- [`Error.prototype.name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name)

  Error name.

### Vendor-specific extensions

** Non-standard**
​      This feature is non-standard and is not on a standards track. Do 
not use it on production sites facing the Web: it will not work for 
every user. There may also be large incompatibilities between 
implementations and the behavior may change in the future.

#### Microsoft

- [`Error.prototype.description`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/description)

  Error description. Similar to [`message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message).

- [`Error.prototype.number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/number)

  Error number.

#### Mozilla

- [`Error.prototype.fileName`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)

  Path to file that raised this error.

- [`Error.prototype.lineNumber`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)

  Line number in file that raised this error.

- [`Error.prototype.columnNumber`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)

  Column number in line that raised this error.

- [`Error.prototype.stack`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack)

  Stack trace.

### 方法

- [`Error.prototype.toSource()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toSource) * *

  Returns a string containing the source of the specified [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object; you can use this value to create a new object. Overrides the [`Object.prototype.toSource()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource) method.

- [`Error.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString)

  Returns a string representing the specified object. Overrides the [`Object.prototype.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method.

## 例子

### 例1: 抛出一个基本错误

通常你会使用[`throw`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/throw)关键字来抛出你创建的Error对象。可以使用 [`try...catch`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 结构来处理异常:

```
try {
    throw new Error("Whoops!");
} catch (e) {
    alert(e.name + ": " + e.message);
}
```

### 例2: 处理一个特定错误

你可以通过判断异常的类型来特定处理某一类的异常,即判断 [`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) 属性，当使用现代Javascript引擎时,可使用[`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 关键字：

```
try {
    foo.bar();
} catch (e) {
    if (e instanceof EvalError) {
        alert(e.name + ": " + e.message);
    } else if (e instanceof RangeError) {
        alert(e.name + ": " + e.message);
    }
    // ... etc
}
```

### 示例: 自定义异常类型

你可能希望自定义基于Error的异常类型，使得你能够 throw new MyError() 并可以使用 `instanceof MyError` 来检查某个异常的类型. 这种需求的通用解决方法如下.

注意，在FireFox中抛出自定义类型的异常会显示不正确的行号和文件名。

参考 ["What's a good way to extend Error in JavaScript?" discussion on Stackoverflow](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript).

```
// Create a new object, that prototypally inherits from the Error constructor.
function MyError(message) {
  this.name = 'MyError';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  throw new MyError();
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'Default Message'
}

try {
  throw new MyError('custom message');
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'custom message'
}
```