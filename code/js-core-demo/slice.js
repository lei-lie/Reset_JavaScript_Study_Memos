let arr = [1, 2, 4, { a: 343 }]
console.log('arr :>> ', arr);
let arr1 = arr.slice()
arr1[3].a = '4r534'
console.log('arr1 :>> ', arr1);
console.log('arr :>> ', arr);