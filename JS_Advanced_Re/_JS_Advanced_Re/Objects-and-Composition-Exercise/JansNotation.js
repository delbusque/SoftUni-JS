function solve(input) {
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    let result = [];

    for (const x of input) {
        if (typeof x == 'number') {
            result.push(x);
        } else {
            if (result.length < 2) {
                return 'Error: not enough operands!';
            } else {
                let b = result.pop();
                let a = result.pop();
                result.push(operations[x](a, b));
            }
        }
    }

    return result.length > 1 ? 'Error: too many operands!' : result[0];
}

console.log(solve([15,
    '/'
]));