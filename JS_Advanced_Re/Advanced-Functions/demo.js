function add(a, b) { // let add = function(a, b) {
    return a + b;
}

// let add = (a, b) => a + b;

// let add = (a,b) => {
// let sum = a + b;
// return sum;
//}

function multiply(a, b) {
    return a * b;
}

function calculate(operation, operandOne, operandTwo) {
    let sum = operation(operandOne, operandTwo);
    return sum;
}

let result = calculate(add, 5, 10);
console.log(result);