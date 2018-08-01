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
            child.setVelocity(Phaser.Math.Between(-200, 200), 20);
            child.allowGravity = false;
        });	
        
        var star = this.stars.create(300, 50, 'soul');
        star.setBounce(0);
        star.setCollideWorldBounds(true);
        star.setVelocity(0, 0);
        star.allowGravity = false;
        //star.setSize(24, 40, true);
        //star.setOffset(21, 20);
        star.anims.play('soul_fly_left', true);
        
        var star2 = this.stars.create(380, 50, 'soul');
        star2.setBounce(0);
        star2.setCollideWorldBounds(true);
        star2.setVelocity(0, 0);
        star2.allowGravity = false;
        //star2.setSize(24, 40, true);
        //star2.setOffset(21, 20);
        star2.anims.play('soul_fly_right', true);
        
        var evilstar = this.evilstars.create(300, 500, 'demon');
        evilstar.setBounce(0);
        evilstar.setCollideWorldBounds(true);
        evilstar.setVelocity(-50, 0);
        evilstar.allowGravity = false;
        evilstar.setSize(24, 40, true);
        evilstar.setOffset(21, 20);
        evilstar.anims.play('demon_fly_left', true);
    }
    
    animate_demons () {
        if(this.evilstars != undefined && this.evilstars.countActive(true) > 0) {
            this.evilstars.children.iterate(function (child) {
                if(child.body.velocity.x > 0)
                    child.anims.play('demon_fly_right', true);
                else
                    child.anims.play('demon_fly_left', true);
            });
        }
    }
    
    animate_souls () {
        if(this.stars != undefined && this.stars.countActive(true) > 0) {
            this.stars.children.iterate(function (child) {
                if(child.body.velocity.x > 0)
                    child.anims.play('soul_fly_right', true);
                else
                    child.anims.play('soul_fly_left', true);
            });
        }
    }
    
    update (time, delta) {
        if(this.need_new_scene) {
            this.scene.start('SceneC');
            this.need_new_scene = false;
        }
        
        this.input.on('pointerdown', this.tapDown);
        this.input.on('pointerup', this.tapUp);
        animate_player(this.player);
        this.animate_demons();
        this.animate_souls();
        
        if(this.player.ghost_mode)
            this.enemyCollider.active = false;
        else
            this.enemyCollider.active = true;
        
        this.scene.start('SceneD');
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