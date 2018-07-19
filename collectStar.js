function collectStar (player, star)
{
	this.score += 10;
	this.scoreText.setText(this.score);
		
	star.disableBody(true, true);

	if (this.stars.countActive(true) < 7)
	{
		this.physics.pause();
		this.player.setTint(0x00ff00);
		this.need_new_scene = true;
		
		//  A new batch of this.stars to collect
		this.stars.children.iterate(function (child) {
			var cx = Phaser.Math.Between(0, 800);
			var cy = Phaser.Math.Between(0, 600);
			child.enableBody(true, cx, cy, true, true);
			child.setVelocity(Phaser.Math.Between(-200, 200), 20)
		});
	}
		var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
		var evilstar = this.evilstars.create(x, 16, 'evilstar');
		evilstar.setBounce(1);
		evilstar.setCollideWorldBounds(true);
		evilstar.setVelocity(Phaser.Math.Between(-200, 200), 20);
		evilstar.allowGravity = false;		
}