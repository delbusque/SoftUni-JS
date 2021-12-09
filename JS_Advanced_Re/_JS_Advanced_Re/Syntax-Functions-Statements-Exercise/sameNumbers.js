function solve(input) {
    let str = input.toString();
    let sum = str.split('').reduce(((a, x) => a + Number(x)), 0);

    let isEqual = true;
    for (let i = 0; i < str.length - 1; i++) {
        let curr = str[i];
        if (str[i + 1] != curr) {
            isEqual = false;
            break;
        }
    }
    console.log(isEqual);
    console.log(sum);
}


solve(1234);