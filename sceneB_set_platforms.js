function sceneB_set_platforms (platforms)
{
	for(let x = 0; x < 3200; x+=100) {
		platforms.create(x, 600, 'BPlatform');
	}

	platforms.create(600, 400, 'BPlatform');
	platforms.create(50, 250, 'BPlatform');
	platforms.create(200, 350, 'BPlatform');
	platforms.create(750, 220, 'BPlatform');	
}