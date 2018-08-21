function sceneDBuildMap(scene) {
    sceneD_setGround(scene.platforms, scene.physics.world);
    sceneD_set_platforms(scene.platforms, scene.physics.world);
}

function sceneD_set_platforms (platforms, world) { 
    //flying platforms
    platforms.create(1470,215, 'DPlatform1');
    platforms.create(2564,212, 'DPlatform1');
    platforms.create(3493,291, 'DPlatform1');
    
    platforms.create(1063,338, 'DPlatform2');
    platforms.create(2098,323, 'DPlatform2');
    platforms.create(3048,375, 'DPlatform2');
    
    platforms.create(432,350, 'DPlatform3');
    
    platforms.create(60,525, 'DPlatform4');
    
    //platforms.create(2400,231, 'DPlatform3');
    //platforms.create(2931,129, 'DPlatform3');
    //platforms.create(3380,461, 'DPlatform3');
}

function sceneD_setGround(platforms, world) {
    setField(platforms, 'DPlatform1', 0, world.bounds.width, world.bounds.height+10, 100);
}