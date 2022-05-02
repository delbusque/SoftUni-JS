function solve(numbers) {

    let arr = [];
    let biggest = numbers[0];
    arr.push(biggest);

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i + 1] >= biggest) {

            biggest = numbers[i + 1];
            arr.push(biggest);      
        }
    }

    return arr;

}

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]));