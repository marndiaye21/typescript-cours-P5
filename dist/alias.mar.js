// type Sex = 'M' | 'F' | 0 | 1;
// type Eleve = {
//     firstname: string;
//     lastname: string;
//     sex: Sex;
// }
// let eleve1 : Eleve;
// let eleve2 : Eleve;
// eleve1 = {
//     firstname: "Abdou",
//     lastname: "Boye",
//     sex: "M"
// }
// function afficherEleve(eleve: Eleve) {
//     console.log(eleve.firstname + " " + eleve.lastname + ": Sex: " + eleve.sex);
// }
// afficherEleve({firstname: "Moustapha", lastname: "Mbaye", sex: "M"})
// type Personne = {
//     id: number | string;
//     firstname: string;
//     lastname: string;
// }
// type Etudiant = Personne & {
//     bourse : number;
// }
// const etudiant : Etudiant = {
//     id: 1,
//     firstname:"Abdou",
//     lastname: "Boye",
//     bourse: 10000000
// }
// console.log(etudiant);
var Grade;
(function (Grade) {
    Grade[Grade["Docteur"] = 0] = "Docteur";
    Grade[Grade["Masteur"] = 1] = "Masteur";
    Grade[Grade["Ingenieur"] = 2] = "Ingenieur";
})(Grade || (Grade = {}));
var Bourse;
(function (Bourse) {
    Bourse[Bourse["Entiere"] = 40000] = "Entiere";
    Bourse[Bourse["Demi"] = 20000] = "Demi";
})(Bourse || (Bourse = {}));
let p1 = {
    id: 1,
    firstname: "Nabou",
    lastname: "Dash",
    grade: Grade.Docteur
};
let p2 = {
    id: 1,
    firstname: "Fadal",
    lastname: "Ndiaye",
    grade: Grade.Ingenieur,
    bourse: Bourse.Demi
};
