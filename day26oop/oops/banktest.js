class Bank
{
    // createAccount(acc_no,name,bal)
    // {
    //     this.acc_no = acc_no;
    //     this.name = name;
    //     this.bal = bal;
    // }
    getAccDetails()
    {
        let accounts = {
            1000:{acc_no:1000,name:"ram"}
        }
    }
    balEnq()
    {
        console.log("ur bal: "+this.bal);

    }
    deposit(amt)
    {
        this.bal+=amt
        console.log(`ur acc ${this.acc_no} has been cred with ${amt} avail bal: ${this.bal}`);
    }
    withdraw(amt)
    {
        if(this.bal<amt)
        {
            console.log(" trans failed ! insufficient bal");
        } else{
            this.bal-=amt
            console.log(`ur acc ${this.acc_no} has been debited with ${amt} avail bal: ${this.bal}`);
        }
    }
}
var user1 = new Bank()
user1.createAccount(1001,"afzal",2000)
user1.withdraw(900)