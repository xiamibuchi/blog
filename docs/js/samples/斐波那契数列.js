//递推：一种用若干步可重复运算来描述复杂问题的方法
// function getValue(num){
//     var arr = [0,1,1];
//     for(var i=3;i<=num;i++){
//         arr[i] = arr[i-1]+arr[i-2]
//     }
//     return arr[num]
// }

//递归：程序调用自身：（1.子问题须与原始问题为同样的事，且更为简单2.不能无限制地调用本身，须有个出口，化简为非递归状况处理)
// console.time("aaa")
// var arr = [0, 1, 1]

// function getValue(num) {
//     return arr[num] ? arr[num] : arr[num] = getValue(num - 1) + getValue(num - 2)
// }
// console.log(getValue(100))
// console.timeEnd('aaa')

// ES6的解构赋值2
// const F = (no) => {
//     let a = 0;
//     let b = 1;
//     let i = 1;
//     while (i++ <= no) {
//         [a, b] = [b, a + b]
//     }
//     return a;

// }
// console.log(F(10));


// ES6的解构赋值2
// function fn() {
//     return (no) => {
//         let a = 0;
//         let b = 1;
//         // let i = 1;
//         for (var i = 1; i <= no; i++) {
//             [a, b] = [b, a + b]
//         }
//         // while (i++ <= no) {

//         // }
//         return a;

//     }
// }
// var aa = fn();
function fn(){
    var arr=[0,1,1]
    return function getValue(num){
        return arr[num]?arr[num]:arr[num]=getValue(num-1)+getValue(num-2)
    }
}