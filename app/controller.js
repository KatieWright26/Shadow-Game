import {playerModel} from './playerModel.js'
import {View} from '.view.js'

export class Controller {
  constructor() {
    this.playerModel = new playerModel()
    this.view = new View()
  }
}