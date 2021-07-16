//var num=2
low = 8
upp = 25
// print num powers of integers( 1to ..) in range low and upp
var num=1;
for(var i=1;i<=upp;i++){
    if(i**num >= low && i**num <= upp){
        console.log(i);
    }
   // console.log((i**num>=8)&(i**num <= 25)?i:"");
   
}