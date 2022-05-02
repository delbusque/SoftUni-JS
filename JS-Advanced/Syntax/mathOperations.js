function mathOperation(a, b, str){
    
    switch(str){
        case '+': console.log(a + b); break;
        case '*': console.log(a * b); break;
        case '-': console.log(a - b); break;
        case '/': console.log(a / b); break;
        case '%': console.log(a % b); break;
        case '**': console.log(a ** b); break;
    }
}

mathOperation(2, 3, '/');