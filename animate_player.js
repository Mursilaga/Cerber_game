function animate_player (player) 
{
	if(player.body != undefined) {
		if(!player.body.touching.down)
			player.fly = true;
		else 
			player.fly = false;
		
		if (player.rotate_right)
		{
			if(player.fly)
				player.anims.play('fly_right', true);
			else if (player.run)
				player.anims.play('right', true);
			else 
				player.anims.play('turn_right', true);
		}
		else
		{
			if(player.fly)
				player.anims.play('fly_left', true);
			else if (player.run)
				player.anims.play('left', true);
			else 
				player.anims.play('turn_left', true);
		}
	}
}