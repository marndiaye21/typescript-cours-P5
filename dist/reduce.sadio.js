const moyenne = [13, 14, 12];
let moyclasse = moyenne.reduce((acc, valeurcr) => {
    return acc + valeurcr;
});
let moyenneclasse = moyclasse / moyenne.length;
console.log(moyenneclasse);
