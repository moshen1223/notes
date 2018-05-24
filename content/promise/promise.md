## 概念
Promise  简单说就是一个容器，里边保存着某个未来才会结束的事件(通常是一个异步的结果)。    
Promise是对象，所以身上有很多方法，通过这些方法可以获取异步的操作结果。    

## 特点
优点    
1) 对象的状态不受外界影响。三种状态: pending、fulfilled、rejected。只有异步操作结果可以决定当前状态，其他任何手段无法改变该状态。    
2) 一旦状态改变不会再变，其他任何时候都可以得到该结果。只有两种可能：pending->fulfilled,pending->rejected。        

缺点    
1) 一旦新建会立即执行，无法取消。
2) 处于pending状态时，无法得知目前进展到哪一阶段。
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
resolve函数作用，将Promise对象的状态从pending变为resolved，在异步操作成功时调用，并将异步操作的结果作为参数传递出去。    
reject函数作用，将Promise对象的状态从pending变为rejected，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。    

Promise实例生成后可以用then分别指定resolved状态和rejected状态的回调函数。then方法接收两个回调函数作为参数，第一个回调函数是Promise对象状态变成resolved时调用，第二个是变为rejected时调用。第二个回调函数是可选的。这两个回调函数都接收Promise对象传出的值作为参数。    
```
promise.then(function(value){
    // success
},function(error){
    // failure
})
```
[实例1(异步加载图片)](./imageload.js)    
[实例2(ajax)](./ajax.js)    

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
一般来说，调用resolve或reject以后，Promise的使命就完成了，后继操作f放在then方法里边，而不应该写在resolve或reject的后面，最好在前面加上return语句。    

## Promise.prototype.then()
Promise **实例**具有then方法，then方法是定义在原型对象Promise.prototype上的。作用是为实例添加状态改变时的回调函数。    

then方法返回的是一个新的Promise实例，因此可以采用链式操作。

## Promise.prototype.catch()
用于指定发生错误时的回调函数。Promise对象如果变为resolved状态会调用then方法指定的回调函数，如果异步操作抛出错误状态变为rejected会调用catch方法指定的回调函数，处理这个错误，如果then方法指定的回调函数在运行中抛出错误也会被catch方法捕获。    
catch方法是then方法的另外一种形式 .then(null, rejection)
