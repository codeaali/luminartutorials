class Player
{
    // setobj(name,speed)
    // {
    //     this.name = name;
    //     this.speed = speed;
    // }

    constructor(name,speed)
    {
        this.name = name;
         this.speed = speed;
     }
    
    printobj()
    {
        console.log(this.name,this.speed);
    }
}

var ramos = new Player("ramos",45)
var kante = new Player("ngolo",70)
// ramos.setobj("ramos",65)
// kante.setobj("kante",70)
kante.printobj()
ramos.printobj()