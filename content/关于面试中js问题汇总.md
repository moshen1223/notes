1、js中的伪数组(不具有数组常用方法)      
&emsp;1)arguments是一个带有length成员属性的对象。    
&emsp;2)调用getElementsByTagName,document.childNodes之类返回的NodeList对象。     
&emsp;伪数组可以通过Array.prototype.slice()转换为真正的数组对象。    

2、js中五中基本数据类型： Number、String、Boolean、null、undefined。    
&emsp;&ensp;其中null和undefined的区别？    
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

3、cookie/sessionStorage/localStorage区别及用法。    
&emsp;cookie：     
&emsp;&ensp;生命期：可设置失效时间，默认是关闭浏览器后失效    
&emsp;&ensp;大小：4K左右      
&emsp;&ensp;与服务器端通信：每次都会携带在http头中       
&emsp;&ensp;使用方法：         
&emsp;&emsp;设置 document.cookie = "key=value;key=value"  使用escape()编码，使用unescape()解码;    
&emsp;&emsp;可设置cookie的生存期： document.cookie = "key=value; expiress=GMT_String";    
&emsp;&emsp;获取cookie  document.cookie 得到该域名下的所有cookie需要开发人员自己拆分;    
&emsp;&emsp;删除cookie  将cookie的生存期设置为过去时间即可；    
&emsp;&emsp;指定可访问的路径：document.cookie="key=value; expiress=GMT_string; path=/";    
&emsp;&emsp;指定可访问的主机名：document.cookie="key=value; domain=cookieDomain";    
&emsp;localStorage：      
&emsp;&ensp;生命期：除非被清楚，否则永远保存    
&emsp;&ensp;大小：5M左右    
&emsp;&ensp;与服务器端通信：仅在客户端中保存，不参与和服务器的通信    
&emsp;&ensp;自身带有一些方法：    
&emsp;&emsp;添加键值对： localStorage.setItem(key,val);    
&emsp;&emsp;获取键值： localStorage.getItem(key);    
&emsp;&emsp;删除键值对： localStorage.removeItem(key);    
&emsp;&emsp;清除所有键值对： localStorage.clear();    
&emsp;&emsp;获取localstorage的属性名称：localStorage.key(index);    
&emsp;&emsp;获取localstorage中保存的键值对的数量： localStorage.length;    
&emsp;sessionStorage：    
&emsp;&ensp;生命期：仅在当前会话下有效，关闭页面或浏览器后被清楚     
&emsp;&ensp;大小：5M左右     
&emsp;&ensp;与服务器端通信：仅在客户端中保存，不参与和服务器的通信     


