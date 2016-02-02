export class View {
  constructor() {
  }
  render(playerModel, platformModels) {
    this.renderPlayer(playerModel)
    // this.renderBackground(playerModel)
    this.renderPlatforms(platformModels)
  }

  // renderBackground(playerModel) {

  //   $('.background').css('background-position',`${playerModel.positionX - 46}% ${playerModel.positionY}%`)
  //   $('.trees').css('background-position', `${playerModel.positionX - 46}% ${playerModel.positionY}%` )
  // }

  renderPlayer(playerModel) {
   const playerMove = (playerModel.positionX < 46 || playerModel.positionX > 147)
   if(playerMove) {
    const x = (playerModel.positionX > 46) ? playerModel.positionX - 105 : playerModel.positionX
    $('.player').css('bottom', playerModel.positionY + '%')
    $('.player').css('left', x +'%')
  }
}
  renderPlatforms(platformModels) {
    $('.platform').css('left',`${platformModels.positionX - 46}% ${platformModels.positionY}%`)
  }
}