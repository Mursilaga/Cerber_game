function add_interface(scene)
{
	scene.player.lives = null;
	scene.player.score = 0;
	scene.player.lives = scene.physics.add.staticGroup();
		
	scene.add.image(100, 25, 'interface_score').setScrollFactor(0);
	scene.scoreText = scene.add.text(73, 13, scene.score, { fontSize: '14px', fontFamily: 'Calibri', fontStyle: 'Bold', fill: '#FFe471' }).setScrollFactor(0);
	scene.add.image(700, 25, 'interface_life').setScrollFactor(0);
	
	scene.player.lives.create(690, 30, 'life_image').setScrollFactor(0).setTint(0x673A3A);
	scene.player.lives.create(720, 30, 'life_image').setScrollFactor(0);
	scene.player.lives.create(750, 30, 'life_image').setScrollFactor(0);
}