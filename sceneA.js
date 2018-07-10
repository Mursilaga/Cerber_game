class SceneA extends Phaser.Scene {

    constructor ()
    {
        super('SceneA');

        this.background;
		this.clicked = false;
    }

	preload ()
	{
        this.load.image('ASpace', './images/background.jpg');
	}
	
    create ()
    {
        this.background = this.add.image(400, 300, 'ASpace');
		this.sceneText = this.add.text(300, 200, 'Scene A', { fontSize: '60px', fill: '#FFFFFF' });
    }

    update (time, delta)
    {
		this.input.on('pointerdown', this.tapDown);
		
		if(this.clicked) {
			this.scene.start('SceneB');
			this.clicked = false;
		}
    }

	tapDown (pointer) 
	{
		this.scene.clicked = true;
	}
}