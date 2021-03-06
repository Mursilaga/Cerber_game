class SceneD extends Phaser.Scene {
    
    constructor ()
    {
        super('SceneD');
    
    }
    
    preload ()
    {
        this.load.image('DSpace', './images/SceneD_Background.png');
        
        this.load.image('DPlatform1', './images/DPlatform1.png');
        this.load.image('DPlatform2', './images/DPlatform2.png');
        this.load.image('DPlatform3', './images/DPlatform3.png');
        this.load.image('DPlatform4', './images/DPlatform4.png');
        this.load.image('DPlatform5', './images/DPlatform5.png');
        
        this.load.image('ground', './images/ground.png');
            
        this.load.spritesheet('lava_green',
            './images/lava32_green.png',
            { frameWidth: 32, frameHeight: 32 } );

        this.platforms = this.physics.add.staticGroup();
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    create ()
    {
        this.cameras.main.setBounds(0, 0, 3985, 600);
        this.physics.world.setBounds(0, 0, 3985, 600);
        
        this.add.image(1992, 300, 'DSpace');
        
        this.player = addPlayer(this.physics, 300, 200);
        
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.followOffset.set(0, 0);
        
        sceneDBuildMap(this);
        createEnemies(this);
        createLoot(this);
        addInterface(this);
        createMeteors(this);
        createExit(this, this.physics.world.bounds.width - 100, this.physics.world.bounds.height - 250);
        
        this.physics.add.collider(this.loot, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        
        this.physics.add.overlap(this.player, this.loot, collectLoot, null, this);
        this.enemyCollider = this.physics.add.collider(this.player, this.enemies, hitEnemy, null, this);
        
        this.meteorCollider = this.physics.add.collider(this.player, this.meteors, hitEnemy, null, this);
        this.physics.add.collider(this.meteors, this.platforms, meteorLanding, null, this);

        this.lavaCollider = this.physics.add.collider(this.player, this.lava, hitEnemy, null, this);
        this.physics.add.collider(this.loot, this.lava);
        this.physics.add.collider(this.meteors, this.platforms, meteorLanding, null, this);
        //this.player.ghost_mode = true;
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
        randomlyAddMeteor(this);
    }
    
    tapDown (pointer) {
        clickDown(this.scene, pointer);
    }
    
    tapUp (pointer) {
        clickUp(this.scene, pointer);
    }
}