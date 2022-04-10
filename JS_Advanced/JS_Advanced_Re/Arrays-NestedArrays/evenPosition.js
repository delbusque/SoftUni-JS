function even(input) {
    let result = [];
    input.forEach((x, i) => {
        if (i % 2 == 0) {
            result.push(x);
        }
    });

    return result.join(' ');
}

console.log(even(['20', '30', '40', '50', '60']));