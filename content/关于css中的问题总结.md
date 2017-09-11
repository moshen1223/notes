###### 1、CSS样式中的百分比是相对于谁的？     
	1) width、left、right、margin、padding等相对于父元素的宽度
	2) height、top、bottom等相对于父元素的高度
	3) font-size等相对于继承字号
	4) line-height等相对于自身字号
	5) border-radius、background-size、transform：translate()、transform-origin、zoom、cli-path等相对于自身宽高

###### 2、CSS实现左右定宽，中间自适应(左边定宽，右边自适应)
	1) 浮动布局
		左边浮动，右边加上一个margin-left值
	2) 定位布局
	 	自适应模块同时设置left和right

###### 3、CSS实现等高布局
	1) 使用背景图片，假等高列
	2) padding正值，margin负值实现填充
		*{
			padding: 0;
			margin: 0;
		}
		.wrapper{
			overflow: hidden;
		}
		.left{
			float: left;
			width: 220px;
			background: green;
			padding-bottom: 999px;
			margin-bottom: -999px;
		}
		.right{
			float: right;
			width: 240px;
			background: yellow;
			padding-bottom: 999px;
			margin-bottom: -999px;
		}
		.center{
			margin-left: 225px;
			margin-right: 245px;
			background: red;
			padding-bottom: 999px;
			margin-bottom: -999px;
		}
		<div class="wrapper">
			<div class="left">
				<p>left content</p>
			</div>
			<div class="right">
				<p>right content</p>
			</div>
			<div class="center">
				<p>center content</p>
				<p>center content</p>
				<p>center content</p>
				<p>center content</p>
				<p>center content</p>
			</div>
		</div>		
	3) 固定宽度的等高布局，方法繁琐
		.container {
			width: 960px;
			margin: 0 auto;
		}
		.rightWrap {
			width: 100%;
			float: left;
			background: green;
			overflow: hidden;
			position: relative;
		}
		.contentWrap {
			float: left;
			background: orange;
			width: 100%;
			position: relative;
			right: 320px;/*此值等于rightSidebar的宽度*/
		}
		.leftWrap{
			width: 100%;
			background: lime;
			float:left;
			position: relative;
			right: 420px;/*此值等于Content的宽度*/
		}
		#left {
			float: left;
			width: 220px;
			overflow: hidden;
			position: relative;
			left: 740px;
		}
		#content {
			float: left;
			width: 420px;
			overflow: hidden;
			position:relative;
			left: 740px;
		}
		#right {
			float: left;
			overflow: hidden;
			width: 320px;
			position: #333;
			position: relative;
			left: 740px;
		}
		<div class="container" >
			<div class="rightWrap" >
				<div class="contentWrap" >
					<div class="leftWrap" >
						<div class="column" id="left">
							<p>left</p>
							<p>left</p>
							<p>left</p>
							<p>left</p>
							<p>left</p>
						</div>
						<div class="column" id="content">
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
							<p>content</p>
						</div>
						<div class="column" id="right">
							<p>right</p>
						</div>
					</div>
				</div>
			</div>
		
		
###### 4、CSS实现行数固定超过显示    
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
		
###### 5、css盒模型    
	 css盒模型分为两种：IE盒模型（怪异模型）和标准盒模型.
	 IE盒模型的宽度：width = content;
	 标准盒模型宽度：width = content + padding + border;    
	 通俗的说：width设定之后，添加padding和border，标准盒模型会向外扩充，从而撑大盒子，而IE模型会向内填充，改变内容区域大小;    
	 box-sizing属性解决盒模型问题，有三个属性值：content-box|border-box|inherit;
	 默认值content-box,此时遵循标准盒模型;
	 如果值为border-box,遵循IE模型;
	 值为inherit，从父元素继承;     
	 
###### 6、HTML中<!DOCTYPE>的作用,标准模式和兼容模式的区别,为什么HTML5文档头可以简写?   
	标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,
	模拟老式浏览器的行为以防止站点无法工作。    
	HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行。
	而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。    
			
###### 7、常见的浏览器内核    
	 Trident：IE
	 Gecko：Firefox
	 Presto：Opera    
	 Webkit：chrome
			

	 
	 
	
