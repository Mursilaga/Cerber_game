function setField(matter, matter_key, x_begin, x_end, y, step)
{
    for(let x = x_begin; x <= x_end; x+=step) {
        matter.create(x, y, matter_key);
    }
}

function setPlatformCollision (platforms) {
    platforms.children.iterate(function (child) {
        if(child.name != "column") {
            child.body.checkCollision.down = false;
            child.body.checkCollision.left = false;
            child.body.checkCollision.right = false;
        }
    });
}