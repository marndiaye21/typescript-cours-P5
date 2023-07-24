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

enum Grade {
    Docteur,
    Masteur,
    Ingenieur
}

type Professeur = {
    id: number | string;
    firstname: string;
    lastname: string;
    grade: Grade
}

enum Bourse {
    Entiere = 40000,
    Demi = 20000
}

type Etudiant = {
    id: number | string;
    firstname: string;
    lastname: string;
    bourse: Bourse
}

let p1 : Professeur | Etudiant = {
    id: 1,
    firstname: "Nabou",
    lastname: "Dash",
    grade: Grade.Docteur
}

let p2 : Professeur & Etudiant = {
    id: 1,
    firstname: "Fadal",
    lastname: "Ndiaye",
    grade: Grade.Ingenieur,
    bourse: Bourse.Demi
}

