function getNextScene(current_scene) {
    let next_scene_index = scenesList.indexOf(current_scene.scene.key) + 1;
    if (next_scene_index < scenesList.length)
        return scenesList[next_scene_index];
    else 
        return scenesList[0];  
}