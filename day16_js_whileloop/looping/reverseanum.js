var num = 123;
var num1 =num;
var res="";
while(num!=0){
    let digit = num%10;
    res+=digit
    // console.log(res);
    num=Math.floor(num/10);
}
console.log("num:",num);
console.log("num1:",num1)
console.log(res);
// if(res == num1){
//     console.log("yes..its a palindrome");
// }else{
//     console.log("nah..its ! a palindrome");
// }
console.log(res==num1?"yes its palindrome":"nah ist not");