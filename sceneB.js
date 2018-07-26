class SceneB extends Phaser.Scene {

    constructor ()
    {
        super('SceneB');
    }

	preload ()
	{			
        this.load.image('BSpace', './images/SceneB_Background.png');
		this.load.image('BPlatform', './images/platform.png');
		this.load.image('BPlatform', './images/platform.png');
		this.load.image('BPlatform2', './images/BPlatform2.png');
		this.load.image('BPlatform3', './images/BPlatform3.png');
		this.load.image('BPlatform4', './images/BPlatform4.png');

		this.load.image('star', './images/soul.png');

		this.load.image('evilstar', './images/evilstar.png');
		this.load.spritesheet('demon', 
			'./images/demon.png',
			{ frameWidth: 66, frameHeight: 62 } );
			
		this.platforms = this.physics.add.staticGroup();
		this.lives = this.physics.add.staticGroup();
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
		this.player.run = false;
		this.player.fly = false;

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
		
		this.stars = this.physics.add.group({
			key: 'star',
			repeat: 11,
			setXY: { x: 12, y: 0, stepX: 70 }
		});
		
		
		this.evilstars = this.physics.add.group();
		
		

		this.add.image(100, 25, 'interface_score').setScrollFactor(0);
		this.scoreText = this.add.text(73, 13, '0', { fontSize: '14px', fontFamily: 'Calibri', fontStyle: 'Bold', fill: '#FFe471' }).setScrollFactor(0);
		
		this.add.image(700, 25, 'interface_life').setScrollFactor(0);

		this.lives.create(690, 30, 'life_image').setScrollFactor(0).setTint(0x673A3A);
		this.lives.create(720, 30, 'life_image').setScrollFactor(0);
		this.lives.create(750, 30, 'life_image').setScrollFactor(0);
		
		this.physics.add.collider(this.stars, this.platforms);
		this.physics.add.collider(this.evilstars, this.platforms);
		this.physics.add.collider(this.player, this.platforms);
		
		this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
		this.physics.add.collider(this.player, this.evilstars, hitEnemy, null, this);


		this.stars.children.iterate(function (child) {
			child.setBounce(1);
			child.setCollideWorldBounds(true);
			child.setVelocity(Phaser.Math.Between(-200, 200), 20);
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
    }
	
	animate_demons () {
		if(this.evilstars != undefined && this.evilstars.countActive(true) > 0) {
			this.evilstars.children.iterate(function (child) {
				if(child.body.velocity.x >= 0)
					child.anims.play('demon_fly_right', true);
				else
					child.anims.play('demon_fly_left', true);
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
		//this.animate_player();
		animate_player(this.player);
		this.animate_demons();
		this.scene.start('SceneD');
    }
	
	tapDown (pointer) {
		if(pointer.x > (this.scene.player.body.x - this.scene.cameras.main.scrollX)) {
			this.scene.player.rotate_right = true;
			this.scene.player.setVelocityX(160);
			this.scene.player.run = true;
		}
		else if (pointer.x < (this.scene.player.body.x - this.scene.cameras.main.scrollX)) {
			this.scene.player.rotate_right = false;
			this.scene.player.setVelocityX(-160);
			this.scene.player.run = true;
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
			this.scene.player.run = false;
	}
}