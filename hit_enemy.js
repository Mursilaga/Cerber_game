function hitEnemy (player, evilstar) 
{

    if (player.lives.countActive(true) > 0)
    {
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
    else
    {
        this.physics.pause();
        this.player.setTint(0xff0000);
        this.player.anims.play('turn_right');
        this.score = 0;
        this.need_restart = true;
    }
}