 
 ### 关于flex布局     

      设置flex后，子元素的float、clear、vertical-align属性失效
      父元素设置的属性：
        flex-direction: 主轴的方向
          值  row  主轴水平 起点在左
              row-reverse 主轴水平 起点在右
              column 主轴垂直 起点在上
              column-reverse  主轴垂直 起点在下
        flex-wrap: 换行方式
          值  nowrap  不换行
              wrap  换行 第一行在上
              wrap-reverse 换行 第一行在下
        flex-flow: flex-direction和flex-wrap组合体
          值  默认为 row nowrap
        justify-content: 定义项目在主轴上的对齐方式
          值  flex-start (默认值) 左对齐
              flex-end 右对齐
              center 居中
              space-between 两端对齐 项目之间间隔相等
              space-around  每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
        align-items: 项目在交叉轴上对齐方式
          值  flex-start 交叉轴的起点对齐
              flex-end 交叉轴的终点对齐
              center  交叉轴的中点对齐
              baseline 交叉轴的基线对齐
              stretch(默认值) 如果项目未设置高度或设为auto，将占满整个容器的高度。
        align-content：多根轴线的对齐方式
          值  flex-start
              flex-end
              center
              space-between 与交叉轴两端对齐，轴线之间的间隔平均分布。
              space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
              stretch（默认值） 轴线占满整个交叉轴。
      子元素设置的属性
        order: 项目排列顺序 数值越小越靠前 默认为0
        flex-grow: 项目放大比例  默认为0  有剩余空间也不放大
        flex-shrink: 项目缩小比例 默认为1 空间不足时 按比例缩小
        flex-basis: 在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
        flex: flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
        align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
