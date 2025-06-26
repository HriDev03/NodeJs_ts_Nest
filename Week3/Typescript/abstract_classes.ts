// abstract classes provide a wa to define common properties and methods that mltiple derived classes can share
// makes code reusable, these abstract classes can not be instantiated(objects nahi bana sakte inka)

//abstract classes focus on class inheritance and shairing common functionality

//multiple classes ke liye ek parent class

// used to make common classes and methods that multiple derived classes can share


// when it comes to classes we create abstract class instead of interface
// class mai mulitple properties and methods use ho raha hai toh usko use karne ke liye abstract class banao

abstract class Shape{
    constructor( protected color:string){}
    //normal way
    abstract calArea():number;
    //fat arroe way
    abstract displayArea:()=>void;
}

class Circle extends Shape{
    constructor(protected color : string,protected radius:number){
        super(color)
    }
    public calArea(): number {
        return Math.PI*(this.radius*this.radius)
    }

    public displayArea = ():void=>{
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    };
}


const circle1 =new Circle("red",5);
circle1.calArea();
circle1.displayArea()

//class : Extends 
// Interface : Implements