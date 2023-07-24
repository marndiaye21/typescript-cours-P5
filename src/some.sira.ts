const nbres = [1,10,3,1]
// const results = nbres.some((nbre)=>{
//   return nbre%2===0
// })
// console.log(results);

function oullcoding(oulls,cond) {
  let ok = false
  oulls.forEach(oull => {
    if (cond(oull)) {
      ok=true
    }
  });
  return ok
}

console.log(oullcoding(nbres, nbre=>nbre===10));
