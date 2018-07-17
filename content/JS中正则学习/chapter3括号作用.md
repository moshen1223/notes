# 三、括号的作用
    括号提供了分组的能力便于后边引用。
## 3.1 分组和分支结构
这是括号最直接的作用，强调括号内的正则是一个整体，提供子表达式。
### 3.1.1 分组
```
实例：
    var reg = /(ab)+/g;
    var str = "ababa aba abababa";
    console.log(str.match(reg));  // =>["abab","ab","ababab"]
```
### 3.1.2 分支结构
```
实例：
    var reg =  /^I love (JavaScript|Regular Expression)$/;
    var str = 'I love JavaScript';
    var str2 = 'I love Regular Expression';
    console.log(reg.test(str));  // =>true
    console.log(reg.test(str2));  // =>true

```
如果没有括号/^I love JavaScript|Regular Expression$/ 将匹配 I love JavaScript 和 Regular Expression。

## 3.2 分组引用
使用分组引用可以进行数据提取，以及更强大的替换操作。    
```
    // 匹配格式为 yyyy-mm-dd的日期
    var reg = /\d{4}-\d{2}-\d{2}/;
```
如果加上括号 var reg = /(\d{4})-(\d{2})-(\d{2})/;    
带括号的和没带括号的区别就在于后者多个分组编号，正则引擎在匹配过程中给每一个分组都开辟一个空间，用来匹配每一个分组匹配到的数据。     
### 3.2.1 提取数据
提取日期中的年月日
```
    var reg = /(\d{4})-(\d{2})-(\d{2})/;
    var str = ' 2018-07-16';
    console.log(str.match(reg));
    // => ["2018-07-16", "2018", "07", "16", index: 0, input: "2018-07-16", groups: undefined]
```
正则表达式是否有修饰符g，match返回的数据格式是不一样的。
```
    var reg = /(\d{4})-(\d{2})-(\d{2})/g;
    var str = '2018-07-16';
    console.log(str.match(reg));
    // => ["2018-07-16"]
```
正则实例对象的exec方法：
```
    var reg = /(\d{4})-(\d{2})-(\d{2})/;
    var str = '2018-07-16';
    console.log(reg.exec(str));
    // => ["2018-07-16", "2018", "07", "16", index: 0, input: "2018-07-16", groups: undefined]
```
也可以使用构造函数的全局属性$1至$9来获取：
```
    var reg = /(\d{4})-(\d{2})-(\d{2})/;
    var str = '2018-07-16';
    reg.test(str);
    console.log(RegExp.$1); // => 2018
    console.log(RegExp.$2); // => 07
    console.log(RegExp.$3); // => 16
```
### 3.2.2 替换
把 yyyy-mm-dd 转成 mm/dd/yyyy
```
    var reg = /(\d{4})-(\d{2})-(\d{2})/
    var str = '2018-07-17';
    var result = str.replace(reg, function(){
        return `${RegExp.$2}/${RegExp.$3}/${RegExp.$1}`;
    })
    console.log(result); // => 07/17/2018
```
简写形式
```
    var reg = /(\d{4})-(\d{2})-(\d{2})/
    var str = '2018-07-17';
    var result = str.replace(reg, "$2/$3/$1");
    console.log(result) // => 07/17/2018

```