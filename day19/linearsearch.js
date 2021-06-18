var arr = [10,11,12,13,14,15]
var element = 14;
flag = 0;


for(let values of arr){
    if(values == element){
       flag++;
       break;

    }
}
if(flag == 0){
    console.log(element+"not found");
} else{
    console.log(element+" found");
}
