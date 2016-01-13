import $ from 'jquery'
import {Controller} from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }

  listen() {
    let that = this
    console.log("listening in the router")
    $(() => {
      $('body').keydown((event) => {
        console.log(event.keyCode)
        var up = 38
        var left = 37
        var right = 39
        var down =  40

        switch(event.keyCode)
        {
          case up:
          that.controller.move('up')
          break;

          case down:
          that.controller.move('down')
          break;

          case left:
          that.controller.move('left')
          break;

          case right:
          that.controller.move('right')
          break;
        }
      })
    })
  }
}
