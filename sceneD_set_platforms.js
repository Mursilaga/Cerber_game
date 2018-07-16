function sceneD_set_platforms (platforms)
{
	//ground
	for(let x = 0; x <= 4228; x+=100) {
		platforms.create(x, 600, 'DPlatform1');
	}

	//flying platforms
	platforms.create(1470,215, 'DPlatform1');
	platforms.create(2564,212, 'DPlatform1');
	platforms.create(3493,291, 'DPlatform1');
	
	platforms.create(1063,338, 'DPlatform2');
	platforms.create(2098,323, 'DPlatform2');
	platforms.create(3048,375, 'DPlatform2');
	
	platforms.create(432,350, 'DPlatform3');
	
	platforms.create(60,525, 'DPlatform4');
	
	//platforms.create(2400,231, 'DPlatform3');
	//platforms.create(2931,129, 'DPlatform3');
	//platforms.create(3380,461, 'DPlatform3');
	

}