1. 项目路径配置

　　由于 vue-cli 配置的项目提供了一个内置的静态服务器，在开发阶段基本不会有什么问题。但是，当我们把代码放到服务器上时，经常会遇到静态资源引用错误，导致界面一片空白的问题。

　　这是由于 vue-cli 默认配置的 webpack 是以站点根目录引用的文件，然而有时候我们可能需要把项目部署到子目录中。

　　我们可以通过 config/index.js 来修改文件引用的相对路径：
　　build.assetsSubDirectory: 'static'    

　　build.assetsPublicPath: '/'    

　　dev.assetsSubDirectory: 'static'    

　　dev.assetsPublicPath: '/'    
    
    我们可以看到导出对象中 build 与 dev 均有 assetsSubDirectory、assetsPublicPath 这两个属性。

　　其中 assetsSubDirectory 指静态资源文件夹，也就是打包后的　js、css、图片等文件所放置的文件夹，这个默认一般不会有问题。

　　assetsPublicPath 指静态资源的引用路径，默认配置为 /，即网站根目录，与 assetsSubDirectory 组合起来就是完整的静态资源引用路径 /static。

　　到这解决方法已经很明显了，只要把根目录改为相对目录就好了：

　　build.assetsSubDirectory: 'static'    

　　build.assetsPublicPath: './'
