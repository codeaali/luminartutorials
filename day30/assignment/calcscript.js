//display
// function displayNumber(num)
// {
//     inpt.value += num;
// }

let displayNumber = (num)=>inpt.value+=num

//evaluate

// function evaluateExp(){
//     let res = eval(inpt.value)
//     inpt.value = res
// }
let evaluateExp =()=>
{
    if(inpt.value==""){
        inpt.value=0
    }else{
        try{
            inpt.value=eval(inpt.value)
        }
        catch{
            inpt.value="error"
        }
        
    }
    
}

//clearbox

// function clearBox(){
//     inpt.value=""
// }
let clearBox = ()=>inpt.value=""

//remove number
//// function removeNum()
// {
//     inpt.value = inpt.value.slice(0,-1)
// }
let removeNum = ()=>inpt.value = inpt.value.slice(0,-1)