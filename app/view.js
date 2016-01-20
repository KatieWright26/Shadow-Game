export class View {
  render(playerModel) {
    const playerMove = (playerModel.positionX < 46 || playerModel.positionX > 100)
    if(playerMove) {
      const x = (playerModel.positionX > 46) ? playerModel.positionX - 54 : playerModel.positionX
          $('.player').css('bottom', playerModel.positionY+'%')
          $('.player').css('left', x +'%')
    }
      else {
          $('.background').css('background-position',`${playerModel.positionX - 46}% ${playerModel.positionY}%`)
    }
  }
}
