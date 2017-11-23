1.css选择器问题    

    element+element  div+p  选择所有紧接着div元素后的p元素    
    element~element  p~ul   选择p元素之后的每一个ul元素    
    element>element  div>p  选择所有父级是div元素的p元素    
    [attribute^=value]   a[src^="https"]   选择每一个src属性的值以"https"开头的元素    
    [attribute$=value]   img[src$=".png"]  选择每一个src属性的值以".png"结尾的元素    
    [attribute*=value]   img[src*="photo"] 选择每一个src属性的值包含字符串"photo"的元素    
 
2.移动端一像素问题    

    原因：css中的1px与设备的物理像素1px并不相等，window对象的devicePixelRatio属性可以反映css像素与设备的像素比.    
    
    解决方法:    
    
                1.
                    .scale-1px{
                        position: relative;
                        border:none;
                    }
                    .scale-1px:after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        background: #000;
                        width: 100%;
                        height: 1px;
                        -webkit-transform: scaleY(0.5);
                        transform: scaleY(0.5);
                        -webkit-transform-origin: 0 0;
                        transform-origin: 0 0;
                    }

                    .scale-1px{
                        position: relative;
                        margin-bottom: 20px;
                        border:none;
                    }
                    .scale-1px:after{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        border: 1px solid #000;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        width: 200%;
                        height: 200%;
                        -webkit-transform: scale(0.5);
                        transform: scale(0.5);
                        -webkit-transform-origin: left top;
                        transform-origin: left top;
                    }
                    最好在使用前也判断一下，结合 JS 代码，判断是否 Retina 屏：
                    if(window.devicePixelRatio && devicePixelRatio >= 2){
                        document.querySelector('ul').className = 'scale-1px';
                    }    
                     
                2.
                    viewport + rem    
                3.
                    background-image    
                4.
                    border-image    
                5.
                    box-shadow
                    .box-shadow-1px {
                        box-shadow: inset 0px -1px 1px -1px #000;
                    }    
                6.
                    .background-gradient-1px{
                        background: -webkit-gradient(linear, left top, left bottom, color-stop(.5, transparent), color-stop(.5, #c8c7cc), to(#c8c7cc)) left bottom repeat-x;
                        background-size: 100% 1px;
                    }    
                7.
                    0.5px    
                 
                   
