function animate_souls (scene) {
    if(scene.stars != undefined && scene.stars.countActive(true) > 0) {
        scene.stars.children.iterate(function (child) {
            if(child.body.velocity.x > 0)
                child.anims.play('soul_fly_right', true);
            else
                child.anims.play('soul_fly_left', true);
        });
    }
}