touch来源
------
PC网页上的大部分操作都是用鼠标的，即响应的是鼠标事件，包括mousedown、mouseup、mousemove和click事件。一次点击行为，事件的触发过程为：mousedown -> mouseup -> click 三步。<br>
手机上没有鼠标，所以就用触摸事件去实现类似的功能。touch事件包含touchstart、touchmove、touchend，注意手机上并没有tap事件。手指触发触摸事件的过程为：touchstart -> touchmove -> touchend。<br>

移动端tap如何产生
------
原生的touch事件本身是没有tap的，js库里提供的tap事件都是模拟出来的。<br>
手机上响应 click 事件会有300ms的延迟，浏览器在 touchend 后会等待约300ms，原因是判断用户是否有双击（double tap）行为。如果没有 tap 行为，则触发 click 事件，而双击过程中就不适合触发 click 事件了。由此可以看出 click 事件触发代表一轮触摸事件的结束。</br>

事件穿透产生的原因
------
zepto中的 tap 通过兼听绑定在 document 上的 touch 事件来完成 tap 事件的模拟的，是通过事件冒泡实现的。在点击完成时（touchstart / touchend）的 tap 事件需要冒泡到 document 上才会触发。而在冒泡到 document 之前，手指接触和离开屏幕（touchstart / touchend）是会触发 click 事件的。<br>
因为 click 事件有延迟（大概是300ms，为了实现safari的双击事件的设计），所以在执行完 tap 事件之后，弹出层立马就隐藏了，此时 click 事件还在延迟的 300ms 之中。当 300ms 到来的时候，click 到的其实是隐藏元素下方的元素。<br>
如果正下方的元素有绑定 click 事件，此时便会触发，如果没有绑定 click 事件的话就当没发生。如果正下方的是 input 输入框（或是 select / radio / checkbox），点击默认 focus 而弹出输入键盘，也就出现了上面的“点透”现象。<br>

穿透解决方法
------
1. 遮挡    
由于 click 事件的滞后性，在这段时间内原来点击的元素消失了，于是便“穿透”了。因此我们顺着这个思路就想到，可以给元素的消失做一个fade效果，类似jQuery里的fadeOut，并设置动画duration大于300ms，这样当延迟的 click 触发时，就不会“穿透”到下方的元素了。    
同样的道理，不用延时动画，我们还可以动态地在触摸位置生成一个透明的元素，这样当上层元素消失而延迟的click来到时，它点击到的是那个透明的元素，也不会“穿透”到底下。在一定的timeout后再将生成的透明元素移除。    
2. pointer-events    
pointer-events是CSS3中的属性，它有很多取值，有用的主要是auto和none，其他属性值为SVG服务。    
auto	效果和没有定义 pointer-events 属性相同，鼠标不会穿透当前层。    
none	元素不再是鼠标事件的目标，鼠标不再监听当前层而去监听下面的层中的元素。但是如果它的子元素设置了pointer-events为其它值，比如auto，鼠标还是会监听这个子元素的。    
3. fastclick    
使用fastclick库，其实现思路是，取消 click 事件，用 touchend 模拟快速点击行为。    
FastClick.attach(document.body);    
从此所有点击事件都使用click，不会出现“穿透”的问题，并且没有300ms的延迟。
