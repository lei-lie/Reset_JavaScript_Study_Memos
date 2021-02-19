console.log(' null == null :>> ', null == null);
console.log(' null == undefined :>> ', null == undefined);
console.log(' undefined == undefined :>> ', undefined == undefined);
console.log(' undefined == null :>> ', undefined == null);
console.log('Symbol(1)== 1 :>> ', Symbol(1) == 1);
console.log('"1" == 1 :>> ', "1" == 1);
console.log('true == 1 :>> ', true == 1);
console.log('false == 0 :>> ', false == 0);
var a = { 
    value: 0,
     valueOf: function() {   this.value++;   return this.value;  }
};
console.log('a == 1 && a == 2 && a ==3 :>', a == 1 && a == 2 && a == 3);

var obj = {
    value: 1,
    valueOf() {
        return 2;
    },
    toString() {
        return '3'
    },
    [Symbol.toPrimitive]() {
        return 4
    }
}
console.log(obj + 1);
console.log('10 + {} :>> ', 10 + {});
console.log('[1,2,null,undefined]+10 :>> ', [1, 2, null, undefined] + 10);