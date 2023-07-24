//strings
let machaine :string = "hello;word"
let machaine2: string = "hello"
//console.log(machaine.length)


//les types union
let union :string | number;
union = 12
union = "hello"

type admin = {
    id: number,
    pseudo: string
}
type user = {
    id: number,
    nom: string
}
let adminuser: user | admin = {
    id: 1,
    nom: "monnom",
    pseudo: "monpseudo",
}
let u1:user |number = undefined ;
u1 = {
    id:2,
    nom: "ok"
}
u1 = 3
console.log(u1);






