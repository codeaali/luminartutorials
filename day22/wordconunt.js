var text = "hello hai hello hai are"
var words = text.split(" ");
console.log(words);
var dict = {}

for(let word of words)
{
    if(word in dict)
    {
        dict[word] +=1;
    }else{
        dict[word] = 1;
    }
}
console.log(dict);