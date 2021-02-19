/**
 * @description
 * @author xialei
 * @date 19/02/2021
 * @param {*} target
 */
function deepClone(target, hash = new WeakMap()) {
    // 日期对象直接返回一个新的日期对象
    if (target.constructor === Date) {
        return new Date(target)
    }
    // 正则对象直接返回一个新的正则对象
    if (target.constructor === RegExp) {
        return new RegExp(target)
    }
    //如果循环引用了就用 weakMap 来解决
    if (hash.has(target)) {
        return hash.get(target)
    }
    // 获取传入对象的所有键
    let allDesc = Object.getOwnPropertyDescriptors(target);
    //遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(target), allDesc)
        //继承原型链
    hash.set(target, cloneObj)
    for (let key of Reflect.ownKeys(target)) {
        cloneObj[key] = (isComplexDataType(target[key]) && typeof target[key] !== 'function') ? deepClone(target[key], hash) : target[key]
    }
    return cloneObj
}

/**
 * @description 判断是否是引用类型的数据
 * @author xialei
 * @date 19/02/2021
 * @param {*} target 用于判断的数据
 */
const isComplexDataType = (target) => {
    let flag = (typeof target === 'object' || typeof target === 'function') && (target !== null);
    return flag;
}

// 下面是验证代码
let obj = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: { name: '我是一个对象', id: 1 },
    arr: [0, 1, 2],
    func: function() { console.log('我是一个函数') },
    date: new Date(0),
    reg: new RegExp('/我是一个正则/ig'),
    [Symbol('1')]: 1,
};
Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
    value: '不可枚举属性'
});
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj // 设置loop成循环引用的属性
let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)