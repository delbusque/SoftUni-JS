function solve(n, k) {

    let array = [1];

    for (let index = 0; index < n - 1; index++) {

        let next = 0;

        for (let i = 0; i < k; i++) {

            if (array.length - i - 1 >= 0) {

                next += array[array.length - i - 1];

            }
        }
        
        array.push(next);
    }

    return array;
}

console.log(solve(8, 2));