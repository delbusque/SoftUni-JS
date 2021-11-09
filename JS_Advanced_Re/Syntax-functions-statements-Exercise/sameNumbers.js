function solve(input) {
    let check = input.toString();
    let arr = Array.from(check);
    let arr2 = input.toString().split('');
    let sum = arr2.reduce((a, b) => a + Number(b), 0);
    let areEqual = true;

    for (let index = 0; index < check.length - 1; index++) {
        if (check[index] !== check[index + 1]) {
            console.log(false);
            console.log(sum);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        console.log(true);
        console.log(sum);
    }
}

solve(222)