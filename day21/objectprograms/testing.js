var exp = {jan:1000,feb:15000,march:22000,april:23000,may:20000,jan:12000}

exp.nov = 12000;
exp.jan = 35000;

if(!("june" in exp))
{
    exp.june = 56000;
}
console.log(exp);


