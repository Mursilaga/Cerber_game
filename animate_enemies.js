function animateDemons (scene) 
{
    if(scene.evilstars != undefined && scene.evilstars.countActive(true) > 0) {
        scene.evilstars.children.iterate(function (child) {
            if(child.body.velocity.x > 0)
                child.anims.play('demon_fly_right', true);
            else
                child.anims.play('demon_fly_left', true);
        });
    }
}