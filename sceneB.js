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
            { frameWidth: 110, frameHeight: 421 } );

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
        
        this.add.image(1600, 300, 'BSpace').setScrollFactor(1,0);
        this.add.image(4800, 300, 'BSpace').setScrollFactor(1,0);
        this.add.image(8000, 300, 'BSpace').setScrollFactor(1,0);
        this.add.image(11200, 300, 'BSpace').setScrollFactor(1,0);
        
        this.player = addPlayer(this.physics, 300, 360);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.followOffset.set(0, 0);
        
        createLoot(this);
        createEnemies(this);
        createMeteors(this);
        sceneBBuildMap(this);
        createExit(this, this.physics.world.bounds.width - 3900, this.physics.world.bounds.height - 250);
        addInterface(this);
        
        this.physics.add.collider(this.loot, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        
        this.physics.add.overlap(this.player, this.loot, collectLoot, null, this);
        this.enemyCollider = this.physics.add.collider(this.player, this.enemies, hitEnemy, null, this);
                       
        this.lavaCollider = this.physics.add.collider(this.player, this.lava, hitEnemy, null, this);
        this.meteorCollider = this.physics.add.collider(this.player, this.meteors, hitEnemy, null, this);
        this.physics.add.collider(this.loot, this.lava);
        this.physics.add.collider(this.enemies, this.lava);
    }

    
    update (time, delta) {
        startNewSceneIfNeed(this);
        this.input.on('pointerdown', this.tapDown);
        this.input.on('pointerup', this.tapUp);
        
        animateDemons(this);
        animateSouls(this);
        if(this.player.alive)
            animatePlayer(this.player);
        
        managePlayerColliders(this);
        
        //randomlyAddMeteor(this);
        //this.scene.start('SceneD');
    }
    
    tapDown (pointer) {
        clickDown(this.scene, pointer);
    }
    
    tapUp (pointer) {
        clickUp(this.scene, pointer);
    }
}