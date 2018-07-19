class SceneB extends Phaser.Scene {

    constructor ()
    {
        super('SceneB');

		this.need_new_scene = false;
		this.need_restart = false;
		this.tapTime = 0;
		this.player = null;
		this.stars = null;
		this.evilstars = null;
		this.platforms = null;
		this.cursors = null;
		
		this.scoreText = null;
		this.rotate_right = true;
		this.fly = false;
		this.run = false;
		
		this.lives = null;
		this.score = 0;
	
    }

	preload ()
	{		
		this.load.image('interface', './images/interface.png');
		this.load.image('interface_life', './images/interface_life.png');
		this.load.image('interface_score', './images/interface_score.png');
		this.load.image('life_image', './images/life.png');
		
        this.load.image('BSpace', './images/SceneB_Background.png');
		this.load.image('BPlatform', './images/platform.png');
		this.load.image('BPlatform', './images/platform.png');
		this.load.image('BPlatform2', './images/BPlatform2.png');
		this.load.image('BPlatform3', './images/BPlatform3.png');
		this.load.image('BPlatform4', './images/BPlatform4.png');

		this.load.image('ground', './images/ground.png');

		this.load.image('star', './images/soul.png');
		this.load.spritesheet('wolf', 
			'./images/wolf.png',
			{ frameWidth: 52, frameHeight: 32 } );
		this.load.image('evilstar', './images/evilstar.png');
		this.load.spritesheet('enemy', 
			'./images/enemy.png',
			{ frameWidth: 52, frameHeight: 32 } );
		this.platforms = this.physics.add.staticGroup();
		this.lives = this.physics.add.staticGroup();
		this.cursors = this.input.keyboard.createCursorKeys();
	}
	
    create ()
    {	
		this.cameras.main.setBounds(0, 0, 3200, 600);
		this.physics.world.setBounds(0, 0, 3200, 600);

		this.sceneText = this.add.text(300, 200, 'Scene B', { fontSize: '60px', fill: '#FFFFFF' }).setScrollFactor(0);
		
		this.add.image(1600, 300, 'BSpace');
		
		sceneB_set_platforms(this.platforms);
		
		this.player = this.physics.add.sprite(100, 300, 'wolf');
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.body.setGravityY(100)

		this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
		this.cameras.main.followOffset.set(-50, 0);
		
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('wolf', { start: 0, end: 4 }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('wolf', { start: 6, end: 10 }),
			frameRate: 10,
			repeat: -1
		});
		
		this.anims.create({
			key: 'turn_right',
			frames: [ { key: 'wolf', frame: 6 } ],
			frameRate: 20
		});
		
		this.anims.create({
			key: 'turn_left',
			frames: [ { key: 'wolf', frame: 4 } ],
			frameRate: 20
		});
		
		this.anims.create({
			key: 'fly_left',
			frames: [ { key: 'wolf', frame: 2 } ],
			frameRate: 20
		});
		
		this.anims.create({
			key: 'fly_right',
			frames: [ { key: 'wolf', frame: 8 } ],
			frameRate: 20
		});
		
		this.stars = this.physics.add.group({
			key: 'star',
			repeat: 11,
			setXY: { x: 12, y: 0, stepX: 70 }
		});
		
		
		this.evilstars = this.physics.add.group();
		
		

		this.add.image(100, 25, 'interface_score').setScrollFactor(0);
		this.scoreText = this.add.text(100, 13, '0', { fontSize: '14px', fontFamily: 'Calibri', fontStyle: 'Bold', fill: '#FFe471' }).setScrollFactor(0);
		
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
		
		
		
		var graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xaaaa00 } });
		var triangle = new Phaser.Geom.Triangle.BuildEquilateral(400, 25, 450);
		graphics.strokeTriangleShape(triangle);
		
		//this.physics.add.body(300, 300).setGameObject(triangle).
		//this.physics.add.collider(this.player, triangle);
		//this.platforms.create(489,388, 'BPlatform2').setGameObject(triangle);
    }

	animate_player () {
		if(this.player.body != undefined) {
			if(!this.player.body.touching.down)
				this.fly = true;
			else 
				this.fly = false;
			
			if (this.rotate_right)
			{
				if(this.fly)
					this.player.anims.play('fly_right', true);
				else if (this.run)
					this.player.anims.play('right', true);
				else 
					this.player.anims.play('turn_right', true);
			}
			else
			{
				if(this.fly)
					this.player.anims.play('fly_left', true);
				else if (this.run)
					this.player.anims.play('left', true);
				else 
					this.player.anims.play('turn_left', true);
			}
		}
	}

    update (time, delta) {
		if(this.need_new_scene) {
			this.scene.start('SceneC');
			this.need_new_scene = false;
		}
		
		this.input.on('pointerdown', this.tapDown);
		this.input.on('pointerup', this.tapUp);
		this.animate_player();		
		//this.scene.start('SceneD');
    }
	
	tapDown (pointer) {
		if(pointer.x > (this.scene.player.body.x - this.scene.cameras.main.scrollX)) {
			this.scene.rotate_right = true;
			this.scene.player.setVelocityX(160);
			this.scene.run = true;
		}
		else if (pointer.x < (this.scene.player.body.x - this.scene.cameras.main.scrollX)) {
			this.scene.rotate_right = false;
			this.scene.player.setVelocityX(-160);
			this.scene.run = true;
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
			this.scene.sceneText.text = "y";
		}
		else
		{
			this.scene.sceneText.text = "no";
		}
			this.scene.tapTime = pointer.downTime;
			this.scene.player.setVelocityX(0);
			this.scene.run = false;
	}
}