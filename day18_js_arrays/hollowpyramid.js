var height = 5;


for(let row = 1;row<=height;row++)
{
    let star = "";
    // row == 5 ; row+col == 6 ; col-row == 4
    for(let col = 1; col <=9;col++)
    {
        if((row == 5) | (row+col == 6) | (col - row == 4))
        {
            star+="*";
        }
        else{
            star+=" ";
        }
       
        
    }
    console.log(star);
    
    
}
