class SceneD extends Phaser.Scene {

    constructor ()
    {
        super('SceneD');

//		this.need_new_scene = false;
//		this.tapTime = 0;
//		this.player = null;
//		this.stars = null;
//		this.evilstars = null;
//		this.platforms = null;
//		this.cursors = null;
//		this.score = 0;
//		this.scoreText = null;
//		this.rotate_right = true;
//		this.fly = false;
//		this.run = false;
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
		this.load.image('star', './images/soul.png');
		this.load.spritesheet('wolf', 
			'./images/wolf.png',
			{ frameWidth: 52, frameHeight: 32 } );
		this.load.image('evilstar', './images/evilstar.png');
		this.load.spritesheet('enemy', 
			'./images/enemy.png',
			{ frameWidth: 52, frameHeight: 32 } );
		this.platforms = this.physics.add.staticGroup();
		this.cursors = this.input.keyboard.createCursorKeys();
	}
	
    create ()
    {
        this.cameras.main.setBounds(0, 0, 4228, 600);
		this.physics.world.setBounds(0, 0, 4228, 600);

		this.sceneText = this.add.text(300, 200, 'scene D', { fontSize: '60px', fill: '#FFFFFF' }).setScrollFactor(0);
		
		this.add.image(528, 300, 'DSpace');
		this.add.image(1585, 300, 'DSpace2');
		this.add.image(2642, 300, 'DSpace');
		this.add.image(3699, 300, 'DSpace2');
		
		sceneD_set_platforms(this.platforms);
		
		this.player = this.physics.add.sprite(100, 300, 'wolf');
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.body.setGravityY(100)
		
		this.cameras.main.startFollow(this.player, false, 0.5, 0.5);
		this.cameras.main.followOffset.set(-50, 0);
		
		this.stars = this.physics.add.group({
			key: 'star',
			repeat: 11,
			setXY: { x: 12, y: 0, stepX: 70 }
		});
		
		this.evilstars = this.physics.add.group();
		
		this.scoreText = this.add.text(16, 16, 'scene D. Score: 0', { fontSize: '32px', fill: '#FFFFFF' }).setScrollFactor(0);
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
	
    update (time, delta)
    {
		if(this.need_new_scene) {
			this.scene.start('SceneA');
			this.need_new_scene = false;
		}
		
		this.input.on('pointerdown', this.tapDown);
		this.input.on('pointerup', this.tapUp);
		this.animate_player();	
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