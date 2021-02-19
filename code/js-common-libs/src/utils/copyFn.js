/**
 * @description 浅拷贝 & 深拷贝
 * @author xialei
 * @date 18/02/2021
 */


/**
 * @description 浅拷贝的实现
 * @author xialei
 * @date 18/02/2021
 * @param {*} target 拷贝的数据
 */
function shallowClone(target) {
    // 拷贝的是引用类型的数据
    if (typeof target === 'object' && target !== 'null') {
        // 判断是数组还是object
        const cloneTarget = Array.isArray(target) ? [] : {};
        // 遍历对象，将对象属性赋值给新对象
        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {
                cloneTarget[key] = target[key];
            }
        }
        return cloneTarget

    } else {
        // 基本数据类型，直接返回
        return target;
    }
}

/**
 * @description 深拷贝
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