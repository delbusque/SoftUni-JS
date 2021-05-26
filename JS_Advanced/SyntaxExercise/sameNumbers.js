function solve(input) {

    let digits = input.toString().split('');
    let sum = 0;
    let boolResult = true;
    
    for (let i = 0; i < digits.length; i++) {

       sum += Number(digits[i]);

        if (digits[i] !== digits[i + 1] && digits[i + 1] !== undefined) {
            boolResult = false;
        }
    }

    return `${boolResult}\n${sum}`;
}

console.log(solve(2222222));
console.log(solve(1234));