//js部分，vanilla es6

//icon-nav区域的js动作，鼠标滑倒商品分类上，展开商品列表
let imgUrlArray = [//图片本地链接
    ['imgs/phones/phone1.png','imgs/phones/phone2.png','imgs/phones/phone3.png','imgs/phones/phone4.png','imgs/phones/phone5.png','imgs/phones/phone6.png'],
    ['imgs/hongmi/hongmi1.jpg','imgs/hongmi/hongmi2.png','imgs/hongmi/hongmi3.jpg','imgs/hongmi/hongmi4.jpg','imgs/hongmi/hongmi5.png','imgs/hongmi/hongmi6.jpg'],
    ['imgs/tvs/tv1.jpg','imgs/tvs/tv2.jpg','imgs/tvs/tv3.jpg','imgs/tvs/tv4.jpg','imgs/tvs/tv5.png','imgs/tvs/tv6.jpg'],
    ['imgs/laptops/lp1.jpg','imgs/laptops/lp2.png','imgs/laptops/lp3.png','imgs/laptops/lp4.png','imgs/laptops/lp5.png','imgs/laptops/lp6.png'],
    ['imgs/homeAppliances/h1.png','imgs/homeAppliances/h2.png','imgs/homeAppliances/h3.jpg','imgs/homeAppliances/h4.png','imgs/homeAppliances/h5.jpg','imgs/homeAppliances/h6.jpg'],
    ['imgs/modems/m1.png','imgs/modems/m2.png','imgs/modems/m3.png','imgs/modems/m4.jpg','imgs/modems/m5.jpg','imgs/modems/m6.jpg'],
    ['imgs/smartHomes/s1.jpg','imgs/smartHomes/s2.jpg','imgs/smartHomes/s3.jpg','imgs/smartHomes/s4.png','imgs/smartHomes/s5.jpg','imgs/smartHomes/s6.png']
]
// 获得dropYes元素 和 dropped 元素
let dropYes = document.getElementById('drop-yes')
let dropped = document.getElementById('dropped')
//获取drop-content里的img元素
let dropContent = document.getElementById('drop-content')
let imgEles = dropContent.querySelectorAll('img')//显示6个图片
// 获得nav-text元素，分类文字们
let navTexts = dropYes.getElementsByClassName('nav-text')//长度为7
// 遍历 商品分类，鼠标移到某个分类上面，就展开drop-content显示详细商品
for(let i = 0;i<navTexts.length;i++){
// 获取mouseup nav-text 事件
    navTexts[i].onmouseover = function(){
        //显示dropped框,height 0-200,过渡效果
        dropped.style.height = 200 + 'px';
        // 显示图片
        for(let j = 0; j < imgUrlArray[i].length;j++){
            imgEles[j].setAttribute('src',imgUrlArray[i][j])
        }
    }
    //离开 dropYes 区域后，dropped框消失
    dropYes.onmouseleave = function(){
        dropped.style.height = 0 + 'px';
    }
}

//list & sliders 区域js动作

//想sliders里面传递图片链接
let sliderImgUrl = [
    'imgs/sliders/1.jpg',
    'imgs/sliders/2.jpg',
    'imgs/sliders/3.jpg',
    'imgs/sliders/4.jpg',
    'imgs/sliders/5.jpg'
]
// 获取slider框
let sliders = document.getElementById('sliders')
// 获取img元素
let sliderImg = sliders.getElementsByTagName('img')
// 遍历 
for(let i = 0; i < sliderImg.length; i++){
    sliderImg[i].setAttribute('src',sliderImgUrl[i])
}   

// 轮播动画
let numOfPic = 1
setInterval(function(){
    let leftValue = 1226 * numOfPic
    if(numOfPic <=  (sliderImg.length - 1)){
        sliders.style.left = -leftValue + 'px'
    }
    numOfPic++
    if(leftValue == 1226 * sliderImg.length){
        leftValue = 0
        sliders.style.left = -leftValue + 'px'
        numOfPic = 1
    }
    console.log(numOfPic)
},6000)

