//find gcd of 14,63
var num1 =14,num2=63;
var i=0;
for(i=num1;i>=1;i--){
    if( num1 % i ==0 && num2 % i == 0){
        
        console.log(i);
        break;
    }
}