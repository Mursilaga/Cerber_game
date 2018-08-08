class SceneB extends Phaser.Scene {
    
    constructor ()
    {
        super('SceneB');
    }
    
    preload ()
    {
        this.load.image('BSpace', './images/SceneB_Background.jpg');
        this.load.image('BPlatform', './images/platform.png');
        this.load.image('BPlatform', './images/platform.png');
        this.load.image('BPlatform2', './images/BPlatform2.png');
        this.load.image('BPlatform3', './images/BPlatform3.png');
        this.load.image('BPlatform4', './images/BPlatform4.png');
        
        this.load.spritesheet('lava',
            './images/lava32.png',
            { frameWidth: 32, frameHeight: 32 } );
        
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
        this.lava = this.physics.add.staticGroup();
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    create ()
    {
        this.cameras.main.setBounds(0, 0, 3200, 600);
        this.physics.world.setBounds(0, 0, 3200, 600);
        
        this.add.image(1600, 300, 'BSpace');
        
        sceneB_set_platforms(this.platforms);
        
        
        this.player = this.physics.add.sprite(100, 300, 'wolf');
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(100);
        this.player.rotate_right = true;
    
        this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
        this.cameras.main.followOffset.set(-50, 0);
                
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
        
        this.anims.create({
            key: 'soul_fly_left',
            frames: this.anims.generateFrameNumbers('soul', { start: 0, end: 4 }),
            frameRate: 8,
            repeat: -1
        });
        
        this.anims.create({
            key: 'soul_fly_right',
            frames: this.anims.generateFrameNumbers('soul', { start: 5, end: 9 }),
            frameRate: 8,
            repeat: -1
        });
        
        this.anims.create({
            key: 'exit_animate',
            frames: this.anims.generateFrameNumbers('exit', { start: 0, end: 11 }),
            frameRate: 8,
            repeat: -1
        });
        
        this.stars = this.physics.add.group({
            key: 'soul',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        
        
        this.evilstars = this.physics.add.group();
        
        add_interface(this);
        
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.evilstars, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        
        this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
        this.enemyCollider = this.physics.add.collider(this.player, this.evilstars, hitEnemy, null, this);
    
    
        this.stars.children.iterate(function (child) {
            child.setBounce(1);
            child.setCollideWorldBounds(true);
            child.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-20, 20));
            child.setSize(24, 30, true);
            child.setOffset(12, 4);
            child.allowGravity = false;
        });	
        
        var evilstar = this.evilstars.create(300, 500, 'demon');
        evilstar.setBounce(0);
        evilstar.setCollideWorldBounds(true);
        evilstar.setVelocity(-50, 0);
        evilstar.allowGravity = false;
        evilstar.setSize(24, 40, true);
        evilstar.setOffset(21, 20);
        evilstar.anims.play('demon_fly_left', true);
        
        this.exit = this.physics.add.sprite(550, 250, 'exit');
        this.exit.setVelocity(0, 0);
        this.exit.allowGravity = false;
        this.physics.add.collider(this.exit, this.platforms);
        this.physics.add.collider(this.player, this.exit, function(){this.need_new_scene = true}, null, this);
        this.exit.anims.play('exit_animate', true);
        
        
        this.anims.create({
            key: 'lava_animate',
            frames: this.anims.generateFrameNumbers('lava', { start: 0, end: 7 }),
            frameRate: 8,
            repeat: -1
        });
        sceneB_set_lava(this.lava);
        this.lavaCollider = this.physics.add.collider(this.player, this.lava, hitEnemy, null, this);

        
    //    var triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 25, 450);
    //    var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 } });
    //           graphics.strokeTriangleShape(triangle);
    //    var test_platform = this.platforms.create(250,388, 'BPlatform2');
    //    test_platform.body.setGameObject(triangle);
    //    test_platform.body.update();
        
    }

    
    update (time, delta) {
        if(this.need_new_scene) {
            this.scene.start('SceneC');
            this.need_new_scene = false;
        }
        
        this.input.on('pointerdown', this.tapDown);
        this.input.on('pointerup', this.tapUp);
        animate_player(this.player);
        animate_demons(this);
        animate_souls(this);
        
        if(this.player.ghost_mode) {
            this.enemyCollider.active = false;
            this.lavaCollider.active = false;
        }
        else {
            this.enemyCollider.active = true;
            this.lavaCollider.active = true;
        }
        
        //this.scene.start('SceneD');
    }
    
    tapDown (pointer) {
        if(pointer.x > (config.width/2) ) {
            this.scene.player.rotate_right = true;
            this.scene.player.setVelocityX(160);
        }
        else if (pointer.x < (config.width/2) ) {
            this.scene.player.rotate_right = false;
            this.scene.player.setVelocityX(-160);
        }
        
        if(this.scene.need_restart) {
            this.scene.need_restart = false;
            this.scene.scene.restart();
        }
    }
    
    tapUp (pointer) {
        if( pointer.upTime - pointer.downTime < config.doubleTapDelay 
        && this.scene.player.body.touching.down) {
            this.scene.player.setVelocityY(-330);
        }
            this.scene.tapTime = pointer.downTime;
            this.scene.player.setVelocityX(0);
    }
}