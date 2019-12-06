var a = [];
//var没有块级作用域，所以i其实声明在for之外
for (var i = 0; i < 10; i++) {
	a[i] = function() {
		return i;
	}
}
a[8](); //10


//如用es5的方法解决，可用立即执行函数创建独立作用域
// for (var i = 0; i < 10; i++) {
//   a[i] = function bar(i){
//     return function () {
//       return i;
//     };
//   }(i);
// }
// a[8]();


// es6的方法直接var改为let,这样子for 的 i 变量就有块作用域，如下
// var a = [];
// for (let i = 0; i < 10; i++) {
// 	a[i] = function() {
// 		return i;
// 	}
// }