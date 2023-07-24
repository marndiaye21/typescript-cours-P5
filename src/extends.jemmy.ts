// function getAmountNumber<T>(val : T) : T
// {
//     return val
// } 

// let nVal = getAmountNumber<string>('4');
// console.log(nVal);
// let nV = getAmountNumber<number>(4);

function getArrayG<T extends number|string>(tab : T) : T
{
    return tab;
}

let tabl : number  = 3;
let val : string = '3'
console.log(getArrayG(val))