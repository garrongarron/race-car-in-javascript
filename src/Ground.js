// import {colliders} from './ColliderSystem.js'

let mesh = new THREE.Mesh(
    new THREE.BoxGeometry(400 ,1 ,400),
    new THREE.MeshPhongMaterial({color:0x55FF55})
);
mesh.name = 'Ground'

mesh.position.y = -.5 ;
// The cube can have shadows cast onto it, and it can cast shadows
mesh.receiveShadow = true;
mesh.castShadow = true;





// collider
// var box3 = new THREE.Box3()
// box3.setFromPoints(mesh.geometry.vertices);
// var collider = new THREEx.ColliderBox3(mesh, box3)

// var collider = THREEx.Collider.createFromObject3d(mesh)
// colliders.push(collider)

export default mesh