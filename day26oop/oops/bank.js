

class Bank
{
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ram",balance:4000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"ravi",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"raju",balance:7000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"nikil",balance:6000,username:1003,password:"userfour"},

        }
        return accounts
    }

    createUser(name,acc_no,bal)
    {
        this.username =  name;
        this.acc_number = acc_no;
        this.balance = bal;
    }
    balanceEnquiry()
    {
        console.log("ur bal");
    }
}
