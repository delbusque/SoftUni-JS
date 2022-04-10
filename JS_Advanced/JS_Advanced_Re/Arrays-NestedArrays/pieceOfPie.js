function pie(input, a, b) {
    let start = input.findIndex(x => x === a);
    let end = input.findIndex(x => x === b);

    //return input.splice(start, end - start + 1);

    return input.slice(start, end + 1);
}

console.log(pie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'))