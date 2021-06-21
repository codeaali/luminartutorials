

var products=[
    //id   name       price stock
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",200,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10],
    
]

// print number of product in this shop  7 :8

// print number of product in stock 6 : 7

// print costly product :boost


// print low_cost product : item1

// is there any item available under rs 10 ? true  : true

// print deatils of boost : print boost.
var cnt=0;
for(let prods in products)

{
    cnt++
}
console.log("Total number of products: ",cnt);
var pcount = 0;
for(let prods of products )
{
    if(prods[3]>0){
        pcount++;
    }
}
console.log("number of product in stock : ",pcount);
//max prod and min prod
var maxvalue = 0;
var maxproduct,minproduct;
var pivot = products[0][2];
var minvalue = products[0][2];
//console.log(pivot);
for(let prods of products )
{

    //console.log("prods[2]:",prods[2]+" pivot: ",pivot);
    if(prods[2] >= pivot)
    {
     maxvalue = prods[2];
     maxproduct= prods[1];
    
     
     
     
    
     pivot = maxvalue;
     //console.log("inside if maxvalue",maxvalue+"pivot",pivot);
    
     }
     else if(prods[2] < minvalue ) {
        
        minvalue = prods[2]; 
        
     }
     


}

console.log("costly product: ",maxproduct);
for(let prods of products )
{
    if(prods[2]==minvalue)
    {
        console.log("cheap:",prods[1]);
    }       
        
}

//console.log(products[0][2]);
var status = 0;
for(let prods of products )
{
    if(prods[2]<10){
        status=1;
    }
}
console.log("is there anything below 10:",status>0);

for(let prods of products )
{
    if(prods[1]==maxproduct)
    {
        console.log(prods);
    }       
        
}