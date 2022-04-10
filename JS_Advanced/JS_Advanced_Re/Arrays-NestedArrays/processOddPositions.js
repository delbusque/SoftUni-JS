function solve(input) {
    let result = [];

    input.filter((x, i) => {
        if (i % 2 !== 0) {
            result.push(x * 2);
        }
    });

    return result.reverse().join(' ');

}

console.log(solve([10, 15, 20, 25]));