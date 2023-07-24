// function respectLaCondition(tableau,condition)
// {
//   for (let i = 0; i < tableau.length; i++) {
//       if (!condition(tableau[i])) {
//         return false
//       }
//   }
//   return true
// }

// function estPair(nombre)
// {
//   return nombre % 2===0
// }
// const tab = [12,12,11]
// console.log(respectLaCondition(tab,estPair))
const tab = [12,12,2]
const everyTest = tab.every((nombre=>{
  return nombre % 2 ===0
}))
console.log(everyTest);
