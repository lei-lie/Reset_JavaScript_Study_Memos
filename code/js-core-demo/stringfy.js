let obj = {
    a: 2,
    c: 3,
    d: {
        f: 13,
        v: `ed`
    },
    fn: function() {},
    e: undefined,
    g: Symbol(1),
    t: new Date(),
    reg: /(1,9)/,
    f: NaN,
    i: Infinity
}
obj['target'] = obj
Object.defineProperty(obj, 'name', {
    value: '不可枚举属性',
    enumerable: false
})
let obj1 = JSON.parse(JSON.stringify(obj))
obj1.c = 4;
console.log('obj :>> ', obj);
console.log('obj1 :>> ', obj1);