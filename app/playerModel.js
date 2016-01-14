export class playerModel {
  constructor() {
    this.positionX = 0
    this.positionY = 9
  }
  move(direction) {
     console.log('direction is', direction)
     console.log(this.positionX)
     console.log(this.positionY)
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
  console.log(player)
  return player.positionX !== 94
}

function playerNotAtLeftEdge(player) {
  console.log(player)
  return player.positionX !== 0
}

function playerNotAtTopEdge(player) {
  console.log(player)
  return player.positionY !== 57
}

function playerNotAtBottomEdge(player) {
  console.log(player)
  return player.positionY !== 9
}
