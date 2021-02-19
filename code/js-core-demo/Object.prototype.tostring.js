// 通过Object.prototype.toString判断数据类型
console.log('Object.prototype.toString({}) :>> ', Object.prototype.toString({})); // [object Object]
console.log('Object.prototype.toString.call({}) :>> ', Object.prototype.toString.call({}));
console.log('Object.prototype.toString.call(123) :>> ', Object.prototype.toString.call(123));
console.log('Object.prototype.toString.call("dsffdg") :>> ', Object.prototype.toString.call("dsffdg"));
console.log('Object.prototype.toString.call(true) :>> ', Object.prototype.toString.call(true));
console.log('Object.prototype.toString.call([]) :>> ', Object.prototype.toString.call([]));
console.log('Object.prototype.toString.call(null) :>> ', Object.prototype.toString.call(null));
console.log('Object.prototype.toString.call(/123g/) :>> ', Object.prototype.toString.call(/123/g));
console.log('Object.prototype.toString.call(undefined) :>> ', Object.prototype.toString.call(undefined));
console.log('Object.prototype.toString.call(new Date()) :>> ', Object.prototype.toString.call(new Date()));
console.log('Object.prototype.toString.call(Symbol()) :>> ', Object.prototype.toString.call(Symbol()));
console.log('Object.prototype.toString.call(function() {}) :>> ', Object.prototype.toString.call(function() {}));