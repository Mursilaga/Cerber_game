var config = {
    type: Phaser.AUTO,
    doubleTapDelay: 300,
    width: 800, //screen.availWidth,
    height: 600, //screen.availHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: [ SceneA, SceneB, SceneC, SceneD ]
};

var game = new Phaser.Game(config);
