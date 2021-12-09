function solve(a, b) {

    if (a % b == 0) {
        console.log(b);
    } else {
        for (let index = b; index >= 0; index--) {
            if (a % index == 0 && b % index == 0) {
                console.log(index);
                break;
            }
        }
    }
}

solve(5, 15);