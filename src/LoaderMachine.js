const loader = new THREE.GLTFLoader();
let car
let ready = false
let getNumber = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let index = 0; index < 3; index++) {
    // let light = getLight()
    // scene.add(light)
    // light.position.set(getNumber(-50, 50), 6, getNumber(-50, 50));
}

let loaderMachine = (scene) => {

    loader.load(
        'models/pitsOfficeCorner.gltf',
        function (gltf) {
            // scene.add(gltf.scene);
            let master = gltf.scene;
            
            // gltf.scene.position.set(3, 0, 0)
            // gltf.scene.scale.set(.1, .1, .1)


            //////////////////////////////////////////////
            for (let index = 0; index < 3; index++) {
                let model = master.clone()
                scene.add(model);
                model.position.set(getNumber(-50, 50), 0, getNumber(-50, 50));
            }
            //////////////////////////////////////////////



            gltf.scene.traverse(function (node) {

                if (node.isMesh) { node.castShadow = true; }

            });
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

export default loaderMachine

