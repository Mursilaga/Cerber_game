function collectStar (player, star)
{
    player.score += 10;
    this.scoreText.setText(player.score);
        
    star.disableBody(true, true);
    
    var cx = Phaser.Math.Between(player.x - 400, player.x + 400);
    if( (x - player.x > 0) && (x - player.x < 100) )
        x += 100;
    else if ( (x - player.x < 0) && (x - player.x > -100) )
        x -= 100;
    
    star.enableBody(true, cx, 0, true, true).setVelocity(Phaser.Math.Between(-200, 200), 20);
    
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