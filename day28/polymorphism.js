//method overloading... doesn't work coz recent/last implemented method gets called.

    class Calculation{
        add()
        {
            console.log("inside no arg method");
        }
        add(num1)
        {
            console.log("inside 1 arg method");
        }
        add(num1,num2)
        {
            console.log("inside 2 arg method");
        }
        
        
    }


    var obj = new Calculation();
    obj.add() //only latest implemented method gets called
    obj.add(10) //only latest implemented method gets called
    obj.add(2,4)//only latest implemented method gets called

    //That's why we have spread operator in j.s

   // add(...args){
        //takes n number od args
    //}

    