class SceneC extends Phaser.Scene {
    
    constructor ()
    {
        super('SceneC');
    
        this.background;
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
        
        if(this.need_new_scene) {
            this.scene.start(getNextScene(this));
            this.need_new_scene = false;
        }
    }
    
    tapDown (pointer) 
    {
        this.scene.need_new_scene = true;
    }
}