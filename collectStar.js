function collectStar (player, star)
{
    player.score += 10;
    player.ghost_mode = false;
    this.scoreText.setText(player.score);
        
    star.disableBody(true, true);
    
    if (this.stars.countActive(true) < 7)
    {     
        //  A new batch of this.stars to collect
        this.stars.children.iterate(function (child) {
            var cx = Phaser.Math.Between(0, 800);
            var cy = Phaser.Math.Between(0, 600);
            child.enableBody(true, cx, cy, true, true);
            child.setVelocity(Phaser.Math.Between(-200, 200), 20)
        });
    }
    
    var x = Phaser.Math.Between(player.x - 400, player.x + 400);
    if( (x - player.x > 0) && (x - player.x < 100) )
        x += 100;
    else if ( (x - player.x < 0) && (x - player.x > -100) )
        x -= 100;
    
    var evilstar = this.evilstars.create(x, 0, 'demon');
    evilstar.setBounce(1);
    evilstar.setCollideWorldBounds(true);
    evilstar.setVelocity(Phaser.Math.Between(-200, 200), 20);
    evilstar.allowGravity = false;
    evilstar.setSize(24, 40, true);
    evilstar.setOffset(21, 20);
}