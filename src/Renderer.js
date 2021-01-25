import scene from './Scene.js'
import camera from './Camera.js'
import machine from './Machine.js'
import './Box2Controller.js'
// import './Box2Displacement.js'
import './CameraController.js'

let renderer = new THREE.WebGLRenderer(
    { 
        //document.body.appendChild(renderer.domElement);
        canvas: document.getElementById('c'), 
        antialias: true 
    }
);
renderer.setSize(window.innerWidth, window.innerHeight);




// Enable Shadows in the Renderer
renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.BasicShadowMap;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;//better


//optional
renderer.setClearColor(0x5555ff);

//Machine
machine.addCallback(() => {
    renderer.render(scene, camera);
})
machine.run()