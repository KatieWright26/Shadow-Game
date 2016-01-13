import {playerModel} from './playerModel.js'
import {View} from './view.js'

export class Controller {
  constructor() {
    this.playerModel = new playerModel()
    this.view = new View()
  }
  move(direction) {
    console.log("controller moving: " + direction)
    this.playerModel.move(direction)
    this.view.render(this.playerModel)
  }
}
