function mathOperation(a, b, str) {

    switch (str) {
        case '+':
            console.log(a + b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '/':
            console.log(a / b);
            break;
        case '%':
            console.log(a % b);
            break;
        case '**':
            console.log(a ** b);
            break;
    }
}

maths(3, 5.5, '*');