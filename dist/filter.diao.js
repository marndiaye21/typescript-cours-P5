const persons = [
    {
        nom: "Diouf",
        age: 14
    },
    {
        nom: "Fall",
        age: 20
    },
    {
        nom: "Sarr",
        age: 8
    }
];
const result = persons.filter((p, i, per) => {
    console.log(per, i);
    return p.age > 18;
});
console.log(result);
