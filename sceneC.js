class SceneC extends Phaser.Scene {

    constructor ()
    {
        super('SceneC');

        this.background;
		this.clicked = false;
    }

	preload ()
	{
        this.load.image('CSpace', './images/background.jpg');
	}
	
    create ()
    {
        this.background = this.add.image(400, 300, 'CSpace');
		this.sceneText = this.add.text(300, 200, 'Scene C', { fontSize: '60px', fill: '#FFFFFF' });
    }

    update (time, delta)
    {
		this.input.on('pointerdown', this.tapDown);
		
		if(this.clicked) {
			this.scene.start('SceneD');
			this.clicked = false;
		}
    }

	tapDown (pointer) 
	{
		this.scene.clicked = true;
	}
}