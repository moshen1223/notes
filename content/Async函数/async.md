## 含义
async 函数是Generator函数的语法糖。   
### 特点
1) 内置执行器。    
async 函数的执行与普通函数一样，直接调用执行。    
2) 更好的语义。    
async 表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。    
3) 适用性。    
async 函数的await命令后面，可以是Promise对象和原始类型的值。    
4) 返回值是Promise。    
可以使用then方法指定下一步的操作。

## 使用
async 函数返回一个Promise对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会返回，等待异步操作完成，再接着执行**函数体内**后面的语句。     
```
    1. // 函数声明
    async function foo(){}

    2. // 函数表达式
    const foo = async function(){}

    3. // 对象的方法
    let obj = { async foo(){} }; // 对象简洁写法

    4. // 箭头函数
    const foo = async () => {};

    5. // class 方法
    class Storage{
        constructor(){

        }
        async getfoo(){

        }
    }
```
## 语法
### 返回Promise对象
async 函数内部return语句返回的值，会成为then方法回调函数的参数。
```
async function f(){
    return 'hello';
}
f().then(res => console.log(res))
// hello
```
async 函数内部抛出错误，会导致返回的Promise对象变成reject状态，抛出的错误对象会被catch方法回调函数接收到。
### Promise对象的状态变化
async 函数返回的Promise对象，必须等到内部所有await命令后面的Promise对象执行完，才会发生状态改变，除非遇到return语句或抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
### await命令
正常情况下，await命名后面是一个Promise对象，如果不是，会被转成一个立即resolve的Promise对象。
```
    async function(){
        return await 123;
    }
    f().then(v => console.log(v))
    // 123
```
await命令后面的Promise对象如果变成reject状态，则reject的参数会被catch方法的回调函数接收到。     
只要一个await语句后面的Promise变为reject，那么整个async函数都会中断执行。
```
async function f(){
    await Promise.reject('失败);
    await Promise.resolve('成功'); // 不会执行
}
```
有时我们希望即使前一个异步操作失败，也不要中断后面的异步操作。可以将前一个await放在try...catch结构里边，这样不管这个异步操作是否成功，第二个await都会执行。
```
async function f(){
    try{
        await Promise.reject('error');
    }catch(e){
    }
    return await Promise.resolve('hello');
}
f().then(v => console.log(v)); // hello
```
另一种方法await后面的Promise对象再跟一个catch方法，处理前面可能出现的错误。
```
async function f(){
    await Promise.reject('error').catch(e=>{console.log(e)});
    return await Promise.resolve('hello');
}
f().then(v => console.log(v)); 
// error
// hello
```


