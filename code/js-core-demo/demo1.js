let a = {
        name: 'lee',
        age: 18
    }
    // 参数obj是a对象在堆中的内存地址值
function changeA(obj) {
    obj.age = 14;
    obj = {
            name: 'lacy',
            age: 20
        }
        // 返回一个新对象
    return obj;
}
let b = changeA(a);
console.log('a.name :>> ', a.name); // lee
console.log('b.age :>> ', b.age); // 20
console.log('a.age :>> ', a.age); // 14