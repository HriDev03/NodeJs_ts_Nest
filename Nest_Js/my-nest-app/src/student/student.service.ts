import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
    private students=[
        { id:1,name:"Hridyesh",age:20},
        { id:2,name:"Hridy",age:21}
    ];


    //GET 

    // saare data ko fetch karna
    //jab user get request kare ga toh tabh kyaa chalna chahiye
    getAllStudents(){
        return this.students;//students ke andar jo bhi data ho usse fetch krr do 
    }

    //specific id ko fetch karna
    getStudentById(id:number){
        const student = this.students.find((stud)=>stud.id===id);
        //jis student ki id match krr jaye gi use store krr do 
        if(!student){
            // will throw a not found 404 error here 
            //nest js built in exception
            throw new NotFoundException("Student Not Found!")
        }
        // voh student hoga jiski id match krr jaaye gi 
        return student;
    }  


    //POST : need to create/add our data in the db
    createStudent(data:{name:string;age:number}){
        
        //jo bhi data mill raha hai uss ko store krr dena
        const newStudent = {
            id:Date.now(),
            // jo data mill raha hai usse store krr dena  
            ...data,
        }

        // Array mai push krr do 
        // yeh jo student array hai ismai new Student ke data ko push krr do 
        this.students.push(newStudent)

        // will return this new data , yeh jo naya waala data bana isse add kr diya hai 
        return newStudent;
    
    }



    //PUT : complete data ko agar update karna ho toh 
    // kis data ko update karna hai , kis data se update karna hai
    updateStudent(id:number,data:{name:string, age:number}){

        //uss student ke index ko find karega jisko update karna hai
        const index=this.students.findIndex((s)=>s.id===id);
       
        if(index === -1){
            throw new NotFoundException("Student not found");
        }

        //data being updated for that student 
        this.students[index]={
            id,
            ...data
        };

        // will show updated student as a response
        return this.students[index]

    }   

    //PATCH : PARTIALY UPDATE
    //partial ki whajah se we dont have to give all the required fields 
    patchStudent(id:number,data:Partial<{name:string,age:number}>){
        //pehle student ko find kkaro jisko update karna hai 
        const student=this.getStudentById(id)
        //object ki copy bana dega , jo naya data hoga usse change karke return krr dega
        //student object ki copy banadega with other partial data ko change krr dega
        Object.assign(student,data);
        return student;
    }

    //delete
    deleteStudent(id:number){
        
        const index=this.students.findIndex((s)=>s.id===id);

        if(index === -1){
            throw new NotFoundException("Student not found");
        }
        
        // splice will remove the elemet from the array
        
        // index se start karo , how many element to remove 
        
        //jo index match krr jaaye , sirf ussi element ko remove krr do 
        const deleted=this.students.splice(index,1)
        
        return {message:'student deleted',student:deleted[0]}

    }

}
