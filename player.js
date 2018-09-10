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

function spendLifeOrDie(scene, player) {
    if (player.lives.countActive(true) > 0) {
        spendLife(player);
    }
    else {
        scene.physics.pause();
        player.alive = false;
        player.ghost_mode = false;
        scene.player.anims.play('player_dies');
        config.score = 0;
        scene.need_restart = true;
    }
}

function spendLife(player) {
    for (var i = 0; i < 3; i++) 
    {
        if(player.lives.children.entries[i].active) 
        {
            player.lives.children.entries[i].disableBody(true, false);
            player.lives.children.entries[i].setTint(0x673A3A);
            break;
        }
    }
 
}