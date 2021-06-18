var arr = [1,2,3,4]
var low =0,upp = arr.length-1;
var element = 6;

 var count = 1;
 while(low<upp)
 {
     let total = arr[low] + arr[upp];
    //case 1
     if(element == total)
     {
         console.log(arr[low]+","+arr[upp]);
         low++;
     }
     //case 2
     if(element>total)
     {
         low++;
     }

    //case 3
     else if(element <  total)
     {
         upp--;
     }
     count++;
     

 }

 console.log(count);