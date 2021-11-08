function elements(arr) {
    console.log(arr.reduce((a, b) => a + b));
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        let current = 1 / arr[index];
        sum += current;
    }
    console.log(sum);
    let output = '';
    for (let index = 0; index < arr.length; index++) {
        output += arr[index].toString();
    }
    console.log(output)
}

elements([2, 4, 8, 16])