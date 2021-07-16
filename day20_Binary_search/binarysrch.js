var arr = [9, 8, 11, 10, 7, 12];
arr.sort((num1, num2) => num1 - num2)
//console.log(arr);
var element = 12,
    flag = 0;
var low = 0,
    upp = arr.length - 1;
while (low <= upp) {
    let mid = Math.floor((low + upp) / 2)

    if (element > arr[mid]) {
        low = mid + 1;
    } else if (element < arr[mid]) {
        upp = mid - 1;
    } else if (element == arr[mid]) {
        flag++;
        break;
    }

}
console.log(flag > 0 ? "found" : "not found");