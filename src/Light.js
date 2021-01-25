let ambientLight = new THREE.AmbientLight(0xffffff, 0.2);

let getLight = () => {
    let light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(-3, 6, -3);
    light.castShadow = true;
    // Will not light anything closer than 0.1 units or further than 25 units
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    return light
}

export { ambientLight, getLight } 