// 使用instanceof判断数据类型
function People() {}
let people = new People();
console.log('people instanceof People :>> ', people instanceof People);

let str = new String('Tom')
console.log('str instanceof String :>> ', str instanceof String);

let obj = new Object();
console.log('obj instanceof Object :>> ', obj instanceof Object);

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
console.log('new Number(123),Number :>> ', new Number(123), Number);