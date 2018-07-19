function hitEnemy (player, evilstar) 
{
	this.physics.pause();
	this.player.setTint(0xff0000);
	this.player.anims.play('turn_right');
	//this.gameOver = true;
	//this.scene.start('sceneA');
	//setTimeout(continueExecution, 5000)
	this.score = 0;
	this.need_restart = true;
}