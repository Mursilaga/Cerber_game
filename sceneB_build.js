function sceneB_set_platforms (platforms)
{
    //ground
    for(let x = 0; x <= 3200; x+=100) {
        platforms.create(x, 600, 'BPlatform');
    }
    
    //flying platforms
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
    lava.create(300, 500, 'lava').anims.play('lava_animate', true);
    lava.create(332, 500, 'lava').anims.play('lava_animate', true);
    lava.create(364, 500, 'lava').anims.play('lava_animate', true);
    lava.create(396, 500, 'lava').anims.play('lava_animate', true);

}