let newObj = {};
let oldObj = {
    name: 'Object.assign实现浅拷贝',
    o: {
        name: '子属性'
    },
    symbol: Symbol('symbol对象')
}
Object.defineProperty(oldObj, 'innumerable', {
    value: '不可枚举属性',
    enumerable: false
})
let obj1 = Object.assign(newObj, oldObj)
console.log('obj1 :>> ', obj1);
obj1.o.name = '修改子对象的属性'
console.log('oldObj :>> ', oldObj);
console.log('obj1 :>> ', obj1);