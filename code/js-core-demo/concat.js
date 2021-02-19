let arr = [1, true, 'dfdf', {
    a: 1,
    b: 2,
    c: {
        name: 'inner'
    },

}, Symbol(1)]

console.log('arr :>> ', arr);
let arr1 = arr.concat([]);
console.log('arr1 :>> ', arr1);
arr1[3].c.name = "inner+1"
console.log('arr :>> ', arr);
console.log('arr1 :>> ', arr1);