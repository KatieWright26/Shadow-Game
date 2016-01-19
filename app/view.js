export class View {
  render(playerModel) {
    $('.player').css('left', playerModel.positionX+'%')
    $('.player').css('bottom', playerModel.positionY+'%')
  }
}
