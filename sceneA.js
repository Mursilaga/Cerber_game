class SceneA extends Phaser.Scene {

    constructor ()
    {
        super('SceneA');

        this.background;
		
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
        this.load.image('ASpace', './images/background.jpg');
		
		this.load.spritesheet('wolf', 
			'./images/wolf.png',
			{ frameWidth: 52, frameHeight: 32 } );
		this.load.image('interface', './images/interface.png');
		this.load.image('interface_life', './images/interface_life.png');
		this.load.image('interface_score', './images/interface_score.png');
		this.load.image('life_image', './images/life.png');
	}
	
    create ()
    {
        this.background = this.add.image(400, 300, 'ASpace');
		this.sceneText = this.add.text(300, 200, 'Scene A', { fontSize: '60px', fill: '#FFFFFF' });
		
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
    }

    update (time, delta)
    {
		this.input.on('pointerdown', this.tapDown);
		
		if(this.need_new_scene) {
			this.need_new_scene = false;
			this.scene.start('SceneB');
		}
    }

	tapDown (pointer) 
	{
		this.scene.need_new_scene = true;
	}
}