const tablea = [12, 56, 16, 0, 1, 100];
//console.log(tablea.sort());
//console.log(tablea.sort((a,b)=>(b - a)));
//const t = ["sy","fatiu","aba","Aby","Aba","abA"];
//console.log(t.sort((a,b)=>(a > b ? -1 : 1)));
const famille = [
    {
        nom: "Ndiaye",
        noteExamen: 5,
        noteDevoir: 20
    },
    {
        nom: "Diop",
        noteExamen: 10,
        noteDevoir: 10
    }
];
// console.log(famille.sort((a,b)=>(((a.noteExamen*2)+a.noteDevoir)/3 > ((b.noteExamen*2) + b.noteDevoir)/3 ? -1 : 1)));
console.log(famille.sort((a, b) => {
    let moyenneA = ((a.noteExamen * 2) + a.noteDevoir) / 3;
    let moyenneB = ((b.noteExamen * 2) + b.noteDevoir) / 3;
    if (moyenneA == moyenneB) {
        if (a.noteExamen > b.noteExamen) {
            return -1;
        }
        return 1;
    }
    if ((moyenneA > moyenneB)) {
        return -1;
    }
    return 1;
}));
