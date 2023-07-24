//la surcharge des methodes

//-----------declaration
function concatener(x:number,y:number):number;
function concatener(a:string,b:string):string;
function concatener(a:number,b:string):string;
//----------implementation
function concatener(a:any, b:any):any{
    return a + b;
}
console.log(concatener(2,3));
console.log(concatener("hello","world"));


// console.log(concatener("hello", 2));


//meme fonction mais cote javascript 

function concatener2(a:any,b:any){
    if(typeof a == "string" && typeof b == "string"){
        return a + " " + b;
    }
    else if(typeof a == "number" && typeof b == "number"){
        return a + b;
    }
    else{
        throw new Error("aucune signature ne correspond")
    }
}
console.log(concatener2("hello","world"));
console.log(concatener2(1,9));
console.log(concatener2("hello", 2));


 
