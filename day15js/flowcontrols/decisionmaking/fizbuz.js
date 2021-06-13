var num = 28;
var res = "";

//  console.log("num1: ",num);
//  if(num%15==0){
//      console.log("fizbuzz");
//  }else if(num%3==0){
//      console.log("fiz");
//  }else if(num%5==0){
//      console.log("buz")
//  }
if (num % 3 == 0) {
    res += "fizz";
} if (num % 5 == 0) {
    res += "buzz";
}
console.log(res);
