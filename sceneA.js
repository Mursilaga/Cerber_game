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
        this.scoreText = null;
        this.rotate_right = true;
        this.fly = false;
        this.run = false;
    }
    
    preload ()
    {
        this.load.image('ASpace', './images/intro.png');
        
        this.load.spritesheet('player', 
            './images/sobaka.png',
            { frameWidth: 120, frameHeight: 80 } );
            
        this.load.image('interface', './images/interface.png');
        this.load.image('interface_life', './images/interface_life.png');
        this.load.image('interface_score', './images/interface_score.png');
        this.load.image('life_image', './images/life.png');
    }
    
    create ()
    {
        this.background = this.add.image(config.width/2, config.height/2, 'ASpace');
        
        this.anims.create({
            key: 'player_stand',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
            frameRate: 5,
            repeat: -1
        });
        
        this.anims.create({
            key: 'player_run',
            frames: this.anims.generateFrameNumbers('player', { start: 6, end: 11 }),
            frameRate: 5,
            repeat: -1
        });
        
        this.anims.create({
            key: 'player_dies',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 17 }),
            frameRate: 5,
            repeat: 0
        });
        
        this.anims.create({
            key: 'player_fly',
            frames: this.anims.generateFrameNumbers('player', { start: 18, end: 18 }),
            frameRate: 0,
            repeat: 0
        });
    }
    
    update (time, delta)
    {
        startNewSceneIfNeed(this);
        this.input.on('pointerdown', this.tapDown);
    }
    
    tapDown (pointer) 
    {
        this.scene.need_new_scene = true;
    }
}