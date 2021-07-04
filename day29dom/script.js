function checkAge()
{
    // let age = document.querySelector("#id").value
    // //alert(age)
    // let html_data = age>18?"eligible":"sry"
    // document.querySelector("#result").innerHTML = html_data
   

    // if(age>18){
    //     document.querySelector('#result').style.color = "green"
    // }else{
    //     document.querySelector('#result').style.color = "red"
    // }
    // if(age>18){
    //     html_data = "eligible"
    // }else{
    //     html_data = "not eligible"
    // }
    //alert(html_data)
   // document.querySelector("#result").innerHTML = html_data


   //let ag = document.querySelector("#id").value 
   let ag = id.value
   let html_data = "";
   if(ag >= 18){
       html_data = `<div style = "background-color:green;">eligible</div>`
   }else{
    html_data = `<div style = "background-color:red;">not eligible</div>`
   }
   ////document.querySelector("#result").innerHTML = html_data
   result.innerHTML = html_data
}
//odd or even from input:text
//print prime numbers between low and higher values accepted from two input:text's
