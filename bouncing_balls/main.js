// 获得canvas区域
const canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// 将可见视图的范围全部赋值给canvas
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
//生成随机数
function randomNum(min,max){
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// 生成随机的颜色
function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 创建球
function Ball(posX,posY,speedX,speedY,color,size){
    this.posX = posX
    this.posY = posY
    this.speedX = speedX
    this.speedY = speedY
    this.color = color
    this.size = size
}

// 在canvas中画出球
Ball.prototype.drawBall = function (){
    ctx.beginPath()
    ctx.fillStyle = this.color

    // arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.arc(this.posX,this.posY, this.size, 0, Math.PI*2)
    ctx.fill()
}
// 更新ball的位置
Ball.prototype.updatePos = function (){
    if ((this.posX + this.size) >= width) {
        this.speedX = -(this.speedX);
      }
    
      if ((this.posX - this.size) <= 0) {
        this.speedX = -(this.speedX);
      }
    
      if ((this.posY + this.size) >= height) {
        this.speedY = -(this.speedY);
      }
    
      if ((this.posY - this.size) <= 0) {
        this.speedY = -(this.speedY);
      }
    
      this.posX += this.speedX;
      this.posY += this.speedY;
}
// 创建35个球
let ballList = []
while(ballList.length<25){
    const radius = randomNum(10,20)
    ballList.push(new Ball(
        randomNum(0+radius,width-radius),
        randomNum(0+radius,height-radius),
        randomNum(-7,7),
        randomNum(-7,7),
        randomColor(),
        radius
        ))
}

function loop(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
    ctx.fillRect(0, 0, width, height)
    for(let i = 0; i < ballList.length; i++){
        ballList[i].drawBall()
        ballList[i].updatePos()
    }
    requestAnimationFrame(loop)
}
loop()

