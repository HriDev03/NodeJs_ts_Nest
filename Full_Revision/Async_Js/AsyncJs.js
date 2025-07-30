/*
    Async Js 

    A function that is passed to another funtion as an 
    argument is called a callback

    Agr koi kaam kuch time le raha hai then we 
    dont need to wait for it , we can use async programming there
        


*/  
console.log("1")
console.log("2")
//set time out ke andar async tarike se chalta hai 
setTimeout(()=>{
    console.log("Hello");
},4000)

console.log("3")
console.log("4")

//these statements wont want for set timeout to complete as there is a callback function
//this is async programming
/* 
    1
    2
    3
    4
    hello
*/

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,someCallback){
    someCallback(a,b)
}

calculator(1,2,sum())

// callbacks are async in set TimeOut
//callback hell : nested callbacks 

function getData(dataId,getNextData){
    
    setTimeout(()=>{
        console.log("data : ",dataId);
        if(getNextData){
            getNextData()
        }
    },2000)
}


//callback hell : Pyramid of doom 
//pehle data 1 , fir data 2 < fir data 3 
getData(1,()=>{
    console.log("getting data 2 .....");
    getData(2,()=>{
        console.log("getting data 3 .....");
        getData(3,()=>{
            console.log("getting data 4 .....");
            getData(4)
        })
    })
})

//ho to solve callback hell using promises
// trust : humme ek promise mill gaya then there  are to cases either resolve or reject

// promise (unfulfilled)---------->fulfilled(resoved, reject)
//eventual completion or end of task
// pending------->fulfilled---->resolved/rejected


let promise=new Promise((resolve,reject)=>{
    // resolve(kaam done sucessfully)
    //reject(kaam ho gaya but error)
    console.log("I am a promise");
    resolve(123);
    resolve("suceess");
    reject("Some error occurred")
})

// promise : pending , fulfilled , rejected
//resolve and reject are callbacks provided by js


//api jo data de raha hai 
function getDataa(dataId,getNextDataa){
    //i promise you that after 2 seconds you will get your data
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data : ",dataId);
            resolve("sucess")
            if(getNextData){
                getNextData()
            }
        },2000)
    })
}

//how to use a promise
//by using .then() or .catch()

let promisee=getData();
promisee.then((res)=>{
    console.log("Promisee fulfilled",res);
}).catch((err)=>{
    console.log("rejected ",err);
})

//Promise chaining
// chaining of promises for multiple steps one after another   

function asyncFunc(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			console.log("some data 1");
			res("sucess");
		},4000)
	})
}

function asyncFunc2(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			console.log("some data 2");
			res("sucess");
		},4000)
	})
}

// WE NEED TO FIRST FETCH DATA 1 THEN DATA 2
//PEHLE USERNAME THEN PASSWORD
console.log("Fetching data 1 ....");

// Way 1 : 
let p1=asyncFunc();

p1.then((res)=>{
    // p1 resolved here 
    console.log(res)
	console.log("Fetching data 2 ....");
	let p2=asyncFunc2();
	p2.then((res)=>{
		console.log(res)
	});
});

//Another Way : 
// PROMISE CHAINING : Ek then ke saath dusra then chain krr diya
asyncFunc.then((res)=>{
	console.log(res)
	console.log("Fetching data 2 ....");
	asyncFunc2().then((res)=>{
		console.log(res)
	});
});













