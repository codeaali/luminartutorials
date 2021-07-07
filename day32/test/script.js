function insertuser()
{
    let username = uname.value
    let password = pass.value
    
    let user = {
        username:username,
        password : password
    }
    localStorage.setItem(username,JSON.stringify(user))
    alert("success")

}

function populate(users)
{
    let htmlData = ""
    for(let user of users)
    {
        //htmlData+= `<p>${user}</p>`
        htmlData+= `<p>username:${user.username} password: ${user.password}</p>`
    }
    result.innerHTML = htmlData
}

function printuser()
{
    let users = []
    //console.log(localStorage.getItem(afzal));
    for(let i=0;i<localStorage.length;i++)
    {
        let key = localStorage.key(i)
      //  //let user = localStorage.getItem(key)
        let user = JSON.parse(localStorage.getItem(key))
        users.push(user)


        
    }
    populate(users)
   //console.log(users);
}

//signin
function signin()
{
    let usr = user.value
    let pas = pass.value
    if(usr in localStorage)
    {
        let user = JSON.parse(localStorage.getItem(usr))
        if(user.password == pas)
        {   sessionStorage.setItem("user",usr)
            alert("login success")
            window.location.href="userhome.html"
        }else{
            alert("password incorrect")
        }
    }else{
        alert("no user found")
    }
}

function dispbal()
{
    let user = sessionStorage.getItem("user")
    let data = JSON.parse(localStorage.getItem(user))
    alert(data.password)
}