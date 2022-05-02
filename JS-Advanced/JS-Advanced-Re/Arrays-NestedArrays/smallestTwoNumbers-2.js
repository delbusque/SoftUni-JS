function smallest(input) {
    let result = Math.min(...input);
    let output = [];

    let index = input.findIndex(x => x == result);
    output.push(input.splice(index, 1));

    result = Math.min(...input);
    index = input.findIndex(x => x == result);
    output.push(input.splice(index, 1));

    console.log(output.join(' '));
}

smallest([-1, 3, 0, 10, 4, -1, 7, 3]);