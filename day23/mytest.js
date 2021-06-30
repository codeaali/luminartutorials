var a = {
    name :"AFZAL",
    age : 34,
    JOB : "dev"
}
console.log(a);
for(let key in a)
console.log(`${key} >> ${a[key]}`);
console.log(Object.values(a));