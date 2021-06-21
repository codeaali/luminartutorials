//abbac

var pattern = "abmnklm";
var dict = {};
var a;
for(let char of pattern)
{
    if(char in dict)
    {
        console.log("first recursive char",char);
        a= char;
        break;
    }else
    {
        dict[char] = 1;
    }
}
dict.char=a;
console.log(dict.char);