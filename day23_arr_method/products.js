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
//print prod names
var prod_names = products.map(item => item.name)
var upper = products.map(item =>item.name.toUpperCase())
//this wont work // var upper = products.map(item => toUpperCase(item.name))
console.log(upper);
//print all product names in upper


//filter()
//print prods with mrp<50

var low_mrp = products.filter(prods => prods.mrp<50)
console.log(low_mrp);

//print item out of stock items

var out_stck = products.filter(prods => prods.avl_qty <1 )
console.log(out_stck);

//mrp 50 -100
var mid_prod = products.filter(item => item.mrp >= 50 & item.mrp <= 100)
console.log(mid_prod);


//name start with b

var name_b = products.filter(item => item.name[0] == 'b')
console.log(name_b);

//if mrp > 55 add offer 5% : else offer:0%

var offer = products.filter(item => item.mrp>50?item.offer="5%":item.offer="0%")
console.log("offer");
console.log(offer);
console.log("products");
console.log(products);
