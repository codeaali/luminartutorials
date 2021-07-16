var accounts = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "04/05/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    }

}
console.log(accounts[1000]);
//accounts[1003]={accno:1003,ac_type:"savings",balance:3000}
console.log(accounts);
console.log(accounts[1002].c_transactions);
console.log("1000s transactions below 500");
accounts[1000].c_transactions.filter((item)=>item.amount>500).forEach((amount)=>console.log(amount))
console.log("sum");

var sum = accounts[1000].c_transactions.map((obj)=>obj.amount).reduce((amt1,amt2)=>amt1+amt2);
console.log(sum);
console.log("test");
var test = accounts[1000].c_transactions.map((obj)=>obj.amount)
console.log(test);
console.log("lowest");
var lowest =  accounts[1000].c_transactions.map((obj)=>obj.amount).reduce((amt1,amt2)=>amt1<amt2?amt1:amt2)
console.log(lowest);
var fDate = accounts[1000].c_transactions.map(obj=>obj.date).reduce((date1,date2)=>date1<date2?date1:date2)
console.log(fDate);



// accounts[1003] = { acno: 1003, ac_type: "savings", balance: 3000 }
// console.log(accounts);
// console.log(accounts[1002].c_transactions);
// // console.log(accounts[1000].c_transactions.filter(transaction=>transaction.amount>500));
// var totalamt = accounts[1000].c_transactions.map(transaction=>transaction.amount).reduce((amt1,amt2)=>amt1+amt2)
// console.log("sum of 1000s cred amnt");
// var total = accounts[1000].c_transactions;
// console.log(total.map((transaction)=>transaction.amount).reduce((amt1,amt2)=>amt1+amt2))
// console.log("totalamt"+totalamt);
// var low = accounts[1000].c_transactions.map(transaction=>transaction.amount).reduce((amt1,amt2)=>amt1<amt2?amt1:amt2)
// console.log(low);
// //dats of 1000
// console.log(accounts[1000].c_transactions.map(trans=>trans.date));
// accounts[1000].c_transactions.forEach(trans=>console.log(trans.dates))
// var firstdate = accounts[1000].c_transactions[0].date
// console.log(firstdate);