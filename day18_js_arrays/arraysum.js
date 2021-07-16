var expenses = [30000,25000,27000,25000,25000]
var sum=0;
var count=0;
var maxexp=0;

for(let val of expenses)
{
    if(val > 25000)
    {
        console.log(val);
    }

    // if(val>=25000){
    //     count++;
    // }
    // if(val>=maxexp){
    //     maxexp = val;
    // }
    // console.log(val);
    sum+=val;
    
}
// console.log(count);
console.log("totalexp:",sum);
// console.log(maxexp);


var Scount=0;
for(let exp of expenses )

{
  


if(exp > 25000)
{
    Scount++;
}

}
console.log("count:",Scount);


