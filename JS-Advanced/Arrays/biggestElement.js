function solve(matrix) {

    let res = [];
    
    for (const line of matrix) {

        let arr = line.sort((a, b) => a - b);
        let biggest = arr.pop();
        res.push(biggest);

    }

    res.sort((a,b) => a-b);
    return res.pop();
    
}

console.log(solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));