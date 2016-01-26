export class playerModel {
  constructor() {
    this.positionX = 0
    this.positionY = 0
    this.velocityX = 0
    this.velocityY = 0
    this.jumpAccelerationY = 20
    this.jumpAccelerationX = 10
    this.gravity = - 5
    this.obstacleOne
    setInterval(updatePhysics,100, this)
  }

  move(direction) {
    if((direction === 'right') && playerNotAtRightEdge(this)){
      this.positionX += 1
    } else if((direction === 'left') && playerNotAtLeftEdge(this)){
      this.positionX -= 1
    } else if((direction === 'left') && positionX === 33) {
      this.positionX
    }else if((direction === 'up') && playerNotAtTopEdge(this)){
     jump(this)
   } else if((direction === 'down') && playerNotAtBottomEdge(this)){
    this.positionY -= 1
  }
}
}

function jump(player) {
  player.velocityY += player.jumpAccelerationY
  player.velocityX += player.jumpAccelerationX
}

function updatePhysics(player) {
  player.positionY += player.velocityY
  // player.positionX += player.velocityX
  applyGravity(player)
}

function applyGravity(player) {
  if(player.positionY < 0) {
    player.velocityY = 0
    player.positionY = 0
    $('#minion').removeClass('bat').addClass('minion')
    return
  }
  player.velocityY += player.gravity
  // player.velocityX += player.positionX
}

function playerNotAtRightEdge(player) {
  return player.positionX !== 147
}

function playerNotAtLeftEdge(player) {
  return player.positionX !== 0
}

function playerNotAtTopEdge(player) {
  return player.positionY <= 55
}

function playerNotAtBottomEdge(player) {
  return player.positionY >= 0
}

function obstacleOne(player) {
  return player.positionX !== 33
}
// w = previous platform.w + platform.width + space between platforms
var platforms = [
{
  x: 50,
  y: 50,
  width: 400
},
{
  x: 600,
  y: 150,
  width: 250
},
{
  x: 1050,
  y: 300,
  width: 500
},
{
  x: 1300,
  y: 475,
  width: 200
},
]

function makePixelsFromPlatform(platform) {
  var arr = []
  for(var i = platform.x; i < (platform.x + platform.width); i++) {
    arr.push([i, platform.y])
  }
  return arr
}

var player = { x: playerModel.positionX, y: playerModel.positionY, width: 50}

function isColliding(player, platform) {
  if((player.x + player.width is equal to platform.x + platform.width) {
    return true
  }
}



