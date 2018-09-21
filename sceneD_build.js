function sceneDBuildMap(scene) {
    sceneD_setGround(scene.platforms, scene.physics.world);
    sceneD_set_platforms(scene.platforms, scene.physics.world.bounds.height);
    setPlatformCollision(scene.platforms);
}

function sceneD_set_platforms (platforms, y_max) { 
    platforms.create(310,  y_max-300, 'DPlatform2');
    platforms.create(486,  y_max-92,  'DPlatform2');
    platforms.create(557,  y_max-160, 'DPlatform2');
    platforms.create(744,  y_max-275, 'DPlatform2');
    platforms.create(982,  y_max-300, 'DPlatform2');
    platforms.create(1160, y_max-159, 'DPlatform2');
    platforms.create(1202, y_max-395, 'DPlatform2');
    platforms.create(1253, y_max-214, 'DPlatform2');
    platforms.create(1343, y_max-267, 'DPlatform2');
    platforms.create(1769, y_max-204, 'DPlatform2');
    platforms.create(1860, y_max-163, 'DPlatform2');
    platforms.create(1955, y_max-133, 'DPlatform2');
    platforms.create(1989, y_max-372, 'DPlatform2');
    platforms.create(2073, y_max-416, 'DPlatform2');
    platforms.create(2239, y_max-262, 'DPlatform2');
    platforms.create(2333, y_max-310, 'DPlatform2');
    platforms.create(2389, y_max-398, 'DPlatform2');
    platforms.create(2711, y_max-361, 'DPlatform2');
    platforms.create(2735, y_max-189, 'DPlatform2');
    platforms.create(2855, y_max-255, 'DPlatform2');
    platforms.create(3095, y_max-220, 'DPlatform2');
    platforms.create(3176, y_max-142, 'DPlatform2');
    platforms.create(3275, y_max-352, 'DPlatform2');
    platforms.create(3385, y_max-303, 'DPlatform2');
    platforms.create(3627, y_max-216, 'DPlatform2');
    platforms.create(3714, y_max-443, 'DPlatform2');
    platforms.create(3739, y_max-346, 'DPlatform2');
    platforms.create(3962, y_max-300, 'DPlatform2');
    
    platforms.create(218,  y_max-261, 'DPlatform3');
    platforms.create(420,  y_max-342, 'DPlatform3');
    platforms.create(654,  y_max-209, 'DPlatform3');
    platforms.create(1076, y_max-354, 'DPlatform3');
    platforms.create(1331, y_max-449, 'DPlatform3');
    platforms.create(1471, y_max-328, 'DPlatform3');
    platforms.create(1661, y_max-257, 'DPlatform3');
    platforms.create(1880, y_max-329, 'DPlatform3');
    platforms.create(2132, y_max-202, 'DPlatform3');
    platforms.create(2201, y_max-449, 'DPlatform3');
    platforms.create(2252, y_max-395, 'DPlatform3');
    platforms.create(2982, y_max-310, 'DPlatform3');
    platforms.create(3164, y_max-419, 'DPlatform3');
    platforms.create(3594, y_max-486, 'DPlatform3');
    platforms.create(3837, y_max-382, 'DPlatform3');
    
    platforms.create(36,   y_max-93, 'DPlatform4').name = "column";
    platforms.create(843,  y_max-93, 'DPlatform4').name = "column";
    platforms.create(2585, y_max-93, 'DPlatform4').name = "column";
    platforms.create(3476, y_max-93, 'DPlatform4').name = "column";
    platforms.create(4000, y_max-93, 'DPlatform4').name = "column";
}

function sceneD_setGround(platforms, world) {
    setField(platforms, 'DPlatform1', 0, world.bounds.width, world.bounds.height+10, 100);
    
    platforms.create(273,  world.bounds.height - 20, 'DPlatform3');
    platforms.create(759,  world.bounds.height - 20, 'DPlatform3');
    platforms.create(1341, world.bounds.height - 20, 'DPlatform3');
    
    platforms.create(140,  world.bounds.height - 43, 'DPlatform5');
    platforms.create(640,  world.bounds.height - 43, 'DPlatform5');
    platforms.create(1023, world.bounds.height - 43, 'DPlatform5');
    platforms.create(140,  world.bounds.height - 43, 'DPlatform5');
    platforms.create(140,  world.bounds.height - 43, 'DPlatform5');
    platforms.create(2473, world.bounds.height - 43, 'DPlatform5');
}