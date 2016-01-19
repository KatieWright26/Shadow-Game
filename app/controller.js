import {playerModel} from './playerModel.js'
import {View} from './view.js'
import {cameraModel} from './cameraModel'

export class Controller {
  constructor() {
    this.playerModel = new playerModel()
    this.view = new View()
    this.cameraModel = new cameraModel(this.playerModel)
  }
  move(direction) {
    this.playerModel.move(direction)
    this.view.render(this.playerModel)
  }
}
