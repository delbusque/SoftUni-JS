function juiceStore(arr) {
    let bottles = new Map();

    arr.reduce((acc, x) => {
        [flavour, quantity] = x.split(' => ');
        quantity = Number(quantity);

        if (!acc.hasOwnProperty(flavour)) {
            acc[flavour] = 0;
        }
        acc[flavour] += quantity;

        if (acc[flavour] >= 1000) {
            if (!bottles.has(flavour)) {
                bottles.set(flavour, 0);
            }
            bottles.set(flavour, bottles.get(flavour) + parseInt(acc[flavour] / 1000));
            acc[flavour] %= 1000;
        }

        return acc;
    }, {});

    for (const fla of bottles) {
        console.log(`${fla[0]} => ${fla[1]}`);
    }
}

juiceStore(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]
);