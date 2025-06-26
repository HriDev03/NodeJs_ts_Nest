// GETTERS AND SETTERS 
// used to control the access and modifications of class properties
// getters : Used to retrive the properties and setters allow us to set the value of a property

// we can do additional logics and validations in getters and setters

class Human{
    private _age:number|undefined;
    constructor(
        public myName:string,
        protected hobbies:string[]
    ){}

    public set age(age:number){
        if(age>150 || age<0){
            throw new Error("age is not valid")
        }
        this._age=age;
    }

    public get age(){
        if(this._age===undefined){
            throw new Error("Age is not defined")
        }
        return this._age;
    }

    // if ant to access only age directly (use getter) or if you  want to call with other info we can use n
    introduceParent():string{
        return `Hi im ${this.myName} and I'm ${this._age} years old , i love ${this.hobbies.join(",")}.`
    }

}

const insaan1:Human=new Human("Hridy" ,["reading","photography"])
console.log(insaan1.introduceParent());
