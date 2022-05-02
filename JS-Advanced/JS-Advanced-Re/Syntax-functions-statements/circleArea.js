function area(a) {
    let type = typeof a;

    if (type == 'number') {
        console.log((Math.PI * (a ** 2)).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

area('5');