//read age  and health_issue = true/false
    // age>65 eligible for vacc
    // 18-65 healthissue=true eligible for vacc
    // else not eligible
var age,healthissue;
age = 5;
healthissue = true;
if(age>65){
    console.log("eligible for vacc");
}else if(age>=18 && age<=65)
{
    if(healthissue==true){
        console.log("eligible for vacc");
        
    }
}else{
    console.log("wait for an eternity");
    }



