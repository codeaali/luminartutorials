function add(...arg)
//... means spread operator and arg accepts arguments as arrays 
//args=[]
{
    let total=0;
    for(let num of arg)
    {
        total+=num;
    }
    return total;
}
console.log(add(10,4,5,6));
console.log(add(8,2));