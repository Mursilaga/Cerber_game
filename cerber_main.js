var elem = document.getElementById("canvas_parent");

var config = {
    type: Phaser.AUTO,
    doubleTapDelay: 300,
    width: elem.clientWidth,
    height: elem.clientHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: [ SceneA, SceneB, SceneC, SceneD ],
    score: 0
};
var scenesList = ['SceneA', 'SceneB', 'SceneC', 'SceneD'];
var game = new Phaser.Game(config);
