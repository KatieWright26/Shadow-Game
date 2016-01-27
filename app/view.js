export class View {
  constructor() {
  }
  render(playerModel) {
    const playerMove = (playerModel.positionX < 46 || playerModel.positionX > 147)
    if(playerMove) {
      const x = (playerModel.positionX > 46) ? playerModel.positionX - 105 : playerModel.positionX
      $('.player').css('bottom', playerModel.positionY+'%')
      $('.player').css('left', x +'%')

    }
    else {
      $('.background').css('background-position',`${playerModel.positionX - 46}% ${playerModel.positionY}%`)
      $('.trees').css('background-position', `${playerModel.positionX - 46}% ${playerModel.positionY}%` )
      $('.platform').css('left',`${playerModel.positionX - 46}% ${playerModel.positionY}%`)
    }
    // if(isCollision) {
      // $('.player').bounce backwards
      // $('.player') and change image to falling
    //}
    }
}
