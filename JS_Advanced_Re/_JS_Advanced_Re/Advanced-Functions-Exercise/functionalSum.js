function add(n) {
    let sum = 0;

    function inner(m) {
        sum += m;
        return inner;

    };

    inner.toString = () => sum;
    return inner(n);
}

let result = add(1)(6)(-3)(4);
console.log(result.toString());