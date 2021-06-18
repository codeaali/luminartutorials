// hollow triangle
// minimum
// pairs
// pattern

var height = 5;

for(let row=1;row<=height;row++)
{
    
    var str =" ";
    for(let space = height; space > row; space--){
        str+=" ";
    }
    
    for(let star=1;star<=row;star++)
    {
        str+="$ ";
    }
    console.log(str);
}

