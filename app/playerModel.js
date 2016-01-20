export class playerModel {
  constructor() {
    this.positionX = 0
    this.positionY = 0
    this.velocityX = 0
    this.velocityY = 0
    this.acceleration = this.positionY + 1
    this.gravity = this.positionY - 1
  }
  move(direction) {
    console.log('position X: ',this.positionX)
    console.log('position Y: ',this.positionY)
    if((direction === 'right') && playerNotAtRightEdge(this)){
      this.positionX += 1
    } else if((direction === 'left') && playerNotAtLeftEdge(this)){
      this.positionX -= 1
    } else if((direction === 'up') && playerNotAtTopEdge(this)){
        this.positionY.jump()
    } else if((direction === 'down') && playerNotAtBottomEdge(this)){
      this.positionY -= 1
    }
  }
}

function jump() {
  this.velocityY += acceleration
  this.positionY += velocityY

  if(this.positionY === 55) {
    applyGravity()
  }
}

function applyGravity() {
  this.velocityY += this.gravity
  this.positionY += velocityY

  if(this.positionY <= 0) {
    this.positionY = 0
  }
}

function playerNotAtRightEdge(player) {
  return player.positionX !== 147
}

function playerNotAtLeftEdge(player) {
  return player.positionX !== 0
}

function playerNotAtTopEdge(player) {
  return player.positionY <= 57
}

function playerNotAtBottomEdge(player) {
  return player.positionY >= 0
}
