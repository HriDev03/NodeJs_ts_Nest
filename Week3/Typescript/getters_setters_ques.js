"use strict";
// bank account problem
/*
class BackAccount{
    private _balance:number=0;

    public get balance():number{
        return(this._balance);
    }
    // if balance less than 0 log an error else set the balance
    public set balance(money:number){
        if(money<0){
            throw new Error("Earn money money money ");
        }
        this._balance=money;

    }
}

const acc=new BackAccount();
//getters and setters are called as a property not a method
acc.balance=100000000;

*/
// TEMP CONVERTER APP
class Temp {
    constructor() {
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(temp) {
        this._celsius = temp;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newTemp) {
        this._celsius = ((newTemp - 32) * 5) / 9;
    }
}
const temp = new Temp();
temp.celsius = 25;
console.log(temp.fahrenheit);
