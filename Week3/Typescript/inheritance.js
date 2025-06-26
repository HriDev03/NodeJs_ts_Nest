"use strict";
// we can inherit the properties of existing class
//one class ( child class ) inherits the property of other class(parent class)
// it allows us to use property of another class without writing it 
//parent class hai 
class Personss {
    //classes ke andar method ko define karne ka
    introduce() {
        return `Hey im ${this.name} and im ${this.age} years old and i love ${this.hobbies.join(",")} .`;
    }
    // abb constructor banao aur data set karooo
    constructor(name, age, hobbies) {
        this.name = name,
            this.age = age,
            this.hobbies = hobbies;
    }
}
//student ne person class ko extend krr liya hai tabhi voh usse use krr sakta hai
class Studentt extends Personss {
    constructor(name, age, hobbies, grade) {
        //child class ke constructor ka sabse pehla property super hoga
        super(name, age, hobbies);
        this.grade = grade;
    }
    //classes ke andar method ko define karne ka
    introduce() {
        return `${super.introduce()}, im in grade ${this.grade} .`;
    }
}
//creating instances of classes here
const personss1 = new Personss("Hri", 20, ["reading", "coding", "sleeping"]);
const personss2 = new Personss("Hridyesh", 21, ["nothing", "gym", "sports"]);
const studentts1 = new Studentt("Hridyesh", 21, ["nothing", "gym", "sports"], 12);
console.log(personss1);
console.log(personss2);
console.log(personss1.introduce());
