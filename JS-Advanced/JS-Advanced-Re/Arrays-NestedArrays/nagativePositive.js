function solve(input) {
    let result = [];
    input.map(x => {
        if (x < 0) {
            result.unshift(x);
        } else {
            result.push(x);
        }
    });
    result.forEach(x => console.log(x));
}

solve([3, -2, 0, -1])