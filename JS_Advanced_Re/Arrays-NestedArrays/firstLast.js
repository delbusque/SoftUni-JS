function sum(input) {
    let result = 0;
    if (input.length < 2) {
        result += (Number(input.pop()) * 2);
    } else {
        result = (Number(input.pop())) + (Number(input.shift()));
    }
    return result;
}

console.log(sum(['100', '20']))