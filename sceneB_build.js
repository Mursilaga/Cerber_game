function sceneB_set_platforms (platforms)
{
    //platforms.create(489,422, 'BPlatform2');//.setScale(1.5).refreshBody();
    //platforms.create(1145,203, 'BPlatform2');//.setScale(1.5).refreshBody();
	platforms.create(280,363, 'BPlatform2');
	platforms.create(535,400, 'BPlatform2');
	platforms.create(642,428, 'BPlatform2');
	platforms.create(849,325, 'BPlatform2');
	platforms.create(947,308, 'BPlatform2');
	platforms.create(1193,370, 'BPlatform2');
	platforms.create(1417,444, 'BPlatform2');
	platforms.create(1625,343, 'BPlatform2');
	platforms.create(1900,350, 'BPlatform2');
	platforms.create(2116,364, 'BPlatform2');
	platforms.create(2197,380, 'BPlatform2');
    platforms.create(2668,378, 'BPlatform2');
    platforms.create(2878,386, 'BPlatform2');
    platforms.create(2947,410, 'BPlatform2');
    platforms.create(3120,479, 'BPlatform2');

    //platforms.create(373,180, 'BPlatform3');
	platforms.create(185,400, 'BPlatform3');
	platforms.create(410,367, 'BPlatform3');
	platforms.create(754,367, 'BPlatform3');
	platforms.create(1055,345, 'BPlatform3');
	platforms.create(1306,342, 'BPlatform3');
	platforms.create(1517,382, 'BPlatform3');
	platforms.create(1772,358, 'BPlatform3');
	platforms.create(2028,345, 'BPlatform3');
	platforms.create(2316,380, 'BPlatform3');
	platforms.create(2460,357, 'BPlatform3');
    platforms.create(2785,316, 'BPlatform3');
    platforms.create(3017,440, 'BPlatform3');
    platforms.create(3206,415, 'BPlatform3');
    //platforms.create(798,322, 'BPlatform3');
    //platforms.create(1050,422, 'BPlatform3');
    
    
    
	//platforms.create(60,485, 'BPlatform4');//.setScale(1.5).refreshBody();
	platforms.create(36,495, 'BPlatform4');
	platforms.create(1120,517, 'BPlatform4');
	platforms.create(1120,517, 'BPlatform4');
    platforms.create(2584,518, 'BPlatform4');
	
}

function sceneB_set_lava (lava) 
{
    setField(lava, 'lava', 0, 2900, 584, 32);
    
    lava.children.iterate(function (child) {
        child.setSize(32, 25, true).setOffset(0, 7).anims.play('lava_animate', true);
    });	

}

function sceneB_setGround(platforms)
{
    setField(platforms, 'BPlatform', 0, 12800, 610, 100);
    platforms.create(273,580, 'BPlatform3');
	platforms.create(759,580, 'BPlatform3');
	platforms.create(1341,580, 'BPlatform3');
    
	platforms.create(140,557, 'BPlatform5');
	platforms.create(640,557, 'BPlatform5');
	platforms.create(1023,572, 'BPlatform5');
	platforms.create(140,557, 'BPlatform5');
	platforms.create(140,557, 'BPlatform5');
    platforms.create(2473,584, 'BPlatform5');
}