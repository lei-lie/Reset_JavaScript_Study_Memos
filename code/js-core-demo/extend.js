let obj = {
    name: '扩展运算符',
    time: new Date().toLocaleTimeString(),
    symbol: Symbol(12)
}
Object.defineProperty(obj, 'update', {
    value: '不可枚举属性',
    enumerable: false
})
console.log('obj :>> ', obj);
let obj1 = {...obj }
console.log('obj1 :>> ', obj1);