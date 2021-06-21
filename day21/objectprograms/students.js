var product = {
    item_code:1000,
    mrp:30000,
    name:"f14",
    in_stock:15
}

//print itemprice
console.log("mrp",product["mrp"]);

//item name
console.log("name",product.name);
//update new offer of 2000
product.mrp -= 2000;
console.log("new price:",product.mrp);
//check offer and insert
if(!("offer" in product)){
    product.offer="20%";
}
//update stock
product.in_stock = 10;
console.log(product);