  ## JavaScript中this指向问题
  
  Javascript函数中的this指向并不是在函数定义的时候确定的，而在调用的时候确定的。也就是函数的调用方式决定了this的指向。
  JavaScript中普通函数调用方式分为三中：直接调用、方法调用、new调用。还有一些其他的调用方式，通过bind()将函数绑定到对象之后进行调用、通过call()、apply()进行调用。
  ES6中的箭头函数调用。
  ##### 直接调用
    函数名(...)  函数内部的this指向全局对象(浏览器中全局对象是window，NodeJs中全局对象时global)。
    eg:
      const _global = typeof window === "undefined" ? global : window;
      function test(){
        console.log(this === _global);	// true
      }
      // 全局作用域下的直接调用
      test() 
    注意：直接调用并不是指在全局作用域下进行调用，在任何作用域下，直接通过 函数名(...) 来对函数进行调用的方式，
    都称为直接调用。	
    eg:
      (function(_global){
        function test(){
          console.log(this === _global); // true
        }
        // 非全局作用下的直接调用
        test();
      })(typeof window === "undefined" ? global : window);	

  ##### bind对直接调用的影响
    Function.prototype.bind() 的作用是将当前函数与指定的对象绑定，并返回一个新函数，这个新函数无论以什么形式调用，
    其this始终指向绑定的对象。
    eg:
      const obj = {};
      function test(){
        console.log(this === obj);
      }
      const newobj = test.bind(obj);
      test(); // false   this == window;
      newobj(); // true

  ##### call和apply对this的影响
    注意：如果函数本身是一个绑定了this对象的函数eeg: 
      const obj = {};
      function test(){
        console.log(this == obj);
      }
      const newobj = test.bind({}); // 绑定到一个新对象
      test.apply(obj); // true;
      newobj.apply(obj); // false;

  ##### 方法调用
    通过对象来调用其方法函数， 对象.方法函数(...) 函数中的this指向调用该方法的对象。同样需要注意bind的影响。

  ##### 方法中this指向全局对象的情况
    注意：方法中而不是方法调用中。方法中的this指向全局对象。
    const obj = {
      test(){
        console.log(this === obj);
      }
    }
    const t = obj.test;
    t();  //false

  ##### new 调用
    ES5中，用new调用一个构造函数，会创建一个新对象，而其中的this就指向这个新对象。
    var data = 'Hi';
    function Test(data){
      this.data = data;
    }
    var a = new Test('Hello World');
    console.log(a.data); // Hello World
    console.log(data);	// Hi
    var b = new Test('Hello World');
    console.log(a === b); // false

  ##### 箭头函数中的this
    箭头函数没有自己的this绑定，箭头函数中使用的this，其实是直接包含它的那个函数或函数表达式中的this。
    const obj = {
      test(){
        const arrow = () => {
          console.log(this === obj);
        };
        arrow();
      },
      getArrow(){
        return () => {
          console.log(this === obj);
        }
      }	
    }	
    obj.test(); // true
    const arrow = obj.getArrow();
    arrow(); // true
    两个this都是由箭头函数的直接外层函数决定的，而方法函数中的this是由其调用方式决定的。
