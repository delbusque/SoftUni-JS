function solve(number, oper, oper2, oper3, oper4, oper5, oper6) {
    let start = Number(number);
    let arr = [];
    arr.push(oper);
    arr.push(oper2);
    arr.push(oper3);
    arr.push(oper4);
    arr.push(oper5);
    let result = [];



    for (let i = 0; i < 5; i++) {
        switch (arr[i]) {
            case 'chop':
                start /= 2;
                result.push(start);
                break;
            case 'dice':
                start = Math.sqrt(start);
                result.push(start);
                break;
            case 'spice':
                start += 1;
                result.push(start);
                break;
            case 'bake':
                start *= 3;
                result.push(start);
                break;
            case 'fillet':
                    start *= 0.8;
                    result.push(start);
                    break;

        }

    }

    return result.join('\n');
}

console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));