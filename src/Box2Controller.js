import mesh from './Box2.js'
import { car } from './Car.js'
import machine from './Machine.js'
import scene from './Scene.js'
import { getDelta } from './Clock.js'
import keyListener from './KeyListener.js'

let gravity = -9.81 * 2
let velocity = 0
let trigger = false
let speed = 20
let isRunning  = false
let lastN = []
document.addEventListener('keydown', (e) => {
    if (e.key == ' ') {
        trigger = true
    }
})

let sensibility = 0.1
let is_chrome = /chrome/i.test(navigator.userAgent);
if (is_chrome) {
    sensibility = sensibility * Math.PI * .75 * 2
}

keyListener.start()

machine.addCallback(() => {
    let n = getDelta();

    //softener
    lastN.push(n)
    if(lastN.length>10){
        n = lastN.reduce((a, b) => a + b, 0)/11;
        lastN.shift()
        console.log(11);
    }

    let ray = new THREE.Raycaster(mesh.position, new THREE.Vector3(0, -1, 0), 0, .5);
    let isGrounded = !!ray.intersectObjects(scene.children)[0]

    //configure gravity
    velocity += gravity * n
    mesh.position.y += velocity * n

    //stop free fall
    if (isGrounded && velocity < 0) {
        velocity = 0;
        mesh.position.y = 0.5
    }

    //trigger jump
    if (trigger && isGrounded) {
        velocity = 10;
        trigger = false
    }


    //displacement
    let distance = speed * n;

    isRunning  = false
    if (keyListener.isPressed(87)) {
        mesh.position.x += Math.sin(mesh.rotation.y) * distance;
        mesh.position.z += Math.cos(mesh.rotation.y) * distance;
        isRunning  = true
    }
    if (keyListener.isPressed(83)) {
        mesh.position.x -= Math.sin(mesh.rotation.y) * distance /2;
        mesh.position.z -= Math.cos(mesh.rotation.y) * distance /2;
        isRunning  = true
    }

    //rotation
    if (keyListener.isPressed(65) && isRunning) {
        mesh.rotation.y += sensibility;
    }
    if (keyListener.isPressed(68) && isRunning) {
        mesh.rotation.y -= sensibility
    }

    //rotation
    if (car) {
        car.rotation.y = mesh.rotation.y
        car.position.set(mesh.position.x,mesh.position.y-.5, mesh.position.z)
    }



})
