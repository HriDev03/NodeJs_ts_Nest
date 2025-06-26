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
class Temp{
    private _celsius:number=0;

    public get celsius():number{
        return this._celsius
    }

    public set celsius(temp:number){
        this._celsius=temp;
    }

    public get  fahrenheit():number{
        return (this._celsius*9)/5+32;
    }

    
    public set  fahrenheit(newTemp:number){
      this._celsius=((newTemp-32)*5)/9;
    }

}

const temp=new Temp();
temp.celsius=25;
console.log(temp.fahrenheit)