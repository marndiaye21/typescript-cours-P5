//type Function
let tableaux = [1,2,3,4];
// function every1 (tab: number[], parite:Function){
//     for (const element of tab) {
//         if(!parite(element)){
//             return false
//         }
//     }
//     return true;
// }

// let operation:Function= function(a:number, b: number):number{
//     return a + b
// }
// console.log(operation(3,4));
// operation = function(a:string, b: string):string{
//     return a + b
// }
// console.log(operation("hello", "world"));
// operation = function(b: number):boolean{
//     return b % 2 == 0;
// }
// console.log(operation(4));


//en utilisant les types

//declaration du type
type Operation = (a:number, b: number) => number;

const addition: Operation = (a,b) => a + b;
const soustraction:Operation = (a,b) => a - b;
const multiplication:Operation = (a,b) => a * b;
const division:Operation = (a,b) => a / b;
 
function effectuerOperation(operation:Operation, a: number, b:number):number{
    return operation(a,b);
}
console.log(effectuerOperation(multiplication, 2, 4));









