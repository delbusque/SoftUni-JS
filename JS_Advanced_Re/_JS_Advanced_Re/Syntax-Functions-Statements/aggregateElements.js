function solve(input) {
    console.log(input.reduce(((a, x) => a + x), 0));
    console.log(input.reduce(((a, x) => a + (1 / x)), 0));
    console.log(input.reduce(((a, x) => a + x), ''));
}

solve([1, 2, 3]);