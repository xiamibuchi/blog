function text() {}
var text;
var text;
console.log(text)
text = 0;
console.log(text);

// 代码解释器会预编译成：
// function text() {}
// var text;//实际没效果
// console.log(text);
// text = 0;
// console.log(text);


// 交换第二行和第三行位置,如下:
// console.log(text)
// var text;
//text = 0;
// function text() {}
// console.log(text);
// 解释器同样会预编译成:
// function text() {}
// console.log(text)
// var text;
//text = 0;
// console.log(text);
// 函数优先级高所以在变量名之前，变量名不会覆盖函数名。
//编译器会忽略函数声明的同名变量声明
//变量名不会覆盖函数名。


//
// function text() {}
// var text = 0;//text的引用不是函数了。
// console.log(text);
// console.log(text);
//结果是
// 0
// 0 