function sceneB_set_platforms (platforms)
{
    platforms.create(489,388, 'BPlatform2');
    platforms.create(1145,203, 'BPlatform2');
    platforms.create(2010,297, 'BPlatform2');
    platforms.create(3200,292, 'BPlatform2');
    
    platforms.create(373,180, 'BPlatform3');
    platforms.create(798,322, 'BPlatform3');
    platforms.create(1050,422, 'BPlatform3');
    platforms.create(1600,105, 'BPlatform3');
    platforms.create(2400,231, 'BPlatform3');
    platforms.create(2931,129, 'BPlatform3');
    platforms.create(3380,461, 'BPlatform3');
    
    platforms.create(60,485, 'BPlatform4').setScale(1.5).refreshBody();
    platforms.create(1344,485, 'BPlatform4').setScale(1.5).refreshBody();
    platforms.create(2706,485, 'BPlatform4').setScale(1.5).refreshBody();
}

function sceneB_set_lava (lava) 
{
    setField(lava, 'lava', 0, 3200, 584, 32);
    
    lava.children.iterate(function (child) {
        child.setSize(32, 25, true).setOffset(0, 7).anims.play('lava_animate', true);
    });	

}

function sceneB_setGround(platforms)
{
    setField(platforms, 'BPlatform', 0, 3200, 610, 100);
}