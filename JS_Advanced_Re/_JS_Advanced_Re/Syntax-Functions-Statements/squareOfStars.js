function solve(input = 5) {
    let output = '*';

    for (let index = 1; index < input; index++) {
        output += ' *';
    }

    for (let index = 1; index <= input; index++) {
        console.log(output);
    }
}

solve();