//从小到大
var arr = [1, 2, 5, 81, 4, 52, 56, 62, 5]
for (var i = 0; i, arr.length; i++) {
    var flag = true;
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j + 1];
            arr[j + 1] = arr[j]
            arr[j] = temp
            flag = false
        }
    }
    if (flag) {
        break
    }
}
console.log(arr);