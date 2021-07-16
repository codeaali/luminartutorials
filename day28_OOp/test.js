const items = [
    {name:'bike',price:100},
    {name:'tv',price:200},
    {name:'album',price:10},
    {name:'book',price:5},
    {name:'phone',price:500},
    {name:'computer',price:1000},
    {name:'keyboard',price:25}



]


let total = items.map(item=>item.price).reduce((item1,item2)=>item1+item2)
console.log(total);
let othertotal = items.reduce((prev,item)=>{
    return item.price + prev
},0)
console.log(othertotal);