/*
*js部分
*vanilla js script
*/
// 获得 drop-content里面的 img数组
var imgUrlArray = [
    ['imgs/phones/phone1.png','imgs/phones/phone2.png','imgs/phones/phone3.png','imgs/phones/phone4.png','imgs/phones/phone5.png','imgs/phones/phone6.png',],
    ['imgs/hongmi/hongmi1.jpg','imgs/hongmi/hongmi2.png','imgs/hongmi/hongmi3.jpg','imgs/hongmi/hongmi4.jpg','imgs/hongmi/hongmi5.png','imgs/hongmi/hongmi6.jpg',],
    ['imgs/tvs/tv1.jpg','imgs/tvs/tv2.jpg','imgs/tvs/tv3.jpg','imgs/tvs/tv4.jpg','imgs/tvs/tv5.png','imgs/tvs/tv6.jpg',],
    ['imgs/laptops/lp1.jpg','imgs/laptops/lp2.png','imgs/laptops/lp3.png','imgs/laptops/lp4.png','imgs/laptops/lp5.png','imgs/laptops/lp6.png',]
]
var imgEles = document.getElementById('drop-content').querySelectorAll('img')
// 获得nav-text元素数组
var navTexts = document.getElementById('drop-yes').getElementsByClassName('nav-text')
// 遍历imgs
for(var i = 0;i<imgEles.length;i++){
// 获取mouseup nav-text 事件
// textInex 和 i 的数量相同，应该同步
    (function(textIndex){
        navTexts[textIndex].onmouseover = function(){
            for(var j = 0; j < imgEles.length;j++){
                imgEles[j].setAttribute('src',imgUrlArray[textIndex][j])
            }
        }
    })(i)
}
