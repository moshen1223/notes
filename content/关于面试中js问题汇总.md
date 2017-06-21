1、js中的伪数组(不具有数组常用方法)      
&emsp;1)arguments是一个带有length成员属性的对象。    
&emsp;2)调用getElementsByTagName,document.childNodes之类返回的NodeList对象。     
&emsp;伪数组可以通过Array.prototype.slice()转换为真正的数组对象。    

2、js中五中基本数据类型： Number、String、Boolean、null、undefined。    
&emsp;其中null和undefined的区别？    
&emsp;&ensp;1) 相似性：    
&emsp;&emsp;在if判断中都被转换为 false     
&emsp;&emsp;console.log(null == undefined)  //true     
&emsp;&ensp;2) 差异：    
&emsp;&emsp;null表示一个“无”的对象,转为数值：Number(null) //0      
&emsp;&emsp;undefined表示一个“无”的原始值，转为数值：Number(undefined) //NaN     
&emsp;&emsp;typeof null   // "object"    
&emsp;&emsp;typeof undefined  // "undefined"    
&emsp;&ensp;3) 使用方面：     
&emsp;&emsp;null表示“没有对象”，此处不应该有值。     
&emsp;&emsp;&ensp;(1) 作为函数的参数，表示该函数的参数不是对象。    
&emsp;&emsp;&ensp;(2) 作为对象原型链的终点。     
&emsp;&emsp;&ensp;eg: Object.getPrototypeof(Object.prototype) // null      
&emsp;&emsp;undefined表示“缺少值”,表示此处应该有一个值，但是没有定义。     
&emsp;&emsp;&ensp;(1) 变量被声明了，但没有赋值时，就等于undefined。    
&emsp;&emsp;&ensp;(2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。    
&emsp;&emsp;&ensp;(3) 对象没有赋值的属性，该属性的值为undefined。    
&emsp;&emsp;&ensp;(4) 函数没有返回值时，默认返回undefined。     

