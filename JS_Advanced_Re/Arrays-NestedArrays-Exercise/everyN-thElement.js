function solve(input, n) {

    // let result = [];

    // input.forEach((x, i) => {
    //     if (i % n == 0) {
    //         result.push(x);
    //     }
    // });

    // return result;

    return input.filter((x, i) => {
        if (i % n == 0) {
            return x;
        }
    });
}


console.log(solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2))