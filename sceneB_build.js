function sceneBBuildMap(scene) {
    sceneB_setGround(scene.platforms, scene.physics.world);
    sceneB_set_platforms(scene.platforms);
    sceneB_set_lava(scene);
}

function sceneB_set_platforms (platforms)
{
    //platforms.create(489,422, 'BPlatform2');//.setScale(1.5).refreshBody();
    //platforms.create(1145,203, 'BPlatform2');//.setScale(1.5).refreshBody();
    platforms.create(310, 1860, 'BPlatform2');
    platforms.create(486, 2068, 'BPlatform2');
    platforms.create(557, 2000, 'BPlatform2');
    platforms.create(744, 1885, 'BPlatform2');
    platforms.create(982, 1860, 'BPlatform2');
    platforms.create(1160, 2001, 'BPlatform2');
    platforms.create(1202, 1765, 'BPlatform2');
    platforms.create(1253, 1946, 'BPlatform2');
    platforms.create(1343, 1893, 'BPlatform2');
    platforms.create(1769, 1956, 'BPlatform2');
    platforms.create(1860, 1997, 'BPlatform2');
    platforms.create(1955, 2027, 'BPlatform2');
    platforms.create(1989, 1788, 'BPlatform2');
    platforms.create(2073, 1744, 'BPlatform2');
    platforms.create(2239, 1898, 'BPlatform2'); 
    platforms.create(2333, 1850, 'BPlatform2');
    platforms.create(2389, 1762, 'BPlatform2');
    platforms.create(2711, 1799, 'BPlatform2');
    platforms.create(2735, 1971, 'BPlatform2');
    platforms.create(2855, 1905, 'BPlatform2');
    platforms.create(3095, 1940, 'BPlatform2');
    platforms.create(3176, 2018, 'BPlatform2');
    platforms.create(3275, 1808, 'BPlatform2');
    platforms.create(3385, 1857, 'BPlatform2');
    platforms.create(3627, 1944, 'BPlatform2');
    platforms.create(3714, 1717, 'BPlatform2');
    platforms.create(3739, 1814, 'BPlatform2');
    platforms.create(3962, 1860, 'BPlatform2');

    //platforms.create(373,180, 'BPlatform3');
    platforms.create(218,1899, 'BPlatform3');
    platforms.create(420,1818, 'BPlatform3');
    platforms.create(654,1951, 'BPlatform3');
    platforms.create(1076,1806, 'BPlatform3');
    platforms.create(1331,1711, 'BPlatform3');
    platforms.create(1471,1832, 'BPlatform3');
    platforms.create(1661,1903, 'BPlatform3');
    platforms.create(1880,1831, 'BPlatform3');
    platforms.create(2132,1958, 'BPlatform3');
    platforms.create(2201,1711, 'BPlatform3');
    platforms.create(2252,1765, 'BPlatform3');
    platforms.create(2982,1850, 'BPlatform3');
    platforms.create(3164,1741, 'BPlatform3');
    platforms.create(3594,1674, 'BPlatform3');
    platforms.create(3837,1778, 'BPlatform3');
    

    //platforms.create(60,485, 'BPlatform4');//.setScale(1.5).refreshBody();
    platforms.create(36,2067, 'BPlatform4');
    platforms.create(843,2068, 'BPlatform4');
    platforms.create(2585,2071, 'BPlatform4');
    platforms.create(3476,2072, 'BPlatform4');
    platforms.create(4000,2070, 'BPlatform4');

}

function sceneB_set_lava (scene) 
{
    scene.anims.create({
        key: 'lava_animate',
        frames: scene.anims.generateFrameNumbers('lava', { start: 0, end: 7 }),
        frameRate: 8,
        repeat: -1
    });
        
    scene.lava = scene.physics.add.staticGroup();
    setField(scene.lava, 'lava', 0, scene.physics.world.bounds.width, scene.physics.world.bounds.height - 16, 32);
    
    scene.lava.children.iterate(function (child) {
        child.setSize(32, 25, true).setOffset(0, 7).anims.play('lava_animate', true);
    });	

}

function sceneB_setGround(platforms, world)
{
    setField(platforms, 'BPlatform', 0, world.bounds.width, world.bounds.height+10, 100);
    platforms.create(273, world.bounds.height - 20, 'BPlatform3');
    platforms.create(759, world.bounds.height - 20, 'BPlatform3');
    platforms.create(1341, world.bounds.height - 20, 'BPlatform3');
    
    platforms.create(140, world.bounds.height - 43, 'BPlatform5');
    platforms.create(640, world.bounds.height - 43, 'BPlatform5');
    platforms.create(1023, world.bounds.height - 28, 'BPlatform5');
    platforms.create(140, world.bounds.height - 43, 'BPlatform5');
    platforms.create(140, world.bounds.height - 43, 'BPlatform5');
    platforms.create(2473, world.bounds.height - 16, 'BPlatform5');
}