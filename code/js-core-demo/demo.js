let a = {
    name: 'lee',
    age: 18
}
let b = a;
console.log('a.name :>> ', a.name); // lee
b.name = 'tom'
console.log('a.name :>> ', a.name); // tom
console.log('b.name :>> ', b.name); // tom