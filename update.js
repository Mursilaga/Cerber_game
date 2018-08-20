function startNewSceneIfNeed(scene) {
        if(scene.need_new_scene) {
        scene.scene.start(getNextScene(scene));
        scene.need_new_scene = false;
    }
}

function getNextScene(current_scene) {
    let next_scene_index = scenesList.indexOf(current_scene.scene.key) + 1;
    if (next_scene_index < scenesList.length)
        return scenesList[next_scene_index];
    else 
        return scenesList[0];  
}

function managePlayerColliders(scene) {
    if(scene.player.ghost_mode) {
        if(scene.enemyCollider != undefined)
            scene.enemyCollider.active = false;
        if(scene.lavaCollider != undefined)
            scene.lavaCollider.active = false;
        if(scene.meteorCollider != undefined)
            scene.meteorCollider.active = false;
    }
    else {
        if(scene.enemyCollider != undefined)
            scene.enemyCollider.active = true;
        if(scene.lavaCollider != undefined)
            scene.lavaCollider.active = true;
        if(scene.meteorCollider != undefined)
            scene.meteorCollider.active = true;
    }
}