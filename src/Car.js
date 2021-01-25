const loader = new THREE.GLTFLoader();
let car
let ready = false

let loadCar = (scene) => {

    loader.load(
        'police.gltf',
        function (gltf) {
            scene.add(gltf.scene);
            gltf.scene.position.set(3, 0, 0)
            gltf.scene.scale.set(.1, .1, .1)
            car = gltf.scene
            gltf.scene.traverse( function( node ) {

                if ( node.isMesh ) { node.castShadow = true; }
        
            } );
            ready = true
        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {
            console.log('An error happened', error);
        })
}

export default loadCar

export { car }
