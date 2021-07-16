// => , sort() , map() , filter() , reduce() ,  find() , some() , foreach()

var arry1 = [10,20,30,40,50]
arr.forEach(num=>console.log(num))

let add = (num1,num2) => num1+num2;
let sub = (num1,num2) => num1 - num2;
let cube = (num) => num**3;

console.log(add(10,20));
console.log(sub(50,30));
console.log(cube(5));

var num_check = num => num%2==0 ? "even" : "odd"
console.log(num_check(9))

//map()

var arr = [1,2,3,4,5]
var sq = arr.map(num => num**2)
console.log(sq);
var cubed = arr.map(num => num**3)
console.log(cubed);

//filter()
var evens = arr.filter(num => num%2==0)
console.log(evens);

//reduce


