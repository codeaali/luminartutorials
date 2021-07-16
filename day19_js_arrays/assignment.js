// first recursive char from a pattern
// abbacfj // a
// bghb // b

var str1 = "abmnqwertyuiec";
var str2 =  "babc";
var cnt=0;

//

for(let i=0;i<str1.length;i++)
{
    for(let j=i+1;j<str1.length;j++)
    {
        if(str1[i]==str1[j])
        {
            console.log(str1[i]);
            break;
        }
    }
}


    

