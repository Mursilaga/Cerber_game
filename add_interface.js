function addInterface(scene)
{
    scene.player.ghost_mode = false;
    scene.player.lives = null;
    scene.player.score = 0;
    scene.player.lives = scene.physics.add.staticGroup();

    scene.add.image(100, 25, 'interface_score').setScrollFactor(0);
    scene.scoreText = scene.add.text(73, 13, scene.player.score, { fontSize: '14px', fontFamily: 'Calibri', fontStyle: 'Bold', fill: '#FFe471' }).setScrollFactor(0);
    scene.add.image(config.width - 100, 25, 'interface_life').setScrollFactor(0);

    scene.player.lives.create(config.width - 110, 30, 'life_image').setScrollFactor(0);
    scene.player.lives.create(config.width - 80, 30, 'life_image').setScrollFactor(0);
    scene.player.lives.create(config.width - 50, 30, 'life_image').setScrollFactor(0);
}