  ##### 关于水平居中   
  
    1.行内元素使用，text-align：center
    
    2.块级元素
      1) margin：0 auto
      
      2) 子元素有浮动，父元素使用：width: fit-content; margin: 0 auto;
        fit-content(css3为width新添加属性值)
        .box{
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          margin: 0 auto;
        }
        .box .child{
          width: 100px;
          height: 100px;
          float: left;
          background: #f90;
        }
        <div class="box">
          <div class="child"></div>
        </div>
        
      3) 使用flex布局(justify-content: center)
        .parent2{
          display: flex;
          justify-content: center;
        }
        .parent2 .child2{
          width: 100px;
          height: 100px;
          background: #f90;
        }
        <div class="parent2">
          <div class="child2"></div>
        </div>
        
      4) 使用flex布局(display:box;box-pack:center)
        .parent{
           display: -webkit-box;
            -webkit-box-pack: center;
            -webkit-box-orient: horizontal;
        }
        .parent .son{
          width: 100px;
          height: 100px;
          background: #f90;
        }
        <div class="parent">
          <div class="son"></div>
        </div>
        
      5) CSS3中的transform属性
        .parent2{
          height:200px;
        }
        .parent2 .son2{
          width: 100px;
          height: 100px;
          position: absolute;
          left: 50%;
          -webkit-transform: translate(-50%,0);
          background: #f90;
        }
        <div class="parent2">
          <div class="son2"></div>
        </div>
        
      6) 绝对定位 负margin
        .parent3{
          height: 200px;
        }
        .parent3 .son3{
          width: 100px;
          height: 100px;
          position: absolute;
          left: 50%;
          margin-left: -50px;
          background: #f90;
        }
        <div class="parent3">
          <div class="son3"></div>
        </div>
        
      7) 绝对定位 同时设置left和right
        .parent4{
          height: 100px;
        }
        .parent4 .son4{
          width: 100px;
          height: 100px;
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          background: #f90;
        }
        <div class="parent4">
          <div class="son4"></div>
        </div>
##### 关于垂直居中   
    1.行内元素使用，line-height: 父元素高度
    
    2.块级元素
     1) vertical-align: middle
      .parent{
       height: 200px;
       border: 1px solid #999;
      }
      .son{
       width: 100px;
       height: 100px;
       background: #f90;
       display: inline-block;
       vertical-align: middle;
      }
      .parent span{
       height: 100%;
       display: inline-block;
       vertical-align: middle;
      }
      <div class="parent">
       <div class="son"></div>
       <span></span>
      </div>
      
     2) vertical-align: middle 配合 table 使用
      .parent{
       height: 200px;
       border: 1px solid #999;
       display: table;
      }
      .son{
       background: #f90;
       display: table-cell;
       vertical-align: middle;
      }
      <div class="parent">
       <div class="son">
        高度不固定
       </div>
      </div>
      
     3) 使用flex布局 align-items: center; (笔者推荐---简单)
      .parent{
       height: 200px;
       border: 1px solid #999;
       display: flex;
       align-items: center;
      }
      <div class="parent">
       <div class="son">
        高度不固定
       </div>
      </div>
      
     4) 使用transform
      .parent{
       position: relative;
       height: 200px;
       border: 1px solid #999;
      }
      .son{
       position: absolute;
       top: 50%;
       -webkit-transform: translate(0,-50%);
      }
      <div class="parent">
       <div class="son">
        高度不固定
       </div>
      </div>
      
     5) 绝对定位 负margin
      .parent {
       position: relative;
       height: 300px;
       border: 1px solid #999;
      }
      .son{
       position: absolute;
       width: 100px;
       height: 100px;
       background: #f90;
       top: 50%;
       margin-top: -50px;
      }
      <div class="parent">
       <div class="son"></div>
      </div>
      
     6) 绝对定位 同时设置top和bottom
      .son{
          position:absolute;
          height:100px;
          width: 100px;
          top:0;
          bottom:0;
          margin:auto 0;
          background: #f90;
      }
      <div class="parent">
       <div class="son"></div>
      </div>
