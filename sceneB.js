class SceneB extends Phaser.Scene {
    
    constructor ()
    {
        super('SceneB');
    }
    
    preload ()
    {
        this.load.image('BSpace', './images/SceneB_Background.jpg');
        this.load.image('BPlatform', './images/platform.png');
        this.load.image('BPlatform2', './images/BPlatform2.png');
        this.load.image('BPlatform3', './images/BPlatform3.png');
        this.load.image('BPlatform4', './images/BPlatform4.png');
        this.load.image('BPlatform5', './images/BPlatform5.png');
            
        this.load.spritesheet('lava',
            './images/lava32.png',
            { frameWidth: 32, frameHeight: 32 } );
        
        this.load.spritesheet('meteor',
        './images/meteor.png',
        { frameWidth: 12, frameHeight: 32 } );
        
        this.load.spritesheet('exit',
            './images/exit.png',
            { frameWidth: 182.99, frameHeight: 420.67 } );

        this.load.spritesheet('soul',
            './images/soul.png',
            { frameWidth: 48, frameHeight: 36 } );

        this.load.spritesheet('demon', 
            './images/demon.png',
            { frameWidth: 66, frameHeight: 62 } );
        
        this.platforms = this.physics.add.staticGroup();
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    create ()
    {
        this.cameras.main.setBounds(0, 0, 4800, 600);
        this.physics.world.setBounds(0, 0, 4800, 600);
        
    //    this.add.image(1600, 300, 'BSpace').setScrollFactor(1,0);
    //    this.add.image(4800, 300, 'BSpace').setScrollFactor(1,0);
    //    this.add.image(8000, 300, 'BSpace').setScrollFactor(1,0);
    //    this.add.image(11200, 300, 'BSpace').setScrollFactor(1,0);        
        
        this.player = add_player(this.physics, 300, 360);
    
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.followOffset.set(0, 0);
                
        this.anims.create({
            key: 'demon_fly_left',
            frames: this.anims.generateFrameNumbers('demon', { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });
        
        this.anims.create({
            key: 'demon_fly_right',
            frames: this.anims.generateFrameNumbers('demon', { start: 6, end: 11 }),
            frameRate: 8,
            repeat: -1
        });
        
        this.evilstars = this.physics.add.group();
        createLoot(this);
        create_meteors(this);
        sceneBBuildMap(this);
        createExit(this, this.physics.world.bounds.width - 100, this.physics.world.bounds.height - 250);
        add_interface(this);
        
        this.physics.add.collider(this.loot, this.platforms);
        this.physics.add.collider(this.evilstars, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        
        this.physics.add.overlap(this.player, this.loot, collectLoot, null, this);
        this.enemyCollider = this.physics.add.collider(this.player, this.evilstars, hitEnemy, null, this);
                       
        this.lavaCollider = this.physics.add.collider(this.player, this.lava, hitEnemy, null, this);
        this.meteorCollider = this.physics.add.collider(this.player, this.meteors, hitEnemy, null, this);
        this.physics.add.collider(this.loot, this.lava);
        this.physics.add.collider(this.evilstars, this.lava);
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
        
        //randomly_add_meteor(this);
        //this.scene.start('SceneD');
    }
    
    tapDown (pointer) {
        clickDown(this.scene, pointer);
    }
    
    tapUp (pointer) {
        clickUp(this.scene, pointer);
    }
}