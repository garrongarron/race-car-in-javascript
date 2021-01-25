let camera = new THREE.PerspectiveCamera(60, screen.width / screen.height, 0.01, 1000);
let player = { height:1, speed:0.2, turnSpeed:Math.PI*0.02 };
camera.position.set(0, player.height, -8);
camera.lookAt(new THREE.Vector3(0, player.height, 0));




export default camera