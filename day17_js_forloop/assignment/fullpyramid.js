//         1
//       2 3 2
//     3 4 5 4 3
//   4 5 6 7 6 5 4
// 5 6 7 8 9 8 7 6 5

// maxnum = 9;
var height = 5;

for(var i = 1; i<=height; i++)
{
    let tree = "";
    let liltree = ""
    for(var n=height;n>i;n--){
        tree+=" ";
    }
    for(var j = 1; j<=i; j++)
    {
        
        tree+="#";
        
        
    }
    for(var n=1;n<i;n++)
        {
            liltree+="#";
        }
        tree+=liltree;
    
    
    console.log(tree);
    
}