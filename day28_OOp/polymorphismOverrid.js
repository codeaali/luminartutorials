//method overriding
    class Parent{
        bike()
        {
        console.log("bajaj e5");

    }
    phone()
    {
        console.log("nokia");
    }
}

    class Child{
        bike()
        {
            console.log("ninja");
        }
        phone()
        {
            console.log("iphone");
        }
    }


    var obj = new Child()
    obj.phone()
    obj.bike()