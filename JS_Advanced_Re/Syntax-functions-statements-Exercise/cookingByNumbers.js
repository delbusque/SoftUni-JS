function solve(numb, oper, oper2, oper3, oper4, oper5) {
    let arr = [];
    arr.push(oper);
    arr.push(oper2);
    arr.push(oper3);
    arr.push(oper4);
    arr.push(oper5);
    let result = numb;

    for (const op of arr) {
        switch (op) {
            case 'chop':
                result /= 2;
                console.log(result);
                break;
            case 'dice':
                result = Math.sqrt(result);
                console.log(result);
                break;
            case 'spice':
                result += 1;
                console.log(result);
                break;
            case 'bake':
                result *= 3;
                console.log(result);
                break;
            case 'fillet':
                result *= 0.8;
                console.log(result);
                break;
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');