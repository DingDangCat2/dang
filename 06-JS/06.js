/* function a(b,c){
    return b+c;
}
function d(e,f){
    return a.apply(this,arguments)
}
console.log(d(1,2)); */

/* var a=1;
var b=a.toString()
console.log(b)
console.log(typeof b) */

/* var a="sadasd retg erfg";
console.log(a.charCodeAt(10)); */
/* 
var a ="aaa";
var b=a.concat("寅寅寅");
console.log(b); */
/* var a ="hello world";
console.log(a.slice(3));
console.log(a.slice(2,5))
console.log(a.substr(3))
console.log(a.substr(2,5))
console.log(a.substring(3));
console.log(a.substring(2,5)); */
/* 
var a ="hello world";
console.log(a.slice(-3));
console.log(a.slice(2,-5))
console.log(a.substr(-3))
console.log(a.substr(-2,-5))
console.log(a.substring(-3));
console.log(a.substring(-2,5)); */

/* var atext="abc";
var pattern=/.bc/gi;
var res=atext.match(pattern);
console.log(res[1]); */

/* var a="abc,ebc,fbc";
var c=a.replace("bc","xxxxx")
var b=a.replace(/bc/gi,"xxxx")
console.log(c);
console.log(b); */

var b="abcde edcba";
var c=b.replace(/b/gi,function(patterns,index,origin){
    return patterns+index;
});
console.log(c)
console.log(b.match(/.b/gi));