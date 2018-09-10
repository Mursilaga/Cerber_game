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

function animateDemons (scene)  {
    if(scene.enemies != undefined && scene.enemies.countActive(true) > 0) {
        scene.enemies.children.iterate(function (child) {
            if(child.body.velocity.x > 0)
                child.anims.play('demon_fly_right', true);
            else
                child.anims.play('demon_fly_left', true);
        });
    }
}

function spawnEnemy (scene) {
    var x = Phaser.Math.Between(scene.player.x - 400, scene.player.x + 400);
    if( (x - scene.player.x > 0) && (x - scene.player.x < 100) )
        x += 100;
    else if ( (x - scene.player.x < 0) && (x - scene.player.x > -100) )
        x -= 100;
    
    var enemy = scene.enemies.create(x, scene.player.y - 400, 'demon');
    enemy.setBounce(1);
    enemy.setCollideWorldBounds(true);
    enemy.setVelocity(Phaser.Math.Between(-200, 200), 20);
    enemy.setSize(24, 40, true);
    enemy.setOffset(21, 20);
    enemy.name = "demon";
}