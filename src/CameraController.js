import camera from './Camera.js'
import mesh2 from './Box2.js'
import { car } from './Car.js'
import machine from './Machine.js'
// import keyListener from './KeyListener.js'

// let init = { x: 0, y: 0 }
// let current = { x: 0, y: 0 }
// let initialRotation = { x: 0, y: 0 }
// let flag = false
// let distance = 5
// let sensibility = 0.05
// let is_chrome = /chrome/i.test( navigator.userAgent );
// if(is_chrome){
//     sensibility = sensibility * Math.PI * .75 *2
// }
// window.addEventListener("mousedown", function (e) {
//     init.x = e.clientX
//     init.y = e.clientY;
//     initialRotation.x = camera.rotation.y
//     flag = true
// })
// window.addEventListener("mousemove", function (e) {
//     if (flag) {
//         current.x = e.clientX - init.x;
//         current.y = e.clientY - init.y;
//         camera.rotation.y = initialRotation.x + (current.x / screen.width) * Math.PI * 2
//     }

// })
// window.addEventListener("mouseup", function (e) {
//     flag = false
// })

let clamp = (initial, target, percentage) => {
    return initial + percentage * (target - initial)
}

machine.addCallback(() => {
    // if (keyListener.isPressed(65)) {
    //     camera.rotation.y -= sensibility;
    // }
    // if (keyListener.isPressed(68)) {
    //     camera.rotation.y += sensibility
    // }


    let x = mesh2.position.x - Math.sin(mesh2.rotation.y) * 5
    camera.position.x = clamp(camera.position.x, x, .1)

    let z = mesh2.position.z - Math.cos(mesh2.rotation.y) * 5
    camera.position.z = clamp(camera.position.z, z, .1)

    if (car) {
        camera.lookAt(car.position.x, car.position.y+2, car.position.z)
    }

    // camera.position.x = mesh2.position.x + Math.sin(camera.rotation.y) * distance;
    // camera.position.z = mesh2.position.z - Math.cos(camera.rotation.y) * distance;
    camera.position.y = clamp(camera.position.y, mesh2.position.y + 3, .1)
})