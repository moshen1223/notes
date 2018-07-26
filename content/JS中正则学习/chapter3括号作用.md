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
## 3.3 反向引用
除了使用相应API来引用分组，也可以在正则本身里引用分组，但只能引用之前出现的分组，即反向引用。    
匹配日期：    
    2018-07-25    
    2018/07/25    
    2018.07.25    
```
    var reg = /\d{4}(\.|\/|\-)\d{2}(\.|\/|\-)\d{2}/;
    var str1 = '2018-07-25';
    var str2 = '2018/07/25';
    var str3 = '2018.07.25';
    var str4 = '2018-07.25';
    console.log(reg.test(str1)); // => true
    console.log(reg.test(str2)); // => true 
    console.log(reg.test(str3)); // => true 
    console.log(reg.test(str4)); // => true     
```
匹配2018-07.25 不是我们想要的数据。
```
    var reg = /\d{4}(\.|\/|\-)\d{2}\1\d{2}/;
    var str1 = '2018-07-25';
    var str2 = '2018/07/25';
    var str3 = '2018.07.25';
    var str4 = '2018-07.25';
    console.log(reg.test(str1)); // => true
    console.log(reg.test(str2)); // => true 
    console.log(reg.test(str3)); // => true 
    console.log(reg.test(str4)); // => false     
```
里面的 \1，表示的引用之前的那个分组 (\\.|\\/|\\-)。不管它匹配到什么(比如 -)，\1 都匹配那个同样的具体某个字符。    
我们知道了 \1 的含义后，那么 \2 和 \3 的概念也就理解了，即分别指代第二个和第三个分组。

## 3.4 非捕获括号
之前文中出现的括号，都会捕获它们匹配到的数据，以便后续引用，因此也称它们是捕获型分组。     
如果只想要括号最原始的功能，但不会引用它，此时可以使用非捕获括号(?:p)p为捕获项。    
```
    var reg = /(?:ab)+/g;
    var string = 'abc ababa ababab';
    console.log(string.match(reg)); // =>["ab", "abab", "ababab"]
```