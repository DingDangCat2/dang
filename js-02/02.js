/* var o=new Object();
o.name="xjf";
console.log(o.hasOwnProperty(constructor));
console.log(o.constructor); */
/* 
function a(name){
    this.name="xjf";
}
var b=new a();
console.log(b.isPrototypeOf(Object)); */
/* var p = {x:1};//定义一个原型对象
var o = Object.create(p);//使用这个原型创建一个对象
p.isPrototypeOf(o);//=>true：o继承p
console.log(Object.prototype.isPrototypeOf(p));//=> true p继承自Object.prototype */

/* var a=new Object();
a.an="x";
console.log(a.propertyIsEnumerable("an"));   */

/* var obj = {a:"a"};
const arr = [];
obj.name= 'weiqinl';
arr[0] = 2018;
console.log(obj.propertyIsEnumerable('a'));  // true
console.log(arr.propertyIsEnumerable(0)); // true
console.log(arr.propertyIsEnumerable('length')); // false */

/* var a=new Object();
a.name="xjf";
console.log(a.toLocaleString()); */

/* const num = 2333333;                                                      
console.log(num.toLocaleString('zh',{style:'decimal'}));  //2,333,333              
console.log(num.toLocaleString('zh',{style:'percent'}));   // 233,333,300%                  
console.log(num.toLocaleString('zh',{style:'currency' , currency:'CNY' })); */

/* const a=123456789;
console.log(a.toLocaleString('zh',{style:'decimal'}));//默认是decimal;纯数字三位一划分。
console.log(a.toLocaleString('zh',{style:'percent'}));//百分比
console.log(a.toLocaleString('zh',{style:"currency",currency:'CNY'}));//货币，给出style属性和percent属性。 */

/* console.log(true.toString());
console.log(true.valueOf()); */

/* var a =545;
console.log(a.toString());
console.log(a.valueOf()); */

/* var a ="i love you";
console.log(a.toString());
console.log(a.valueOf()); */
/* console.log(Number.valueOf());
console.log(Number.toString()); */

/* console.log({a:"132asd"}.valueOf());
console.log({a:"123asd"}.toString()); */
/* function test(){
    alert(1);//test
}
console.log(test.toString());
console.log(Function.toString());
console.log(test.valueOf());
console.log(Function.valueOf()); */
/* console.log([1,2,3].valueOf());//[]
console.log([1,2,3].valueOf());//[1]
console.log([1,2,3].valueOf());//[1,2,3,4]
console.log(Array.valueOf());//Array() { [native code] } */
/* console.log([1,2,3].toString());
console.log(Array.toString()); */
