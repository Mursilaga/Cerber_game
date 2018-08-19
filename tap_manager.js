function clickDown(scene, pointer) {
    if(pointer.x > (config.width/2) ) {
        scene.player.rotate_right = true;
        scene.player.setVelocityX(160);
    }
    else if (pointer.x < (config.width/2) ) {
        scene.player.rotate_right = false;
        scene.player.setVelocityX(-160);
    }
    
    if(scene.need_restart) {
        scene.need_restart = false;
        scene.scene.restart();
    }
}

function clickUp(scene, pointer) {
    if( pointer.upTime - pointer.downTime < config.doubleTapDelay 
    && scene.player.body.touching.down) {
        scene.player.setVelocityY(-330);
    }
        scene.tapTime = pointer.downTime;
        scene.player.setVelocityX(0);
}