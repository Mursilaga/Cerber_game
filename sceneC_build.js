function sceneCBuildMap(scene) {
    sceneCSetGround(scene.platforms, scene.physics.world);
    sceneCSetPlatforms(scene.platforms, scene.physics.world.bounds.height);
    setPlatformCollision(scene.platforms);
    sceneCSetLava(scene);
}

function sceneCSetGround(platforms, world) {
    setField(platforms, 'BPlatform', 0, world.bounds.width, world.bounds.height-5, 100);
    platforms.create(273, world.bounds.height - 20, 'CPlatform3');
    platforms.create(759, world.bounds.height - 20, 'CPlatform3');
    platforms.create(1341, world.bounds.height - 20, 'CPlatform3');
    
    platforms.create(140, world.bounds.height - 43, 'CPlatform5');
    platforms.create(640, world.bounds.height - 43, 'CPlatform5');
    platforms.create(1023, world.bounds.height - 43, 'CPlatform5');
    platforms.create(140, world.bounds.height - 43, 'CPlatform5');
    platforms.create(140, world.bounds.height - 43, 'CPlatform5');
    platforms.create(2473, world.bounds.height - 43, 'CPlatform5');
}

function sceneCSetLava(scene) {
    scene.anims.create({
        key: 'lava_purple_animate',
        frames: scene.anims.generateFrameNumbers('lava_purple', { start: 0, end: 7 }),
        frameRate: 8,
        repeat: -1
    });

    scene.lava = scene.physics.add.staticGroup();
    setField(scene.lava, 'lava_purple', 0, scene.physics.world.bounds.width, scene.physics.world.bounds.height-16, 32);
    
    scene.lava.children.iterate(function (child) {
        child.setSize(32, 25, true).setOffset(0, 7).anims.play('lava_purple_animate', true);
    });
}


function sceneCSetPlatforms (platforms, y_max) {
    platforms.create(310,  y_max-300, 'CPlatform2');
    platforms.create(486,  y_max-92,  'CPlatform2');
    platforms.create(557,  y_max-160, 'CPlatform2');
    platforms.create(744,  y_max-275, 'CPlatform2');
    platforms.create(982,  y_max-300, 'CPlatform2');
    platforms.create(1160, y_max-159, 'CPlatform2');
    platforms.create(1202, y_max-395, 'CPlatform2');
    platforms.create(1253, y_max-214, 'CPlatform2');
    platforms.create(1343, y_max-267, 'CPlatform2');
    platforms.create(1769, y_max-204, 'CPlatform2');
    platforms.create(1860, y_max-163, 'CPlatform2');
    platforms.create(1955, y_max-133, 'CPlatform2');
    platforms.create(1989, y_max-372, 'CPlatform2');
    platforms.create(2073, y_max-416, 'CPlatform2');
    platforms.create(2239, y_max-262, 'CPlatform2');
    platforms.create(2333, y_max-310, 'CPlatform2');
    platforms.create(2389, y_max-398, 'CPlatform2');
    platforms.create(2711, y_max-361, 'CPlatform2');
    platforms.create(2735, y_max-189, 'CPlatform2');
    platforms.create(2855, y_max-255, 'CPlatform2');
    platforms.create(3095, y_max-220, 'CPlatform2');
    platforms.create(3176, y_max-142, 'CPlatform2');
    platforms.create(3275, y_max-352, 'CPlatform2');
    platforms.create(3385, y_max-303, 'CPlatform2');
    platforms.create(3627, y_max-216, 'CPlatform2');
    platforms.create(3714, y_max-443, 'CPlatform2');
    platforms.create(3739, y_max-346, 'CPlatform2');
    platforms.create(3962, y_max-300, 'CPlatform2');
    
    platforms.create(218,  y_max-261, 'CPlatform3');
    platforms.create(420,  y_max-342, 'CPlatform3');
    platforms.create(654,  y_max-209, 'CPlatform3');
    platforms.create(1076, y_max-354, 'CPlatform3');
    platforms.create(1331, y_max-449, 'CPlatform3');
    platforms.create(1471, y_max-328, 'CPlatform3');
    platforms.create(1661, y_max-257, 'CPlatform3');
    platforms.create(1880, y_max-329, 'CPlatform3');
    platforms.create(2132, y_max-202, 'CPlatform3');
    platforms.create(2201, y_max-449, 'CPlatform3');
    platforms.create(2252, y_max-395, 'CPlatform3');
    platforms.create(2982, y_max-310, 'CPlatform3');
    platforms.create(3164, y_max-419, 'CPlatform3');
    platforms.create(3594, y_max-486, 'CPlatform3');
    platforms.create(3837, y_max-382, 'CPlatform3');
    
    platforms.create(36,   y_max-93, 'CPlatform4').name = "column";
    platforms.create(843,  y_max-93, 'CPlatform4').name = "column";
    platforms.create(2585, y_max-93, 'CPlatform4').name = "column";
    platforms.create(3476, y_max-93, 'CPlatform4').name = "column";
    platforms.create(4000, y_max-93, 'CPlatform4').name = "column";
}