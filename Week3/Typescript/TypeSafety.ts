// WHAT IS TYPE SAFETY AND TYPE NARROWING 

// type of narrows down the type of value of a variable based on its runtime value

// it ensures we only work on correct type under certain circumstances
const favHobbies=(hobby:string|string[])=>{
    // agar type bject ho toh map laga 
    // type guard                   type guard
    if(typeof hobby==="object" && Array.isArray(hobby)){
        return hobby.map(():=>{})
    }else{

    }
}