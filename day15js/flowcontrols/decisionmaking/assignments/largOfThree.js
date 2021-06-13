// var num1 = Math.floor(Math.random() * 100) + 1;
// var num2 = Math.floor(Math.random() * 100) + 1;
// var num3 = Math.floor(Math.random() * 100) + 1;
var num1 = 41;
var num2 = 45;
var num3 = 50;
var frst ;
var scnd;
var thrd;
console.log(`values are num1: ${num1} num2: ${num2} and num3: ${num3}`);
if(num1>num2 && num1>num3){
    frst = num1;
    console.log(`num1: ${num1} is larger than ${num2} and ${num3}`);
    if(num2>num3){
        scnd = num2;
        thrd = num3;
    }else{
        scnd = num3;
        thrd = num2;
    }
}
else if(num2>num3){
    frst = num2
    console.log(`num2: ${num2} is larger than ${num1} and ${num3}`);
    if(num1>num3){
        scnd = num1;
        thrd = num3;

    }else{
        scnd = num3;
        thrd = num1;
    }
}
else{
    frst = num3;
    console.log(`num3: ${num3} is larger than ${num1} and ${num2}`);
    if(num1>num2){
        scnd = num1;
        thrd = num2;

    }else{
        scnd = num2;
        thrd = num1;
    }
}
console.log(`largest num: ${frst}\n second largest num: ${scnd} `);
console.log(`numbers in descending order:${frst},${scnd},${thrd}`);