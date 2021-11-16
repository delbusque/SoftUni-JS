function solve(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (const row of matrix) {
        if (Math.max(...row) >= biggest) {
            biggest = Math.max(...row);
        };
    };

    return biggest;
}

console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]))