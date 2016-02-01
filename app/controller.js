import {playerModel} from './playerModel.js'
import {View} from './view.js'

export class Controller {
  constructor() {
    this.playerModel = new playerModel()
    this.view = new View()
    this.platformModel = new platformModel()
    
    this.playerModel.buildMap(this.playerModel)
    setInterval(this.view.render, 100, this.playerModel)
  }
  move(direction) {
    this.playerModel.move(direction)
  }
}
