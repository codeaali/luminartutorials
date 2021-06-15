
var num = 123;

var res=0;
while(num!=0){
    let digit = num%10;
    digit= digit**3;
    res+=digit
    // console.log(res);
    num=Math.floor(num/10);
}

console.log(`sum of individual cube root of #{num} is: ${res}`);
