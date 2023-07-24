//la surcharge des methodes
//----------implementation
function concatener(a, b) {
    return a + b;
}
console.log(concatener(2, 3));
console.log(concatener("hello", "world"));
// console.log(concatener("hello", 2));
//meme fonction mais cote javascript 
function concatener2(a, b) {
    if (typeof a == "string" && typeof b == "string") {
        return a + " " + b;
    }
    else if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else {
        throw new Error("aucune signature ne correspond");
    }
}
console.log(concatener2("hello", "world"));
console.log(concatener2(1, 9));
console.log(concatener2("hello", 2));
