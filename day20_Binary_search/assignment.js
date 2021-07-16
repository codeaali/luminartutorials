// compare two arrays and input same elements
//clue: sort before compare put read head as low and compare..
//
var arr1=[10,20,30,40,2]
var arr2=[2,10,11,12,20]


arr1.sort((num1,num2) => num1 - num2);
arr2.sort((num1,num2) => num1-num2);


var low = 0,upp = arr1.length-1;
var pos1 = low,pos2 = low;



    while(pos1 <= upp & pos2<= upp){
        
        
           // let pos1 = low;
           
              //  let pos2 = low;
                if(arr1[pos1] == arr2[pos2])
                {
                    console.log(arr1[pos1]);
                    pos2++;
                } else if(arr1[pos1] < arr2[pos2])
                {
                    pos1++;   
                }
                else if(arr1[pos1] > arr2[pos2])
                {
                    pos2++;
                }
                
            
        
    }