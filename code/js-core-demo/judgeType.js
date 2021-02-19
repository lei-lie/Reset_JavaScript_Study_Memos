function getType(obj) {
    let type = typeof obj;
    // 如果是基础类型直接返回
    if (type !== object) {
        return type
    }
    // null和引用类型
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}