/*
*js部分
*vanilla js script
*/
// 获得 drop-content里面的 img数组
var imgUrlArray = [
    ['imgs/phones/phone1.png','imgs/phones/phone2.png','imgs/phones/phone3.png','imgs/phones/phone4.png','imgs/phones/phone5.png','imgs/phones/phone6.png'],
    ['imgs/hongmi/hongmi1.jpg','imgs/hongmi/hongmi2.png','imgs/hongmi/hongmi3.jpg','imgs/hongmi/hongmi4.jpg','imgs/hongmi/hongmi5.png','imgs/hongmi/hongmi6.jpg'],
    ['imgs/tvs/tv1.jpg','imgs/tvs/tv2.jpg','imgs/tvs/tv3.jpg','imgs/tvs/tv4.jpg','imgs/tvs/tv5.png','imgs/tvs/tv6.jpg'],
    ['imgs/laptops/lp1.jpg','imgs/laptops/lp2.png','imgs/laptops/lp3.png','imgs/laptops/lp4.png','imgs/laptops/lp5.png','imgs/laptops/lp6.png'],
    ['imgs/homeAppliances/h1.png','imgs/homeAppliances/h2.png','imgs/homeAppliances/h3.jpg','imgs/homeAppliances/h4.png','imgs/homeAppliances/h5.jpg','imgs/homeAppliances/h6.jpg'],
    ['imgs/modems/m1.png','imgs/modems/m2.png','imgs/modems/m3.png','imgs/modems/m4.jpg','imgs/modems/m5.jpg','imgs/modems/m6.jpg'],
    ['imgs/smartHomes/s1.jpg','imgs/smartHomes/s2.jpg','imgs/smartHomes/s3.jpg','imgs/smartHomes/s4.png','imgs/smartHomes/s5.jpg','imgs/smartHomes/s6.png']
]
//获取drop-content内容
var dropYes = document.getElementById('drop-yes')
var dropped = document.getElementById('dropped')
var dropContent = document.getElementById('drop-content')
var imgEles = dropContent.querySelectorAll('img')//显示6个图片
// 获得nav-text元素数组
var navTexts = document.getElementById('drop-yes').getElementsByClassName('nav-text')//长度为7
// 遍历imgs
for(var i = 0;i<navTexts.length;i++){
// 获取mouseup nav-text 事件
// 匿名函数将 i 赋值给 textIndex
    (function(textIndex){
        navTexts[textIndex].onmouseover = function(){
            //显示dropped框,height 0-200
            dropped.style.height = 200 + 'px';
            // 显示图片
            for(var j = 0; j < imgUrlArray[textIndex].length;j++){
                imgEles[j].setAttribute('src',imgUrlArray[textIndex][j])
            }
        }
        //离开 dropYes 区域后，dropped框消失
        dropYes.onmouseleave = function(){
            dropped.style.height = 0 + 'px';
        }
    })(i)
}

