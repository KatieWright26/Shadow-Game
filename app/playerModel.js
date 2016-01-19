export class playerModel {
  constructor() {
    this.positionX = 0
    this.positionY = 0
  }
  move(direction) {
   
    if((direction === 'right') && playerNotAtRightEdge(this)){
      this.positionX += 1
    }
    else if((direction === 'left') && playerNotAtLeftEdge(this)){
      this.positionX -= 1
    } else if((direction === 'up') && playerNotAtTopEdge(this)){
      this.positionY += 1
    } else if((direction === 'down') && playerNotAtBottomEdge(this)){
      this.positionY -= 1
    }
  }
}

function playerNotAtRightEdge(player) {
  return player.positionX !== 94
}

function playerNotAtLeftEdge(player) {
  return player.positionX !== 0
}

function playerNotAtTopEdge(player) {
  return player.positionY !== 57
}

function playerNotAtBottomEdge(player) {
  return player.positionY !== 9
}
