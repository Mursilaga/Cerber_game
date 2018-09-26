class SceneC extends Phaser.Scene {
    
    constructor ()
    {
        super('SceneC');
    
    }
    
    preload ()
    {
        this.load.image('CSpace', './images/SceneC_Background.png');
        this.load.image('CPlatform2', './images/CPlatform2.png');
        this.load.image('CPlatform3', './images/CPlatform3.png');
        this.load.image('CPlatform4', './images/CPlatform4.png');
        this.load.image('CPlatform5', './images/CPlatform5.png');
        
        this.platforms = this.physics.add.staticGroup();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.load.spritesheet('lava_purple',
            './images/lava32_purple.png',
            { frameWidth: 32, frameHeight: 32 } );
    }
    
    create ()
    {
        this.cameras.main.setBounds(0, 0, 4040, 600);
        this.physics.world.setBounds(0, 0, 4040, 600);
        
        this.add.image(1000, 300, 'CSpace').setScrollFactor(1,0);
        this.add.image(3000, 300, 'CSpace').setScrollFactor(1,0);
        
        this.player = addPlayer(this.physics, 300, 360);
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.followOffset.set(0, 0);
        
        createLoot(this);
        //createEnemies(this);
        createMeteors(this);
        sceneCBuildMap(this);
        createExit(this, this.physics.world.bounds.width - 100, this.physics.world.bounds.height - 250);
        addInterface(this);
        
        this.physics.add.collider(this.loot, this.platforms);
        //this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        
        this.physics.add.overlap(this.player, this.loot, collectLoot, null, this);
        //this.enemyCollider = this.physics.add.collider(this.player, this.enemies, hitEnemy, null, this);
                       
        this.lavaCollider = this.physics.add.collider(this.player, this.lava, hitEnemy, null, this);
        this.meteorCollider = this.physics.add.collider(this.player, this.meteors, hitEnemy, null, this);
        this.physics.add.collider(this.loot, this.lava);
        this.physics.add.collider(this.meteors, this.platforms, meteorLanding, null, this);
        //this.physics.add.collider(this.enemies, this.lava);

    }
    
    update (time, delta)
    {
        startNewSceneIfNeed(this);
        this.input.on('pointerdown', this.tapDown);
        this.input.on('pointerup', this.tapUp);
        
        //animateDemons(this);
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