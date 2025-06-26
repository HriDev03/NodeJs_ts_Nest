//static properties and methods

/*
    the methods and propertires that belong to the class itself than the 
    instance of class(Object)

    we can access methods diretly from the class rather than the obejcts

    eg: creating a utility class used to perform various operations

*/

// class HomoSapian{
//     public name : string;
//     constructor(name:string){
//         this.name=name
//     }
// }

// const userhai1=new HomoSapian("Hridy")

class MathOps{
    public static PI=Math.PI

    public static add(num1:number,num2:number){
        return num1+num2;
    }
    
    public static sub(num1:number,num2:number){
        return num1-num2;
    }

}
console.log(MathOps.PI);
console.log(MathOps.add(5,10));
console.log(MathOps.sub(10,5));