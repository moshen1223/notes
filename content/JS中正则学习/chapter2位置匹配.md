# 二、位置匹配
## 2.1 位置
位置(锚)是相邻字符之间的位置。
## 2.2 位置匹配
ES5中提供6种锚:    
^、$、\b、\B、(?=p)、(?!p)。
### 2.2.1 ^和$
^ 匹配开头，在多行匹配中匹配行开头。    
$ 匹配结尾，在多行匹配中匹配行结尾。    
```
    var str = '"hello"';
    var reg = /^|$/g;
    console.log(str.replace(reg, '#'))  // => #hello#
```
需要注意的是，多行模式匹配时(有修饰符m)
```
    var str = '"Hello\nWorld"';
    var reg = /^|$/gm;
    console.log(str.replace(reg, '#'))  // => 
    #Hello#
    #World#
```
### 2.2.2 \b 和 \B
\b 是单词的边界，具体来说就是\w和\W之间的位置，也包括\w和^之间的位置，和\w和$之间的位置。
```
    var str = '[js] lesson_2.mp4';
    var reg = /\b/g;
    console.log(str.replace(reg, '#'));  // => [#js#] #lesson_2#.#mp4#;
```
说明：\w是字符组[0-9a-zA-Z_]的简写形式，\w是字母数字或者下划线中任何一个字符。\W是排除字符组[^0-9a-zA-Z_]的简写形式，\W是\w以外的任何一个字符。    
第1个，“[”和“j”，是\W和\w之间的位置。    
第2个，“s”和“]”，是\w和\W之间的位置。    
第3个，空格和“l”，是\W和\w之间的位置。    
第4个，2和"."，是\w和\W之间的位置。    
第5个，"."和“m”，是\W和\w之间的位置。    
第6个，4和"$"，是\w和\W之间的位置。    

\B是\b的反面意思，非单词边界。
```
    var str = '[js] lesson_2.mp4';
    var reg = /\B/g;
    console.log(str.replace(reg, '#'));  // => #[j#s]# l#e#s#s#o#n#_#2.m#p#4;
```
说明：\w与\w、\W与\W、^与\W、\W与$之间的位置。
### 2.2.3 （?=p）和（?!p）
(?=p)正向先行断言(positive lookahead)和(?!p)负向先行断言(negative lookahead)。    
(?=p)，其中p是一个子模式，即p前面的位置，或者说该位置后面的字符要匹配p。    
```
    var str = 'hello';
    var reg = /(?=l)/g;
    console.log(str.replace(reg, '#'));  // => he#l#lo
```
(?!p)就是(?=p)的反面意思。
```
    var str = 'hello';
    var reg = /(?!l)/g;
    console.log(str.replace(reg, '#'));  // => #h#ell#o#
```
