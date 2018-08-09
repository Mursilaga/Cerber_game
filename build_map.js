function setField(matter, matter_key, x_begin, x_end, y, step)
{
    for(let x = x_begin; x <= x_end; x+=step) {
        matter.create(x, y, matter_key);
    }
}