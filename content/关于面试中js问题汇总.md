1、js中的伪数组(不具有数组常用方法)      
&emsp;1)arguments是一个带有length成员属性的对象。    
&emsp;2)调用getElementsByTagName,document.childNodes之类返回的NodeList对象。     
&emsp;伪数组可以通过Array.prototype.slice()转换为真正的数组对象。
