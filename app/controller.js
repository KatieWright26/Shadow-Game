import {playerModel} from './playerModel.js'
import {View} from './view.js'
import {platformModel} from './platformModel'

export class Controller {
  constructor() {
    this.playerModel = new playerModel()
    this.view = new View()
    this.platformModel = new platformModel()
    
    setInterval(this.view.render.bind(this.view), 100, this.playerModel, this.platformModel)
  }
  move(direction) {
    this.playerModel.move(direction)
  }
}
