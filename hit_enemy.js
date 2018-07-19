function hitEnemy (player, evilstar) 
{
	this.physics.pause();
	this.player.setTint(0xff0000);
	this.player.anims.play('turn_right');
	this.gameOver = true;
	this.scoreText.setText('GAME OVER. Score: ' + this.score);
	//this.scene.start('sceneA');
	//setTimeout(continueExecution, 5000)
	this.score = 0;
	this.scene.restart();
}