export class playerModel {
  constructor() {
    console.log(this)
    this.positionX = 0
    this.positionY = 0
    this.velocityX = 0
    this.velocityY = 0
    this.jumpAcceleration = 20
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
  player.velocityY += player.jumpAcceleration
  // player.velocityX += player.jumpAcceleration / 10
}

function updatePhysics(player) {
  player.positionY += player.velocityY
  player.positionX += player.velocityX
  console.log(player.positionY)
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
