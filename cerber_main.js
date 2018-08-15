var elem = document.getElementById("canvas_parent");

var config = {
    type: Phaser.AUTO,
    doubleTapDelay: 300,
    width: elem.clientWidth,  //800, //screen.availWidth,
    height: elem.clientHeight, //600, //screen.availHeight,
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
