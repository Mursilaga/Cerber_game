function createEnemies(scene) {
    scene.anims.create({
        key: 'demon_fly_left',
        frames: scene.anims.generateFrameNumbers('demon', { start: 0, end: 5 }),
        frameRate: 8,
        repeat: -1
    });
    
    scene.anims.create({
        key: 'demon_fly_right',
        frames: scene.anims.generateFrameNumbers('demon', { start: 6, end: 11 }),
        frameRate: 8,
        repeat: -1
    });
    
    scene.enemies = scene.physics.add.group();
}
function animateDemons (scene) 
{
    if(scene.enemies != undefined && scene.enemies.countActive(true) > 0) {
        scene.enemies.children.iterate(function (child) {
            if(child.body.velocity.x > 0)
                child.anims.play('demon_fly_right', true);
            else
                child.anims.play('demon_fly_left', true);
        });
    }
}