## 概念
Promise  简单说就是一个容器，里边保存着某个未来才会结束的事件(通常是一个异步的结果)。    
Promise是对象，所以身上有很多方法，通过这些方法可以获取异步的操作结果。    

## 特点
优点    
1) 对象的状态不受外界影响。三种状态: pending、fulfilled、rejected。只有异步操作结果可以决定当前状态，其他任何手段无法改变该状态。    
2) 一旦状态改变不会再变，其他任何时候都可以得到该结果。只有两种可能：pending->fulfilled,pending->rejected。        

缺点    
1) 一旦新建会立即执行，无法取消。
2) 处于pending状态时，无法得知目前进展到哪一阶段。
3) 如果不设置回调函数，promise内部错误不会反应到外部。   
```
let promise = new Promise(function(resolve, reject){
    console.log('Promise')
    resolve();
})
promise.then(function(){
    console.log('resolved');
})
console.log('Hi');
/*
    运行结果：
        Promise
        Hi
        resolved
*/
``` 
说明：Promise新建后立即执行，所以首先输出Promise，然后then方法指定的回调函数将在当前脚本所有同步任务执行完才会执行，所以最后输出resolved。

## 使用
Promise对象是一个构造函数，接收一个函数作为参数，该函数接收两个参数分别是resolve和reject。    
```
const promise = new Promise(function(resolve,reject){
    if(/*异步操作成功*/){
        resolve(value)
    }else{
        reject(error)
    }
})
```
resolve函数作用，将Promise对象的状态从pending变为resolved，在异步操作成功时调用，并将异步操作的结果作为参数传递出去。    
reject函数作用，将Promise对象的状态从pending变为rejected，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。    

Promise实例生成后可以用then分别指定resolved状态和rejected状态的回调函数。then方法接收两个回调函数作为参数，第一个回调函数是Promise对象状态变成resolved时调用，第二个是变为rejected时调用。第二个回调函数是可选的。这两个回调函数都接收Promise对象传出的值作为参数。    
```
promise.then(function(value){
    // success
},function(error){
    // failure
})
```
[实例1(异步加载图片)](./imageload.js)    
[实例2(ajax)](./ajax.js)    

一个异步操作的结果是另一个异步操作。    
```
const p1 = new Promise(function(resolve, reject){
    // ...
})
const p2 = new Promise(function(resolve, reject){
    resolve(p1)
})
```
这时p1的状态就会传递给p2，p1的状态决定了p2的状态，如果p1是pending状态，p2就会等待p1的状态改变，如果p1状态改变，p2的回调函数就会立即执行。
```
const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        return reject(new Error('fail'))
    },3000)
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        return resolve(p1)
    }, 1000)
})

p2
.then(result => console.log(result))
.catch(error => console.log(error))

// Error: fail
```
p2的resolve方法返回的是p1。由于p2返回的是另外一个promise，导致自己的状态无效了,由p1的状态决定p2的状态。    

调用resolve或reject并不会终结Promise的参数函数的执行。
```
new Promise((resolve,reject)=>{
    resovle(1);
    console.log(2)
}).then(r=>{
    console.log(r)
})
// 2
// 1
```
一般来说，调用resolve或reject以后，Promise的使命就完成了，后继操作放在then方法里边，而不应该写在resolve或reject的后面，最好在前面加上return语句。    

## Promise.prototype.then()
Promise **实例**具有then方法，then方法是定义在原型对象Promise.prototype上的。作用是为实例添加状态改变时的回调函数。    

then方法返回的是一个新的Promise实例，因此可以采用链式操作。

## Promise.prototype.catch()
用于指定发生错误时的回调函数。Promise对象如果变为resolved状态会调用then方法指定的回调函数，如果异步操作抛出错误状态变为rejected会调用catch方法指定的回调函数，处理这个错误，如果then方法指定的回调函数在运行中抛出错误也会被catch方法捕获。    
catch方法是then方法的另外一种形式 .then(null, rejection)
```
p.then((val)=>{
    console.log('fulfilled:',val)
}).catch((err)=>{
    console.log('rejected:',err)
})
// 等同于
p.then((val)=>{
    console.log('fulfilled:',val)
}).then(null, (err)=>{
    console.log('rejected:',err)
})
```
reject方法的作用等同于抛出一个错误
```
const promise = new Promise(function(resolve, reject) {
  throw new Error('test');
});
promise.catch(function(error) {
  console.log(error);
});
// Error: test

// 写法一
const promise = new Promise(function(resolve, reject){
    try{
        throw new Error('test')
    }catch(e){
        reject(e)
    }
});
promise.catch(function(error){
    console.log(error)
});

// 写法二
const promise = new Promise(function(resolve, reject){
    reject(new Error('test'));
});
promise.catch(function(error){
    console.log(error);
})
```

如果Promise状态已经变成resolved，再抛出错误是无效的。因为Promise的状态一旦改变，就永远保持改状态，不会再改变。
```
const promise = new Promise(function(resolve, reject){
    resolve('ok')
    throw new Error('test');
});
promise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
```
Promise对象的错误具有'冒泡'性质，会一直向后传递，直到被捕获为止。所以一般不要在then方法里边定义Reject状态的回调函数即then的第二个参数，总是使用catch方法。这样做的优点： 可以捕获前面then方法执行中的错误。    
如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，所以Promise对象后边要跟catch方法。    
catch方法返回的还是一个Promise对象，后面还可以接着调用then方法。    
如果没有报错会跳过catch方法，继续执行then方法。

## Promise.prototype.finally()
finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。    
```
promise
.then(result=>{})
.catch(error=>{})
.finally(()=>{})
```
finally方法的回调函数不接受任何参数，也就是说没办法知道前面的状态是fulfilled还是rejected。表明finally方法里边的操作是无状态的，不依赖Promise的执行结果。    

## Promise.all()
Promise.all()方法用于将多个Promise实例包装成一个新的Promise实例。    
```
const p = Promise.all([p1,p2,p3,...])
```
Promise.all方法接收一个数组作为参数，p1,p2,p3...都是Promise实例，如果不是，会调用Promise.resolve方法将参数转换为Promis实例再进一步处理。    
p的状态有两种情况：    
1) 只有p1,p2,p3...的状态都变成fulfilled，p的状态才会变成fulfilled，p1,p2,p3...的返回值组成一个数组，传递给p的回调函数。
2) 只要p1,p2,p3...之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会被传递给p的回调函数.    

如果作为参数的Promise实例，自己定义了catch方法，一旦被rejected，并不会触发Promise.all()的catch方法。
```
const p1 = new Promise((resolve,reject)=>{
    resolve('hello');
}).then(result => result).catch(e => e);
const p2 = new Promise((resolve,reject)=>{
    throw new Error('error');
}).then(result => result)
.catch(e=>e);
Promise.all([p1,p2])
.then(result => console.log(result))
.catch(e=>console.log(e))

// ['hello', Error: 'error']
```
注释：p2有自己的catch方法，该方法返回的是一个新的Promise实例，p2指向的实际上是这个新实例，该实例执行完catch方法之后，也会变成resolved状态，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

## Promise.race()
Promise.race方法同样是将多个Promise实例包装成一个新的Promise实例。
```
const p = Promise.race([p1,p2,p3...])
```
只要p1,p2,p3之中有一个实例率先改变状态，p的状态就跟着改变。率先改变的Promise实例的返回值就传递给p的回调函数。    

## Promise.resolve()
Promise.resolve方法将现有对象转为Promise对象。
```
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```
Promise.resolve方法的参数有四种情况：   
1) **参数是一个Promise实例**    
如果参数是一个Promise实例，那么Promise.resolve将不做任何修改，原封不动返回这个实例。
2) **参数是一个具有then方法的对象**
```
let thenable = {
    then: function(resolve, reject){
        resolve(123)
    }
}
```
Promise.resolve方法会将这个对象转为Promise对象，然后立即执行then方法。     
3) **参数不是具有then方法的对象或根本不是对象**    
如果参数是一个原始值，或者是一个不具有then方法的对象，那么Promise.resolve方法返回一个新的Promise对象，状态为Resolved。    
4) **不带有任何参数**    
不带有任何参数的情况直接返回一个Resolved状态的Promise对象。    
立即resolve的Promise对象是在本轮“事件循环”结束时，而不是在下一轮“事件循环”开始时。    

## Promise.reject()
Promise.reject(reason)方法返回一个新的Promise实例，状态为Rejected。
```
let p = Promise.reject('error')
// 等价于
let p = new Promise((resolve, reject)=>reject('error'))
```
Promise.reject()方法的参数会原封不动地作为reject的理由变成后续方法的参数。
