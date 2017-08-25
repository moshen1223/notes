1、js中的伪数组(不具有数组常用方法)      
&emsp;1) arguments是一个带有length成员属性的对象。    
&emsp;2) 调用getElementsByTagName,document.childNodes之类返回的NodeList对象。     
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
&emsp;&emsp;可设置cookie的生存期： document.cookie = "key=value; expires=GMT_String";    
&emsp;&emsp;获取cookie  document.cookie 得到该域名下的所有cookie需要开发人员自己拆分;    
&emsp;&emsp;删除cookie  将cookie的生存期设置为过去时间即可；    
&emsp;&emsp;指定可访问的路径：document.cookie="key=value; expires=GMT_string; path=/";    
&emsp;&emsp;指定可访问的主机名：document.cookie="key=value; domain=cookieDomain";    
&emsp;localStorage：      
&emsp;&ensp;生命期：除非被清除，否则永远保存    
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

4、ES6 箭头函数     
&emsp;&ensp;箭头函数几个特性： 不能被new、this被绑定为函数定义时的this且无法改变、不支持arguments    
&emsp;&ensp;不能被new的原因：箭头函数内部没有constructor方法，也没有prototype    
&emsp;&ensp;没有自己的this，箭头函数内的this值继承自外围函数值     
    
5、JS中检测数据类型的方式    
&emsp;1)typeof    
&emsp;&ensp;局限性：typeof null => object；检测数组、正则返回object    
&emsp;2)instanceof/constructor    
&emsp;&ensp;检测某一实例是否属于某一类     
&emsp;&ensp;局限性：    
&emsp;&emsp;1' 用instanceof检测的时候，只要当前的这个类在实例的原型链上，检测的结果都为true    
&emsp;&emsp;2' 基本数据类型不能用instanceof检测     
&emsp;&emsp;3' 在类的原型继承中，instanceof检测出来的结果是不精确的    
&emsp;3)object.prototype.toString.call(value)    
&emsp;4)object.prototype.toString    

6、JavaScript中的跨域    
&emsp;原因：同源策略限制(协议、端口号、域名)    
&emsp;方法：    
&emsp;&emsp;1) document.domain + iframe     
&emsp;&emsp;2) jsonp    
&emsp;&emsp;3) iframe location.hash    
&emsp;&emsp;4) window.name     
&emsp;&emsp;5) postMessage    

7、jsonp原理    
&emsp;&emsp;动态创建一个script标签,因为script标签里边的src属性没有同源限制,src请求指定的URL,通过callback回调接收.    

8、mvc/mvp/mvvm三者之间的区别    
&emsp;&emsp;mvc: view -> controller -> model -> view    
&emsp;&emsp;mvp: view -> presenter -> model -> presenter -> view    
&emsp;&emsp;mvvm: view <-> view-model <-> model

 

