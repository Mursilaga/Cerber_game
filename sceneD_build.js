function sceneDBuildMap(scene) {
    sceneDSetGround(scene.platforms, scene.physics.world);
    sceneDSetPlatforms(scene.platforms, scene.physics.world.bounds.height);
    setPlatformCollision(scene.platforms);
    sceneDSetLava(scene);
}

function sceneDSetLava(scene) {
    scene.anims.create({
        key: 'lava_green_animate',
        frames: scene.anims.generateFrameNumbers('lava_green', { start: 0, end: 7 }),
        frameRate: 8,
        repeat: -1
    });

    scene.lava = scene.physics.add.staticGroup();
    setField(scene.lava, 'lava_green', 0, scene.physics.world.bounds.width, scene.physics.world.bounds.height-16, 32);
    
    scene.lava.children.iterate(function (child) {
        child.setSize(32, 25, true).setOffset(0, 7).anims.play('lava_green_animate', true);
    });
}

function sceneDSetPlatforms (platforms, y_max) { 
    platforms.create(371,  y_max-169, 'DPlatform2');
    platforms.create(371,  y_max-324, 'DPlatform2');
    platforms.create(476,  y_max-129, 'DPlatform2');
    platforms.create(510,  y_max-391, 'DPlatform2');
    platforms.create(587,  y_max-80,  'DPlatform2');
    platforms.create(821,  y_max-392, 'DPlatform2');
    platforms.create(959,  y_max-299, 'DPlatform2');
    platforms.create(1257, y_max-79,  'DPlatform2');
    platforms.create(1263, y_max-299, 'DPlatform2');
    platforms.create(1410, y_max-392, 'DPlatform2');
    platforms.create(1753, y_max-311, 'DPlatform2');
    platforms.create(1914, y_max-403, 'DPlatform2');
    platforms.create(2023, y_max-101, 'DPlatform2');
    platforms.create(2045, y_max-465, 'DPlatform2');
    platforms.create(2175, y_max-48,  'DPlatform2');
    platforms.create(2341, y_max-90,  'DPlatform2');
    platforms.create(2365, y_max-453, 'DPlatform2');
    platforms.create(2470, y_max-381, 'DPlatform2');
    platforms.create(2597, y_max-289, 'DPlatform2');
    platforms.create(2912, y_max-425, 'DPlatform2');
    platforms.create(3023, y_max-476, 'DPlatform2');
    platforms.create(3095, y_max-221, 'DPlatform2');
    platforms.create(3099, y_max-79,  'DPlatform2');
    platforms.create(3155, y_max-425, 'DPlatform2');
    platforms.create(3211, y_max-288, 'DPlatform2');
    platforms.create(3431, y_max-449, 'DPlatform2');
    platforms.create(3469, y_max-288, 'DPlatform2');
    platforms.create(3533, y_max-495, 'DPlatform2');
    platforms.create(3678, y_max-459, 'DPlatform2');
    platforms.create(3692, y_max-179, 'DPlatform2');
    platforms.create(3807, y_max-415, 'DPlatform2');
    platforms.create(3807, y_max-79,  'DPlatform2');
    platforms.create(3817, y_max-301, 'DPlatform2');
    
    platforms.create(239,  y_max-228, 'DPlatform3');
    platforms.create(658,  y_max-463, 'DPlatform3');
    platforms.create(1113, y_max-204, 'DPlatform3');
    platforms.create(1409, y_max-205, 'DPlatform3');
    platforms.create(1575, y_max-463, 'DPlatform3');
    platforms.create(1885, y_max-191, 'DPlatform3');
    platforms.create(2208, y_max-523, 'DPlatform3');
    platforms.create(2455, y_max-179, 'DPlatform3');
    platforms.create(2770, y_max-359, 'DPlatform3');
    platforms.create(2942, y_max-154, 'DPlatform3');
    platforms.create(3317, y_max-370, 'DPlatform3');
    platforms.create(3364, y_max-110, 'DPlatform3');
    platforms.create(3993, y_max-343, 'DPlatform3');
    
    platforms.create(45,   y_max-93, 'DPlatform4').name = "column";
    platforms.create(857,  y_max-93, 'DPlatform4').name = "column";
    platforms.create(1614, y_max-93, 'DPlatform4').name = "column";
    platforms.create(2680, y_max-93, 'DPlatform4').name = "column";
    platforms.create(3557, y_max-93, 'DPlatform4').name = "column";
}

function sceneDSetGround(platforms, world) {
    setField(platforms, 'DPlatform1', 0, world.bounds.width, world.bounds.height-5, 100);
    
    platforms.create(945,  world.bounds.height - 20, 'DPlatform3');
    
    platforms.create(153,  world.bounds.height - 43, 'DPlatform5');
    platforms.create(750,  world.bounds.height - 43, 'DPlatform5');
    platforms.create(1505, world.bounds.height - 43, 'DPlatform5');
    platforms.create(2787, world.bounds.height - 43, 'DPlatform5');
    platforms.create(3970, world.bounds.height - 43, 'DPlatform5');

}