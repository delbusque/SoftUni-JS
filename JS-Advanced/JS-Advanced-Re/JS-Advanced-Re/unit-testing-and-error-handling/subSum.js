function subSum(arr, a, b) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (a < 0) {
        a = 0;
    }
    if (b > arr.length - 1) {
        b = arr.length - 1;
    }

    return arr.slice(a, b + 1).reduce((a, x) => a + Number(x), 0)
}


console.log(subSum([], 1, 2));