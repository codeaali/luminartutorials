//array's are declared using []
//object is declared using {}
//prop/key value pairs are used
//obj.key or obj["key"] returns the value.
var exp = {jan:1000,feb:15000,march:22000,april:23000,may:20000,jan:12000}// latest key value is considered if duplication is found.

console.log("march", exp.march);
//or
console.log("march",exp["march"]);

//inserting new prop:value

exp.nov=3000;
exp["dec"]=50000;
console.log(exp);

//updating key.value

exp.march+=50000;
console.log(exp);

//searching : here in keyword is used
console.log("july" in exp);

//check for june is present if not insert june:25000
if("june" in exp)
{

}else{
    exp.june=25000;
}
console.log(exp);
//better ver
if(!("july" in exp))
{
 exp.july=45000;
}
console.log(exp);
