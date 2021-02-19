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

console.log('shallowClone(123) :>> ', shallowClone(123));
console.log('shallowClone({a:1,b:{c:1}}) :>> ', shallowClone({ a: 1, b: { c: 1 } }));
console.log('shallowClone([1,23,4]) :>> ', shallowClone([1, 23, 4]));