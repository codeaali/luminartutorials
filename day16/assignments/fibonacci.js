var n1 = 0,n2=1,next=0;
   
  var fibo = "";
  while(next<22){
      fibo+=next;//0123
      fibo+=",";
    n1 = n2;//10112                            
    n2 = next;//01123
    next= n1 + n2;//1123
  } 
  console.log("series: ",fibo);

  