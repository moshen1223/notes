1. 打包时项目路径配置
　　由于 vue-cli 配置的项目提供了一个内置的静态服务器，在开发阶段基本不会有什么问题。但是，当我们把代码放到服务器上时，经常会遇到静态资源引用错误，导致界面一片空白的问题。这是由于 vue-cli 默认配置的 webpack 是以站点根目录引用的文件，然而有时候我们可能需要把项目部署到子目录中。我们可以通过 config/index.js 来修改文件引用的相对路径:    
                
    build.assetsSubDirectory: 'static'    
    build.assetsPublicPath: '/'    
    dev.assetsSubDirectory: 'static'    
    dev.assetsPublicPath: '/'    
    
    我们可以看到导出对象中 build 与 dev 均有 assetsSubDirectory、assetsPublicPath 这两个属性。其中 assetsSubDirectory 指静态资源文件夹，也就是打包后的　js、css、图片等文件所放置的文件夹，这个默认一般不会有问题。assetsPublicPath 指静态资源的引用路径，默认配置为 /，即网站根目录，与 assetsSubDirectory 组合起来就是完整的静态资源引用路径 /static。到这解决方法已经很明显了，只要把根目录改为相对目录就好了：

    build.assetsSubDirectory: 'static'    
    build.assetsPublicPath: './'    
      
2. 在vue组件中经常需要给style添加scoped属性来使得当前样式只作用于当前组件的节点。编译之后会将当前组件的节点添加一个像data-v-e0329592这样唯一属性的标识，也会给当前style的所有样式添加[data-v-e0329592]（eg: .user[data-v-e0329592]）， data-v-e0329592整个页面相同.    

3. 一组li，li包含input框("\<li>\<input type="text"/>\</li>")，通过v-for渲染的，现在需要实现通过拖拽更改行的位置的功能，改变DOM之后，v-for重新渲染之后input内的值又变成原来的值，并没有跟着DOM进行改变。    
问题所在:    
    Vue自己使用了重用DOM的优化，导致相同位置的元素会重用之前的DOM，所使用的Vue2.0中的`:key="index"`在数组元素改变位置后，``index``依旧没有改变，所以还是会按照之前的DOM顺序来渲染.    
解决办法:    
    1.使用``v-bind:key="item.id"``，这里每个数组元素的``id``应该是不同的;    
    2.使用ES6中的symbol函数，从而使key值唯一;    
    
4. 对象存储到localstorage、sessionstorage中变成字符串，保存的时候JSON.stringify(object)解决，使用的时候JSON.parse(string).
