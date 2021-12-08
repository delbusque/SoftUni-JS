function solve(...params) {
    let sum = 0;
    for (const param of params) {
        sum += param.length;
    };

    console.log(sum);
    console.log(Math.floor(sum / params.length));

}

solve('chocolate', 'ice cream', 'cake');