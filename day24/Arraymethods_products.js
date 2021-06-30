var products = [
    
    {code:1000,name:"garlic",mrp:120,avl_qty:10},
    {code:1001,name:"chilly",mrp:80,avl_qty:5},
    {code:1002,name:"tomatto",mrp:35,avl_qty:20},
    {code:1003,name:"onion",mrp:40,avl_qty:37},
    {code:1004,name:"potato",mrp:45,avl_qty:40},
    {code:1005,name:"banana",mrp:55,avl_qty:60},
    {code:1006,name:"brinjl",mrp:43,avl_qty:2},
    {code:1007,name:"beetrt",mrp:38,avl_qty:5},
    {code:1008,name:"carrot",mrp:60,avl_qty:0},
    {code:1009,name:"bittergof",mrp:50,avl_qty:5}


]
//reduce()
//costly prod
var costly = products.reduce((item1,item2)=>item1.mrp > item2.mrp ? item1:item2)
console.log(costly);

//low cost prod
var cheap = products.reduce((item1,item2)=>item1.mrp < item2.mrp ? item1:item2)
console.log(cheap);

let add= (...args)=>args.reduce((num1,num2)=>num1+num2)
console.log(add(1,2,3,4,5,6,7));

//find() // returns the first finded obj
var prod = products.find(item => item.name == "carrot")
console.log(prod);

//some()
var is_avail = products.some(item => item.mrp < 20)
console.log(is_avail);