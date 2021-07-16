class Employee
{
    constructor(id,name,desig,sal,exp)
    {
        this.id = id;
        this.name = name;
        this.designation = desig;
        this.salary = sal;
        this.experience = exp;
    }
    
}
//create 5 employee objs
var emp1 = new Employee(101,"afzal","uidev",45000,3)
var emp2 = new Employee(102,"ali","uidesign",40000,1)
var emp3 = new Employee(103,"arun","backend",65000,5)
var emp4 = new Employee(104,"vishal","qa",25000,2)
var emp5 = new Employee(105,"jerry","analyst",55000,8)


//highest salaried emp
employees = []
employees.push(emp1,emp2,emp3,emp4,emp5)
let highEmp = employees.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2)
console.log("highes salaried employee");
console.log(highEmp);


//sort order by exp
console.log((employees).sort((a,b)=>b.experience - a.experience))
//let sorted = Object.entries(employees).sort((a,b)=>b[1])


console.log("if qa is present");
//check if qa is in
console.log((employees).find(item=>item.designation=="qa"))