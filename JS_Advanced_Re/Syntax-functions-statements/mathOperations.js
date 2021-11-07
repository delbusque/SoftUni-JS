function maths(a, b, op) {
    let result;
    if (op == '+') {
        result = a + b;
    } else if (op == '-') {
        result = a - b;
    } else if (op == '*') {
        result = a * b;
    } else if (op == '/') {
        result = a / b;
    } else if (op == '%') {
        result = a % b;
    } else if (op == '**') {
        result = a ** b;
    }
    console.log(result);
}

maths(3, 5.5, '*');