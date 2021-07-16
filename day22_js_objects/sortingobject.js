var newtemp = { tvm: 27, kollam: 27, kottayam: 28, ekm: 29, tsr: 32, pkd: 31 }

function distsort(data)
{
    return Object.entries(data).sort((dist1,dist2)=>dist2[1] - dist1[1])
}

newtemp = distsort(newtemp);
console.log(newtemp);
