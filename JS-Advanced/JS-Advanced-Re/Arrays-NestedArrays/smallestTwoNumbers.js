function smallest(input) {
    let result = Math.min(...input);
    let newInput = input.filter(x => x !== result);
    let output = [result];

    result = Math.min(...newInput);
    output.push(result);
    console.log(output.join(' ').trimEnd());
}

smallest([-1, 3, 0, -20, 10, 4, -1, 7, -20, 3]);