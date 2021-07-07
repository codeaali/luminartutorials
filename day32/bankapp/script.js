    class Bank {
        insideBank() {
            alert("inside bank")
        }
    }
    var bank = new Bank()




    function createUser() {
        let account_number = acc_no.value
        let password = pwd.value
        let balance = bal.value
        let user = {
            account_number: account_number,
            password: password,
            balance: balance
        }
        localStorage.setItem(account_number, JSON.stringify(user))
        alert("user created")
        location.reload(true)
    }

    function populate(users) {
        let htmlData = ""
        for (let user of users) {
            htmlData += `<div class="card" style="width: 18rem; margin-bottom:10px;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">account number: ${user.account_number}</li>
          <li class="list-group-item"> password: ${user.password}</li>
          <li class="list-group-item">balance: ${user.balance}</li>
        </ul>
      </div>`
        }
        document.querySelector("#resultarea").innerHTML = htmlData
    }

    function listAllUsers() {
        let users = []

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let user = JSON.parse(localStorage.getItem(key))
            users.push(user)


        }
        populate(users)

        //console.log(users);
    }

    function signin() {
        let uname = username.value
        let pass = password.value

        if (uname in localStorage) {
            let user = JSON.parse(localStorage.getItem(uname))
            // console.log(user["Password"]);
            // console.log(pass);
            if (user.password ==  pass) {

                sessionStorage.setItem("user",uname)
                alert("login success")
                window.location.href = "userhome.html"
            } else {
                alert("incorect password")
            }
        } else {
            alert("user not found")
        }

    }

    function displayBalance(){
        let user = sessionStorage.getItem("user")
        let data = JSON.parse(localStorage.getItem(user))
        // console.log(data);
        alert(data.balance)
    }

    function transferFund(){

    }
    function logout()
    {
        sessionStorage.removeItem("user")
        location.href="login.html"
    }

    //send money
    // to acc_no
    // cnfrm to acc_no
    // money
    // send button