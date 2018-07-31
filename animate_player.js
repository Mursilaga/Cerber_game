function animate_player (player) 
{
    if(player.body != undefined) {
        if (player.rotate_right)
        {
            if(!player.body.touching.down)
                player.anims.play('fly_right', true);
            else if (player.body.velocity.x != 0)
                player.anims.play('right', true);
            else 
                player.anims.play('turn_right', true);
        }
        else
        {
            if(!player.body.touching.down)
                player.anims.play('fly_left', true);
            else if (player.body.velocity.x != 0)
                player.anims.play('left', true);
            else 
                player.anims.play('turn_left', true);
        }
    }
    
    if(player.ghost_mode)
        player.setAlpha(0.4, 0.4, 0.4, 0.4);
    else
        player.setAlpha(1, 1, 1, 1);
        
}