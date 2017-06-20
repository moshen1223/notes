###### 1、CSS样式中的百分比是相对于谁的？     
	1) width、left、right、margin、padding等相对于父元素的宽度
	2) height、top、bottom等相对于父元素的高度
	3) font-size等相对于继承字号
	4) line-height等相对于自身字号
	5) border-radius、background-size、transform：translate()、transform-origin、zoom、cli-path等；

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
