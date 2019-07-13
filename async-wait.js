const sumAsync = async() => {

    const first = await random();
    console.log(`${first}`);

    const second = await random();
    console.log(`${second}`);
    
    const third = await random();
    console.log(`${third}`);
    
}

function random() {
    let i=0;

    for(i=0; i<1000000000; i++) {

        
    }

    return i + Math.random(0, 1);

}

sumAsync();