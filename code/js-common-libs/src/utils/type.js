// 判断数据类型

function getType(obj) {
    let type = typeof obj;
    // 如果是基础类型直接返回
    if (type !== object) {
        return type
    }
    // null和引用类型
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}

/**
 * @description 自己实现instanceof
 */

function myInstanceof(left, right) {
    // 先通过typeof判断基础类型，如果时基础类型则直接返回false
    if (typeof left !== object || left === null) {
        return false;
    }
    // 获取参数的原型对象
    let proto = Object.getPrototypeOf(left);

    while (true) {
        if (proto === null) {
            return false
        }
        // 找到相同的原型对象，返回true
        if (proto === right.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto);
    }
}