var num = 10, num2 = 20;
console.log("bef swapping  num1 :  num2 :", num, num2);
var junk = num2;
num2 = num
num = junk;
console.log("aft swapping num1: num2: ", num, num2);
var d1 = 2;
var d2 = 3;
console.log("bef swap: d1 : d2 :", d1, d2);
d1 = d1 + d2;
d2 = d1 - d2;
d1 = d1 - d2;
console.log("after swap: d1:  d2: ",d1 ,d2);

