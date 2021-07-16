class Bank {
    status = 0;
    getAccountDetails() {
        let accounts = {
            1000: { account_number: 1000, name: "ram", balance: 4000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "ravi", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "raju", balance: 7000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "nikil", balance: 6000, username: 1003, password: "userfour" },

        }
        return accounts
    }
    auth(uname, pwd) {
        let data = this.getAccountDetails()
        if (uname in data) {
            if ((uname == data[uname].username) & (pwd == data[uname].password)) {
                this.status = 1;
                return uname;
               
                //succss auth
            } else {
                // console.log(-1);
                return -1;
                //pswrd wrong
            }

        } else {
            return 0;
            //invalid username or uname not found
        }


    }
    balEnq(acc_no)
{
    if(this.status ==1)
    {
        let data = this.getAccountDetails()
        console.log(data[acc_no].balance);
    } else {
        console.log("u must log in first");
    }
}

    fundTransfer(user,to_acc,amt)
    {
        //check for to-acc is present/not
        let data = this.getAccountDetails()
        if(!(to_acc in data)){
            console.log("invalid to_acc number");
        }
        let balance = data[user].balance
        if(balance < amt)
        {
            console.log("insufficient bal");
        }else{
            data[to_acc].balance+=amt
            data[user].balance-=amt
            console.log(data);
        }
    }


}//class end


var obj = new Bank()
// {
//     console.log(user1.auth(1000, "uselrone"));
// }

let user = obj.auth(1000,"userone")

obj.balEnq(user)
obj.fundTransfer(user,1001,2000)

