function solve(input) {
    let biggest = input[0];

    let result = input.reduce((a, x) => {
        if (x > biggest) {
            a.push(x);
            biggest = x;
        };
        return a;
    }, [input[0]]);

    return result;
}

console.log(solve([20,
    3,
    552,
    5,
    777776,
    88888111
]))