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
          moveDown = true
          break;

          case left:
          moveLeft = true
          break;

          case right:
          moveRight = true
          break;
        }
      })
    })

  //   $(() => {
  //     $('.player').addEventListener('keyup', function(event){
  //       switch(event.keyCode)
  //       {
  //         case up:
  //         moveUp = false
  //         break;

  //         case down:
  //         moveDown = false
  //         break;

  //         case left:
  //         moveLeft = false
  //         break;

  //         case right:
  //         moveRight = false
  //         break;
  //       }
  //     },
  //     false)
  //   })
  // }
}
}
