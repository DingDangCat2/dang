/* var a=[1,5,10];
a.sort(function(a,b){return b-a;});
console.log(a)//-->1,10, */
/* 
var a=["asd","asdwqe","s"];
var b=a.concat("qwe",["dwq","trh"]);
for (var i=0;i<b.length;i++)
console.log(b[i]);
console.log(b.length) */

/* var a=[1,2,3,4,5,6,7,8,9];
a.splice(0,2,"g","h");
console.log(a); */

/* var a=[1,2,3,4,5,6,7,18,9];
var c=a.filter(function(index,value){if(index<10){
    return true;
}})
console.log(c) */

/* var a=[1,2,3,4];
var c=a.reduce(function(a,b,c,d){return a+b+":"+c+d;})
console.log(c) */
/* a 表示上一次调用回调时的返回值，或者初始值 init;
b 表示当前正在处理的数组元素；
c 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
d表示源数组 */