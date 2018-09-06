function addPlayer (physics, x, y) 
{
    var player = physics.add.sprite(x, y, 'player');
    player.setBounce(0);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(100);
    player.setSize(66, 47, true);
    player.setOffset(27, 33);
    player.rotate_right = true;
    player.alive = true;
    return player;
}

function animatePlayer (player) 
{
    if(player.body != undefined) {
        if (player.rotate_right)
        {
            player.flipX = false;
            if(!player.body.touching.down)
                player.anims.play('player_fly', true);
            else if (player.body.velocity.x != 0)
                player.anims.play('player_run', true);
            else 
                player.anims.play('player_stand', true);
        }
        else
        {
            player.flipX = true;
            if(!player.body.touching.down)
                player.anims.play('player_fly', true);
            else if (player.body.velocity.x != 0)
                player.anims.play('player_run', true);
            else 
                player.anims.play('player_stand', true);
        }
    }
    
    if(player.ghost_mode)
        player.setAlpha(0.4, 0.4, 0.4, 0.4);
    else
        player.setAlpha(1, 1, 1, 1);
        
}