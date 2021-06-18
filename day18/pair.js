var num = 6,cnt=1;
var arr= [1,2,3,4];
// o/p all sums of num

    for(let i=0;i<=arr.length;i++)
    {
        for(let j=i+1;j<=arr.length;j++)
        {
            let total = arr[i]+arr[j];
            if(num==total)
            {
                console.log(arr[i],arr[j]);
            }
           
            cnt++;
        }
      
    }
    console.log(cnt);