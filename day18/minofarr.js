 var expenses = [200,25000,27000,25000,10];
var min = expenses[0];
for(let exp of expenses)
{
    if(exp < min)
    {
        min = exp;
    }

}
console.log(min);
// var temp;
// for(let i=0;i<expenses.length;i++)
// {
//     temp = expenses[i];
//     console.log("temp",temp);

//     for(let j=i+1;j<expenses.length;j++)
//     {
//         if(temp < expenses[j])
//         {
//             minExp = temp;
//             console.log("minxp:",minExp);
//         } else
//         {
//             minExp = expenses[j];
//         }
       
        
//     }

// }
// // console.log(minExp);


// // var counter = expenses.filter(exp => exp>25000).length
// // console.log("count: ",counter);