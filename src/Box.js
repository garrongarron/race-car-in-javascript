// import machine from './Machine.js'
// import {colliders} from './ColliderSystem.js'

let mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshPhongMaterial({color:0xff0000})
);
mesh.name = 'Box-Static'

mesh.position.y += 0;
// The cube can have shadows cast onto it, and it can cast shadows
mesh.receiveShadow = true;
mesh.castShadow = true;

// var box3 = new THREE.Box3()
// box3.setFromPoints(mesh.geometry.vertices);
// var collider = new THREEx.ColliderBox3(mesh, box3)

// var collider = THREEx.Collider.createFromObject3d(mesh)
// colliders.push(collider)

export default mesh