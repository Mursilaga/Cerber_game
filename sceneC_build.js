function sceneCBuildMap(scene) {
    sceneCSetGround(scene.platforms, scene.physics.world);
    sceneCSetPlatforms(scene.platforms, scene.physics.world.bounds.height);
    setPlatformCollision(scene.platforms);
    sceneCSetLava(scene);
}

function sceneCSetGround(platforms, world) {
    setField(platforms, 'BPlatform', 0, world.bounds.width, world.bounds.height-5, 100);
    
    platforms.create( 147, world.bounds.height - 43, 'CPlatform5');
    platforms.create(2102, world.bounds.height - 43, 'CPlatform5');
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
    platforms.create(436,  y_max-332, 'CPlatform2');
    platforms.create(542,  y_max-210, 'CPlatform2');
    platforms.create(612,  y_max-58,  'CPlatform2');
    platforms.create(764,  y_max-130, 'CPlatform2');
    platforms.create(840,  y_max-393, 'CPlatform2');
    platforms.create(1062, y_max-268, 'CPlatform2');
    platforms.create(1193, y_max-343, 'CPlatform2');
    platforms.create(1432, y_max-69,  'CPlatform2');
    platforms.create(1479, y_max-331, 'CPlatform2');
    platforms.create(1514, y_max-513, 'CPlatform2');
    platforms.create(1559, y_max-190, 'CPlatform2');
    platforms.create(1687, y_max-479, 'CPlatform2');
    platforms.create(1813, y_max-416, 'CPlatform2');
    platforms.create(2151, y_max-258, 'CPlatform2');
    platforms.create(2302, y_max-345, 'CPlatform2');
    platforms.create(2463, y_max-416, 'CPlatform2');
    platforms.create(2511, y_max-270, 'CPlatform2');
    platforms.create(2563, y_max-91,  'CPlatform2');
    platforms.create(2662, y_max-346, 'CPlatform2');
    platforms.create(2953, y_max-312, 'CPlatform2');
    platforms.create(2976, y_max-489, 'CPlatform2');
    platforms.create(3111, y_max-432, 'CPlatform2');
    platforms.create(3128, y_max-223, 'CPlatform2');
    platforms.create(3246, y_max-372, 'CPlatform2');
    platforms.create(3285, y_max-158, 'CPlatform2');
    platforms.create(3607, y_max-370, 'CPlatform2');
    platforms.create(3617, y_max-192, 'CPlatform2');
    platforms.create(3705, y_max-432, 'CPlatform2');
    platforms.create(3809, y_max-491, 'CPlatform2');
    
    platforms.create(223,  y_max-422, 'CPlatform3');
    platforms.create(305,  y_max-212, 'CPlatform3');
    platforms.create(716,  y_max-329, 'CPlatform3');
    platforms.create(929,  y_max-197, 'CPlatform3');
    platforms.create(1013, y_max-459, 'CPlatform3');
    platforms.create(1215, y_max-140, 'CPlatform3');
    platforms.create(1330, y_max-405, 'CPlatform3');
    platforms.create(1767, y_max-189, 'CPlatform3');
    platforms.create(1958, y_max-370, 'CPlatform3');
    platforms.create(2343, y_max-178, 'CPlatform3');
    platforms.create(2782, y_max-181, 'CPlatform3');
    platforms.create(3429, y_max-445, 'CPlatform3');
    platforms.create(3431, y_max-280, 'CPlatform3');
    platforms.create(3477, y_max-48,  'CPlatform3');
    platforms.create(3776, y_max-281, 'CPlatform3');
    
    platforms.create(44,   y_max-93, 'CPlatform4').name = "column";
    platforms.create(2002, y_max-93, 'CPlatform4').name = "column";
    platforms.create(3941, y_max-93, 'CPlatform4').name = "column";
}