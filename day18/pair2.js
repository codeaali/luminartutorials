var arr = [1,2,3,4]
var element = 5,cnt=0;


for (let num1 of arr)
{
    for(let num2 of arr)
    {
        if(num1+num2 == element)
        {
            console.log(num1,num2);
        }
        cnt++;
    }
}
console.log(cnt);