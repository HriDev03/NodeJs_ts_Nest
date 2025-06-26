// ACCESS MODIFIERS
/*

| Access Specifier | Accessible in Parent Class | Accessible in Child Class | Accessible Outside of Class
| ---------------- | -------------------------- | ------------------------- | --------------------------- 
| `public`         | ✅                          | ✅                      | ✅                           
| `protected`      | ✅                          | ✅                      | ❌                           
| `private`        | ✅                          | ❌                      | ❌                           

*/



class Personsss {
    public name: string;
    age: number;
    public hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduceParent(): string {
        return `Hey I'm ${this.name} and I'm ${this.age} years old and I love ${this.hobbies.join(", ")}.`;
    }
}



class Studentttt extends Personsss {
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies);
        this.grade = grade;
    }

    introduceStudent(): string[] {
        //return `${super.introduce()} I'm in grade ${this.grade}.`;
        //protected ko child class ke andar use krr sakte hai 
        return this.hobbies;
        
        //Property 'hobbies' is private and only accessible within class 'Personsss'.
    }
}



// Creating instances
const personnn1 = new Personsss("Hri", 20, ["reading", "coding", "sleeping"]);

console.log(personnn1);
console.log(personnn1.introduceParent());

const studenttt1 = new Studentttt("Hridyesh", 21, ["nothing", "gym", "sports"], 12);

console.log(studenttt1.introduceStudent());

// Private the moment class ke bahar gye toh khatam hai 