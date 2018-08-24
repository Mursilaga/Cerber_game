function createExit (scene, x, y) {
    scene.anims.create({
        key: 'exit_animate',
        frames: scene.anims.generateFrameNumbers('exit', { start: 0, end: 11 }),
        frameRate: 8,
        repeat: -1
    });  
    
    scene.exit = scene.physics.add.sprite(x, y, 'exit');
    scene.exit.setVelocity(0, 0);
    scene.physics.add.collider(scene.exit, scene.platforms);
    scene.physics.add.collider(scene.player, scene.exit, function(){scene.need_new_scene = true}, null, scene);
    scene.exit.anims.play('exit_animate', true);
}