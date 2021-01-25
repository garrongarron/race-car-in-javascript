const geometry = new THREE.BoxGeometry(.1,.1,.1)
// const geometry = new THREE.SphereGeometry(.5, 32, 32);

let mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshPhongMaterial({ color: 0xff00ff })
);
mesh.name = 'Box2-movil'
mesh.position.y = .5;
mesh.position.x += 3;

// The cube can have shadows cast onto it, and it can cast shadows
// mesh.receiveShadow = true;
// mesh.castShadow = true;




export default mesh