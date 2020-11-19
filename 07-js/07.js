/* var uri="www.baidu.com?name=xjf & p assw or d=123456";
var b=encodeURI(uri);
console.log(b);
var c=encodeURIComponent(uri)
console.log(decodeURI(c))
console.log(decodeURIComponent(c)); */
/* var array=[0,1,2,3,4,85,46,4,64,6] 
console.log(Math.min.apply(Math,array)) */
/* 
var ob=new Object();
ob.name="xjf";
Object.defineProperty(ob,"name",{configurable:true,value:"yp"})
console.log(ob.name)
  */
/* 
  var book={};
  Object.defineProperties(book,{year:{writable:true,value:2014},month:{writable:false,value:12}})

  book.month=13;
  book.year=123;
  console.log(book.year);
  console.log(book.month);
var as=Object.getOwnPropertyDescriptor(book,"year")
console.log(as) */
/* 
 function ob(name,sex){
    var o=new Object();
    o.name=name;
    o.sex=sex,
    o.sayName=function(){
        alert(this.name);
    }
    return o;
    }
    var p1=ob("xs",1)
    var p2=ob("ys",2)
    console.log(p1.name)
    console.log( p2 instanceof Object)  */

   /*  var a=new Object();
    a.name="xjf";

    console.log(a instanceof Object) */

 /*    function ob(name,age){
        this.name=name;
        this.age=age;
        this.say=function(){
            alert(this.name)
        }
    }
    var p1=new ob("xjf",12);
    console.log(p1);
    console.log(p1 instanceof ob); */

/*     function ob(){

    }
    ob.prototype.name="xxj";
    ob.prototype.sex="nan"; 
    ob.prototype.say=function(){
        return this.name
    }
    
    var p1=new ob()
    console.log(p1.name);
    console.log(p1 instanceof ob); 
    console.log(p1.say())
    console.log(Object.getPrototypeOf(ob)) */
/*     console.log(Object.getPrototypeOf(p1)); */
/* function ob(){

}
ob.prototype.name="xjf";
ob.prototype.age="12";
ob.prototype.say=function(){
    console.log(this.name);
}
var p1=new ob();
p1.sex="nan";
p1.address="chengdu";
var p2=new ob();
console.log(p1.hasOwnProperty("constructor"));
console.log("constructor" in  p1)

/* for( var s in p1){
    console.log(s)
}
 */
/* console.log(Object.keys(ob.prototype)) */ 

/* function ob (){}
ob.prototype.name="xx";
ob.prototype.say=function(){
    console.log(); */
}//第一种写法只是在prototype对象中添加了name,say属性而已，此时prototyp的constructor指向ob.
/* function ob (){}
ob.prototype={
    name:"xx",
    age:"12",
    say:function(){
        console.log()
    }
} */
//第二种写法本质上重写了prototype对象。此时的constructor已经不再指向ob.
