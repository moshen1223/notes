进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）。    
线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）。    
浏览器进程主要包括：Browser进程、第三方插件进程、GPU进程、浏览器渲染进程。    
浏览器多进程优势：1)避免单个page crash影响整个浏览器；2)避免第三方插件crash影响整个浏览器；3)多进程充分利用多核优势；
4)方便使用沙河模型隔离插件等进程，提高浏览器稳定性。    

浏览器渲染进程主要包括的线程:1)GUI渲染线程 2)JS引擎线程 3)事件触发线程 4)定时触发线程 5)异步http请求线程

