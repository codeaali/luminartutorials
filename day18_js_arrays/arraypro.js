var expenses = [30000,25000,27000,25000,25000];
var maxExp = 0;
for(let exp of expenses)
{
    if(exp > maxExp)
    {
        maxExp = exp;
    }
}
console.log(maxExp);

// var counter = expenses.filter(exp => exp>25000).length
// console.log("count: ",counter);