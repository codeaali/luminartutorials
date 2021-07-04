var url = document.URL
alert(url)
var h1s = document.getElementsByTagName("h1")
for(let h1 of h1s)
{
    h1.style.color = "green"
    h1.innerHTML = "new text"
}
var classes = document.getElementsByClassName("hclass")
for(let cla of classes)
{
    cla.style.color = "purple"
}
var idied = document.getElementById("id")
idied.innerHTML = "<b>am from j.s</b>"
idied.style.color = "yellow"

var liclass = document.querySelectorAll("li")
for(let tag of liclass)
{
    tag.style.color = "red"
}