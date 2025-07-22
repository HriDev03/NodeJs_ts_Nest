/*
//syncronous : Js goes form top to bottom 
console.log(" I ");
console.log(" eat ice cream ");
console.log(" with ");
console.log(" a");
console.log(" spoon");

//Async
/*

    //normal 
    function abcd(a,b,c,d){

    }

    //arrow
    let abcd=(a,b,c,d)=>{

    }

*/
/*
console.log(" I ");

//2 seconds : take this function at the side and after 2 secs make it back to call stack after all other executions are done
setTimeout(() => {
     console.log(" eat ice cream ");
},2000);

console.log(" with ");
console.log(" a");
console.log(" spoon");

//call backs 
/*
    calling a function inside function , creatin connection between functions
*/
/*
function one(call_two){
    console.log("Step 1 complete please call step two");
    call_two();//calling second function 
}

function two(){
    console.log("Step 2 called after 1");
}

one(two)
*/

// ice cream making using callback 
//order. fetch , start production , serve
// no order no production 
/*
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let order=(Fruit_name, call_Production)=>{
  
    setTimeout(() => {    
        console.log(`${stocks.Fruits[Fruit_name]} was selected `);
        // wont start the production untill the fruit was selected
        call_Production();
    },2000);

}

let production=()=>{
    
    setTimeout(()=>{
        
        console.log("Production has started");
        
        //cut the fruit itll take 2 seconds
        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
            
                setTimeout(()=>{
                    
                    console.log(" Machine Started ... ");
                
                    setTimeout(()=>{
                        console.log(` the ice-cream was place on  ${stocks.holder[0]}`);

                        setTimeout(()=>{
                            console.log(` ${stocks.toppings[0]} is added as topping`);
                        
                            setTimeout(()=>{
                                console.log("Ice cream served");
                            },1000)
                        
                        },3000)

                    },2000)
                
                },1000)
            
            },1000)

        },2000)

    },0) // pyramid of doom , callback hell 
}

order(0,production);


// solution to callback hell ( promisses )
//callbacks make relationships : parent , children , grandchildren

// Promise Cycle : A promise is made : that we will eventually serve you icecream 
// either fullfilled or rejected
//customer placed order : eiter it is resolved or rejected .then() .then() .finally()
//first do this then this then this

// first pending the reolve , rejected then finally
*/

/*
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open=true;

let order=(time,work)=>{
    return new Promise((res,rej)=>{
        if(is_shop_open){
            setTimeout(()=>{
                // if promise is sucessfull then run the work function 
                // resolve and also run the work funciton 
                res(work())
            },time)
        }else{
            rej("Our shop is closed")
        }
    })
}


// first part is resolve then return .... 
order(2000,()=>{
    console.log(`${stocks.Fruits[0]} was selected `);
    //when this promise is executed then 
})
.then(()=>{
    return order(0,()=>{console.log("Production started");})
})
.then(()=>{
    return order(2000,()=>{console.log("Add water and ice");})
})
.then(()=>{
    return order(2000,()=>{console.log("The fruit is chopped");})
})
.then(()=>{
    return order(1000,()=>{console.log("machine is started ");})
})
.then(()=>{
    return order(2000,()=>{console.log(`ice-cream is placed on ${stocks.holder[0]}`);})
})
.then(()=>{
    return order(3000,()=>{console.log(`${stocks.toppings[0]} is put on ice-cream`);})
})
.then(()=>{
    return order(2000,()=>{console.log("Ice cream is served now ");})
})
.catch((err)=>{
    console.log("some error occured",err);
})
.finally(()=>{
    console.log("Buy Lambo");
})
*/

/*
let order = ()=>{
    return new Promise((res,rej)=>{
        if(true){
            res()
        }else{
            rej()
        }
    })
}


// order()
// .then()
// .then()
// .then()
// .then()
// .then()
// .catch()
// .finally()



//async function will always return promises
async function order() {
    try {
        await abc;   
    }catch (error){
        console.log(" fake function dosent exist",error);
    }
    finally{
        console.log("this will always run ");
    }
}
//this is running because the catch block has handled it so the order function will return nothing hence undefined
order().then(()=>{
    console.log("completed execution ");
})

*/

// i am a chef and making icecream then realised to ask customer to ask for topping i will go outside kitchen to ask for it and then will return back 
/*let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};
*/
//let is_shop_open=true;

let toppings_choice=()=>{    
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(undefined)
            console.log("whick topping would you love to choose ?? ");
        },3000)
    })
}

async function kitchen(){
    //INSIDE KITCHEN WE ARE WORKING 
    console.log("A");
    console.log("B");
    console.log("C");
    //GO OUTSIDE TO ASK CUSTOMER WHAT TO HAVE , OTHER TASKS WOULD KEEP RUNNING
    await toppings_choice()
    console.log("D");
    console.log("E");

}

kitchen()
console.log("Doing the dishes");
console.log("Cleaning the table");
console.log("taking other orders");
 

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((res, rej) => {
        if (is_shop_open) {
            setTimeout(() => {
                res(work());
            }, time);
        } else {
            rej("Our shop is closed");
        }
    });
};

// 🍨 Our main async function
async function kitchen() {
    try {
        await order(2000, () => {
            console.log(`${stocks.Fruits[0]} was selected`);
        });

        await order(0, () => {
            console.log("Production started");
        });

        await order(2000, () => {
            console.log("Add water and ice");
        });

        await order(2000, () => {
            console.log("The fruit is chopped");
        });

        await order(1000, () => {
            console.log("Machine is started");
        });

        await order(2000, () => {
            console.log(`Ice cream is placed on ${stocks.holder[0]}`);
        });

        await order(3000, () => {
            console.log(`${stocks.toppings[0]} is put on ice cream`);
        });

        await order(2000, () => {
            console.log("Ice cream is served");
        });
    } catch (err) {
        console.log("Some error occurred:", err);
    } finally {
        console.log("Buy Lambo 🚗");
    }
}

// Call the async function
kitchen();
