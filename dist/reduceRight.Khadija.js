const num = [1, 11, 6];
const som = num.reduceRight((accumulateur, currentValue) => {
    return accumulateur - currentValue;
}, 2);
console.log(som);
