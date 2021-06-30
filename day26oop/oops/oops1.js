class Student{
    // setStudent(name,roll,course,total)
    // {
    //     this.name = name // here name,roll,..total are instance variables 
    //     this.roll = roll //this keyword points the current class instance variables
    //     this.course = course    //setstudent is initializing instance vars
    //     this.total = total
    // }
    //constructor is used to init instance vars so.. we replace this madeup method setstudent with 
    //real constructor.
    constructor(name,roll,course,total){
        this.name = name 
            this.roll = roll 
            this.course = course   
            this.total = total
    }
    printStudent(){
        console.log("name : "+this.name,"roll : "+this.roll,"course : "+this.course,"tot : "+this.total);
        console.log(this.name,this.roll,this.course,this.total);
    }
   
}
var afzal = new Student("afzal",2,"cse",599)
// afzal.setStudent("afzal",2,"cse",599)
afzal.printStudent()