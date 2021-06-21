var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1000,"nikil","mrkt",30000,2]
]
for(let emp of employees){
    console.log(emp[1],emp[3]);
}
for(let emp of employees){
    if(emp[2] == "developer")
    {
        console.log(emp);
    }
}
console.log("values less than 22k");
//priint employee details whose sal < 22k
for(let emp of employees){
    if(emp[3] < 22000)
    {
        console.log(emp);
    }
}

//assignment

var products=[
    //id   name       price stock
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
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
