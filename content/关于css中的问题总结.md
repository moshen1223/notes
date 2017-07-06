###### 1、CSS样式中的百分比是相对于谁的？     
	1) width、left、right、margin、padding等相对于父元素的宽度
	2) height、top、bottom等相对于父元素的高度
	3) font-size等相对于继承字号
	4) line-height等相对于自身字号
	5) border-radius、background-size、transform：translate()、transform-origin、zoom、cli-path等；

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
		
		
###### 3、CSS实现函数固定超过显示...    
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
