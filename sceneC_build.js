function sceneCBuildMap(scene) {
    sceneCSetGround(scene.platforms, scene.physics.world);
    //sceneBSetPlatforms(scene.platforms, scene.physics.world.bounds.height);
    //setPlatformCollision(scene.platforms);
    //sceneBSetLava(scene);
}

function sceneCSetGround(platforms, world) {
    setField(platforms, 'BPlatform', 0, world.bounds.width, world.bounds.height-5, 100);
}