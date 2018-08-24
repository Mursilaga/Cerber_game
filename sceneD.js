class SceneD extends Phaser.Scene {
    
    constructor ()
    {
        super('SceneD');
    
    }
    
    preload ()
    {
        this.load.image('DSpace', './images/SceneD_Background.png');
        this.load.image('DSpace2', './images/SceneD_Background2.png');
        
        this.load.image('DPlatform1', './images/DPlatform1.png');
        this.load.image('DPlatform2', './images/DPlatform2.png');
        this.load.image('DPlatform3', './images/DPlatform3.png');
        this.load.image('DPlatform4', './images/DPlatform4.png');
        this.load.image('DPlatform5', './images/DPlatform5.png');
        
        this.load.image('ground', './images/ground.png');
            
        this.load.spritesheet('cyborg', 
            './images/cyborg.png',
            { frameWidth: 44, frameHeight: 61 } );

        this.platforms = this.physics.add.staticGroup();
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    create ()
    {
        this.cameras.main.setBounds(0, 0, 4228, 900);
        this.physics.world.setBounds(0, 0, 4228, 900);
        
        this.add.image(528, 300, 'DSpace');
        this.add.image(1585, 300, 'DSpace2');
        this.add.image(2642, 300, 'DSpace');
        this.add.image(3699, 300, 'DSpace2');
        
        sceneDBuildMap(this);
        this.player = add_player(this.physics, 300, 200);
        
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.followOffset.set(0, 0);
        
        this.evilstars = this.physics.add.group();
        createLoot(this);
        add_interface(this);
        create_meteors(this);
        
        this.physics.add.collider(this.loot, this.platforms);
        this.physics.add.collider(this.evilstars, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        
        this.physics.add.overlap(this.player, this.loot, collectLoot, null, this);
        this.enemyCollider = this.physics.add.collider(this.player, this.evilstars, hitEnemy, null, this);
        
        var evilstar = this.evilstars.create(300, 500, 'cyborg');
        evilstar.setBounce(0);
        evilstar.setCollideWorldBounds(true);
        evilstar.setVelocity(Phaser.Math.Between(-100, -99), 0);
        evilstar.body.setGravityY(100);	
        
        this.anims.create({
            key: 'robot_left',
            frames: this.anims.generateFrameNumbers('cyborg', { start: 0, end: 5 }),
            frameRate: 4,
            repeat: -1
        });
    
        this.anims.create({
            key: 'robot_right',
            frames: this.anims.generateFrameNumbers('cyborg', { start: 6, end: 11 }),
            frameRate: 4,
            repeat: -1
        });
        
        evilstar.anims.play('robot_left', true);
        
        
        this.exit = this.physics.add.sprite(500, 50, 'exit');
        this.exit.setVelocity(0, 0);
        this.exit.allowGravity = false;
        this.physics.add.collider(this.exit, this.platforms);
        this.physics.add.collider(this.player, this.exit, function(){this.need_new_scene = true}, null, this);
        
        this.meteorCollider = this.physics.add.collider(this.player, this.meteors, hitEnemy, null, this);
        
    }
    
    update (time, delta) {
        startNewSceneIfNeed(this);
        
        this.input.on('pointerdown', this.tapDown);
        this.input.on('pointerup', this.tapUp);
        
        animate_demons(this);
        animateSouls(this);
        if(this.player.alive)
            animate_player(this.player);
        
        managePlayerColliders(this);      
        randomly_add_meteor(this);
    }
    
    tapDown (pointer) {
		clickDown(this.scene, pointer);
    }
    
    tapUp (pointer) {
		clickUp(this.scene, pointer);
    }
}