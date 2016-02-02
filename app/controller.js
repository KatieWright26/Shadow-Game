import {playerModel} from './playerModel.js'
import {View} from './view.js'
import {platformModel} from './platformModel'

export class Controller {
  constructor() {
    this.playerModel = new playerModel()
    this.view = new View()
    this.platformModel = new platformModel()
    
    setInterval(this.view.render, 100, this.playerModel, this.platformModel, this.view)
  }
  move(direction) {
    this.playerModel.move(direction)
  }
}
