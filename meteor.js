function createMeteors(scene) {  
    scene.anims.create({
        key: 'meteor_fly',
        frames: scene.anims.generateFrameNumbers('meteor', { start: 0, end: 1 }),
        frameRate: 4,
        repeat: -1
    });
    
    scene.meteors = scene.physics.add.group();
    scene.physics.add.collider(scene.meteors, scene.platforms, meteorLanding, null, this);
    scene.meteorsChance = 5;
}

function meteorLanding (meteor, platform) {
    meteor.destroy();
}

function addMeteor(scene) {
    var missile = scene.meteors.create(Phaser.Math.Between(scene.player.x - 400, scene.player.x + 400), 0, 'meteor');
    missile.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(50, 150));
    missile.setSize(10, 10, true);
    missile.setGravity(0, -200);
    missile.setOrigin(0.5, 0.8);
    missile.name = "meteor";
    missile.anims.play('meteor_fly', true);
    if(missile.body.velocity.x != 0) {
        let rot = Math.atan(missile.body.velocity.y / missile.body.velocity.x)
        if(rot < 0)
            missile.setRotation(rot + 1.57);
        else
            missile.setRotation(rot - 1.57);
    }
    else 
        missile.setRotation(0);
}

function randomlyAddMeteor(scene) {
    if(Phaser.Math.Between(0, 1000) < scene.meteorsChance) 
        addMeteor(scene);
}

function increaseMeteorsCount(scene) {
    scene.meteorsChance += 5;
}