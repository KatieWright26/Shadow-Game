export class View {
  constructor() {
  }
  render(playerModel) {
    const playerMove = (playerModel.positionX < 46 || playerModel.positionX > 100)
    if(playerMove) {
      $('.player').animate({$('.minion')})
      const x = (playerModel.positionX > 46) ? playerModel.positionX - 54 : playerModel.positionX
          $('.player').css('bottom', playerModel.positionY+'%')
          $('.player').css('left', x +'%')
    }
      else {
          $('.background').css('background-position',`${playerModel.positionX - 46}% ${playerModel.positionY}%`)
          $('.trees').css('background-position', `${playerModel.positionX - 86}% ${playerModel.positionY}%` )
    }
  }
}
