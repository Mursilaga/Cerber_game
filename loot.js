function createLoot (scene) {
    scene.anims.create({
        key: 'soul_fly_left',
        frames: scene.anims.generateFrameNumbers('soul', { start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
    });
    
    scene.anims.create({
        key: 'soul_fly_right',
        frames: scene.anims.generateFrameNumbers('soul', { start: 5, end: 9 }),
        frameRate: 8,
        repeat: -1
    });
        
    scene.loot = scene.physics.add.group({
        key: 'soul',
        repeat: 12,
        setXY: { x: scene.player.x - 300, y: scene.player.y - 300, stepX: 70 }
    });
    
    scene.loot.children.iterate(function (child) {
        child.setBounce(1);
        child.setCollideWorldBounds(true);
        child.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-20, 20));
        child.setSize(24, 30, true);
        child.setOffset(12, 4);
        child.allowGravity = false;
    });	
}

function animateSouls (scene) {
    if(scene.loot != undefined && scene.loot.countActive(true) > 0) {
        scene.loot.children.iterate(function (child) {
            if(child.body.velocity.x > 0)
                child.anims.play('soul_fly_right', true);
            else
                child.anims.play('soul_fly_left', true);
        });
    }
}

function collectLoot (player, loot)
{
    config.score += 10;
    this.scoreText.setText(config.score);
        
    loot.disableBody(true, true);
    
    var x = Phaser.Math.Between(player.x - 400, player.x + 400);
    if( (x - player.x > 0) && (x - player.x < 100) )
        x += 100;
    else if ( (x - player.x < 0) && (x - player.x > -100) )
        x -= 100;
    
    loot.enableBody(true, x, player.y - 400, true, true).setVelocity(Phaser.Math.Between(-200, 200), 20);
    
    if(this.enemies != undefined) {
        spawnEnemy(this);
    }

    if(this.meteors != undefined) {
        increaseMeteorsCount(this);
    }
}