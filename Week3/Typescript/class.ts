// class is the blueprint for creating objects
//class is like a blueprint for creating similar things(objects)

//object ki kya properties hogi kya methods honge 

class Persons{
    name:string ;
    age:number;
    hobbies:string[];

    // abb constructor banao aur data set karooo
    constructor(name:string,age:number,hobbies:string[]){
        this.name=name,
        this.age=age,
        this.hobbies=hobbies
    }
}

//creating instances of classes here
const persons1:Persons=new Persons("Hri",20,["reading","coding","sleeping"]);
const persons2:Persons=new Persons("Hridyesh",21,["nothing","gym","sports"]);
console.log(persons1);
console.log(persons2);
