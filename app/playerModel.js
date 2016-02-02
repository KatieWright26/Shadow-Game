export class playerModel {
  constructor() {
    this.positionX = 0
    this.positionY = 0
    this.velocityX = 0
    this.velocityY = 0
    this.jumpAccelerationY = 20
    this.jumpAccelerationX = 10
    this.gravity = - 5

    setInterval(updatePhysics,100, this)
  }
  
  move(direction) {
      if((direction === 'right') && playerNotAtRightEdge(this)){
        this.positionX += 1
      } else if((direction === 'left') && playerNotAtLeftEdge(this)){
        this.positionX -= 1
      }else if((direction === 'up') && playerNotAtTopEdge(this)){
       jump(this)
     } else if((direction === 'down') && playerNotAtBottomEdge(this)){
      this.positionY -= 1
    }
  }

// function makePixelsFromPlatform(platform) {
//   var arr = []
//   for(var i = platform.x; i < (platform.x + platform.width); i++) {
//     arr.push([i, platform.y])
//   }
//   console.log(arr.length)
//   return arr
// }

// function isCollidingWithLeftEdge(player, platform) {
//   if(((player.y + player.width) === platform.y) && ((player.x + player.width) === platform.x)) {
//     return true
//   } else {
//     return false
//   }
// }
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
  return player.positionX !== 197
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

