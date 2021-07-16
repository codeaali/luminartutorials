//inheritance
//parent => child
//base => derived
//super =>sub

class Parent{
    m1()
    {
        console.log("m1");
    }
}
class Child extends Parent{
    m2()
    {
        console.log("m2");
    }
}
class Subchild extends Child
{
    m3()
    {
        console.log("m3");
    }
}
console.log("single inheritance");
var obj = new Child();
obj.m2()
obj.m1()
console.log("multi level inheritance");
var obj2 = new Subchild();
obj2.m3()
obj2.m2()
obj2.m1()