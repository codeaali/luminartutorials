
// // var per = [{name:'iola',age:45,pace:'12kmh'},
// // {name:'baiju',age:12,pace:'30kmh'}]

// var per = {name:'iola',age:45,pace:'12km',myfun:function(){
    
//     console.log("this dot",this.name);
// }};

       


// console.log("name velil:",per.name);
// per.myfun();

// per.dispage = function dispage(){
//     console.log(this.age);
// }
// console.log(per);
// for(x in per)
// {
//     console.log(x);
// }

function person(name,age,place)
{
    this.name = name
    this.age = age
    this.place = place
    this.display = function disp()
                    {
                        console.log("this.name:"+this.name+"this.age:"+this.age);
                   }
}

var per1 = new person("afzal",24,"ocr")
var per2 = new person("abhi",23,"kollam")
per1.display();
