export class View {
  render(playerModel) {
    console.log('data from model is: ' + playerModel.positionX)
    $('.player').css('left', playerModel.positionX+'%')
    $('.player').css('bottom', playerModel.positionY+'%')
  }
}
