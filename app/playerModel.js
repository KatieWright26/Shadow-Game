export class playerModel {
  constructor() {
    this.positionX = 0
    this.positionY = 0
  }
  move(direction){
    console.log('direction is', direction)
    if(direction === 'right'){
      this.positionX += 1
    }
    else if(direction === 'left'){
      this.positionX -= 1
    } else if(direction === 'up'){
      this.positionY += 1
    } else if(direction === 'down'){
      this.positionY -= 1
    }
  }
}
