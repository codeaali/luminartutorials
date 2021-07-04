function check()
{
    var input = document.querySelector("#inpt").value
if(input % 2 ==0)
{
    answer.innerHTML = "even"
}else{
    answer.innerHTML = "odd"
}
}

function prime()
{
    var lower = low.value
    var upper = upp.value
    var primenums = ""
    for(let i=lower;i<upper;i++)
    {
        for(let j=2;j<i;j++)
        if(i%j!=0){
            primenums+=i+' ';
            break;
        }else{
            break;
        }
    } 
    res.innerHTML = primenums
}