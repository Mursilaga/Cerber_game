function add_player (physics) 
{
    player = physics.add.sprite(100, 300, 'wolf');
    player.setBounce(0);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(100);
    player.rotate_right = true;
    player.setSize(40, 26, true);
    player.setOffset(6, 6);
    return player;
}

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