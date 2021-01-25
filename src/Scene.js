import mesh from './Box.js'
import ground from './Ground.js'
import mesh2 from './Box2.js'
import loadCar from './Car.js'
import loaderMachine from './LoaderMachine.js'
import { ambientLight, getLight } from './Light.js'


let scene = new THREE.Scene();
scene.add(ground)
scene.add(mesh)
scene.add(mesh2)
scene.add(ambientLight)
loaderMachine(scene)

let getNumber = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let index = 0; index < 10; index++) {
  let light = getLight()
  scene.add(light)
  light.position.set(getNumber(-50, 50), 6, getNumber(-50, 50));
}


loadCar(scene)


export default scene