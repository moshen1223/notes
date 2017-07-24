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
    注意：如果函数本身是一个绑定了this对象的函数.   
    eg:    
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
    
  ##### 当this碰到return时
    如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。
    (null比较特殊，虽然是对象，但是这里的this还是指向函数实例。)    
    
  ##### 对 当this碰到return时对 this指向的是调用它的那个对象 补充
    eg:
    var obj = {
      user: 'moshen',
      fn: function(){
        console.log(this.user); // moshen
      }
    }
    window.obj.fn();
    eg:
    var obj = {
      a: 10,
      b: {
        a: 12,
        fn: function(){
          console.log(this.a); //12
        }
      }
    }
    obj.b.fn();    
    
    情况1： 如果一个函数中有this,但是没有被上一级的对象所调用，那么this指向的就是window.
    情况2： 如果一个函数中有this,这个函数有被上一级的对象所调用，那么这个this指向的就是上一级对象。
    情况3： 如果一个函数中有this，这个函数包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象。
    eg:
      var obj = {
        a: 10,
        b: {
          // a: 12,
          fn: function(){
            console.log(this.a); // undefined
          }
        }
      } 
      obj.b.fn();
    情况4： this永远指向的是最后调用它的对象，看执行的时候是谁调用的。
    eg: 
      var obj = {
        a: 10,
        b: {
          a: 12,
          fn: function(){
            console.log(this.a); //undefined
            console.log(this); //window
          }
        }
      }
      var j = obj.b.fn;
      j();

  
