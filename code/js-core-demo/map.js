function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + 'M';
}
global.gc();
console.log('初始内存 :>> ', usageSize());

let arr = new Array(10 * 1024 * 1024);
const map = new Map();
map.set(arr, 1)
global.gc();
console.log('占用内容 :>> ', usageSize());
arr = null;
global.gc();
console.log('最终内存 :>> ', usageSize());