function hitEnemy (player, enemy) 
{  
    player.ghost_mode = true;
    this.timer = this.time.addEvent({ delay: 2500, callback: function() {
        player.ghost_mode = false;
    } });
    
    spendLifeOrDie(this, player);
    
    if (enemy.name == "meteor")
        enemy.destroy();
}