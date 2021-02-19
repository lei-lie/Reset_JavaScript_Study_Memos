/**
 * @description 深拷贝- 递归版本
 * @author xialei
 * @date 18/02/2021
 * @param {*} target 进行深拷贝的数据
 * @return {*}  返回深拷贝处理后的数据
 */
function deepClone(target) {
    // 判断数据类型
    if (typeof target === 'object' && target !== 'null') {
        // 引用类型，进行遍历
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            if (Object.hasOwnProperty.call(target, key)) {
                const element = target[key];
                // 如果对应的key值是引用类型，则进行递归
                if (typeof element === 'object' && element !== 'null') {
                    cloneTarget[key] = deepClone(element);
                } else {
                    // 基础类型则进行基本的值复制操作
                    cloneTarget[key] = element;
                }

            }
        }
        return cloneTarget;
    } else {
        // 基本数据类型，直接返回
        return target;
    }
}

let obj = {
    a: 1,
    v: 2,
    f: {
        d: 3,
        f: {
            e: 3
        }
    },
    reg: /^(0,9)/,
    g: null,
    symbol: Symbol(1),
    i: Infinity,
    fn: function() {},
    u: undefined,
    t: new Date(),
    a: [1, 2, 4],
    nan: NaN
}
let obj1 = deepClone(obj);
obj1.f.d = 45

console.log('obj :>> ', obj);
console.log('obj1 :>> ', obj1);

let arr = []