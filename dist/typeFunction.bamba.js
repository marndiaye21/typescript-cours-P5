//type Function
let tableaux = [1, 2, 3, 4];
const addition = (a, b) => a + b;
const soustraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
function effectuerOperation(operation, a, b) {
    return operation(a, b);
}
console.log(effectuerOperation(multiplication, 2, 4));
