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
    player.score += 10;
    this.scoreText.setText(player.score);
        
    loot.disableBody(true, true);
    
    var cx = Phaser.Math.Between(player.x - 400, player.x + 400);
    if( (x - player.x > 0) && (x - player.x < 100) )
        x += 100;
    else if ( (x - player.x < 0) && (x - player.x > -100) )
        x -= 100;
    
    loot.enableBody(true, cx, player.y - 400, true, true).setVelocity(Phaser.Math.Between(-200, 200), 20);
    
    var x = Phaser.Math.Between(player.x - 400, player.x + 400);
    if( (x - player.x > 0) && (x - player.x < 100) )
        x += 100;
    else if ( (x - player.x < 0) && (x - player.x > -100) )
        x -= 100;
    
    var evilstar = this.evilstars.create(x, player.y - 400, 'demon');
    evilstar.setBounce(1);
    evilstar.setCollideWorldBounds(true);
    evilstar.setVelocity(Phaser.Math.Between(-200, 200), 20);
    evilstar.allowGravity = false;
    evilstar.setSize(24, 40, true);
    evilstar.setOffset(21, 20);
}