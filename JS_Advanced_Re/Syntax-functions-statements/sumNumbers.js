function solve(inpA, inpB) {
    let a = Number(inpA);
    let b = Number(inpB);
    let result = 0;
    for (let index = a; index <= b; index++) {
        result += index;

    }
    console.log(result)
}

solve('1', '3')