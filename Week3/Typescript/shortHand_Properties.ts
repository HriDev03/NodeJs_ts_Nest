//short hand properties
// class mai pehle properties define karo , firr constructors mai likho firr this.name=name

 
class Personssss {

    //
    constructor(
        public name: string, 
        public age: number, 
        protected hobbiess: string[]
    ) {}

    introduceParent(): string {
        return `Hey I'm ${this.name} and I'm ${this.age} years old and I love ${this.hobbiess.join(", ")}.`;
    }
}



class Studenttttt extends Personssss {

    constructor(name: string, age: number, hobbiess: string[], public grade: number) {
        super(name, age, hobbiess);
    }

    introduceStudent(): string[] {
        //return `${super.introduce()} I'm in grade ${this.grade}.`;
        //protected ko child class ke andar use krr sakte hai 
        return this.hobbiess;
        
        //Property 'hobbies' is private and only accessible within class 'Personsss'.
    }
}



// Creating instances
const personnnn1 = new Personssss("Hri", 20, ["reading", "coding", "sleeping"]);

console.log(personnnn1);
console.log(personnnn1.introduceParent());

const studentttt1 = new Studenttttt("Hridyesh", 21, ["nothing", "gym", "sports"], 12);

console.log(studentttt1.introduceStudent());

// Private the moment class ke bahar gye toh khatam hai 