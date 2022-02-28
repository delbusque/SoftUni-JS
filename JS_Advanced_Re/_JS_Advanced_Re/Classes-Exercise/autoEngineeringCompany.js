function solve(arr) {
    let carFactory = {};

    arr.forEach(x => {
        let [brand, model, quantity] = x.split(' | ');
        quantity = Number(quantity);

        if (!carFactory[brand]) {
            carFactory[brand] = {};
        }
        if (!carFactory[brand][model]) {
            carFactory[brand][model] = 0;
        }
        carFactory[brand][model] += quantity;
    });

    for (const brand in carFactory) {
        console.log(brand);
        for (const model in carFactory[brand]) {
            console.log(`###${model} -> ${carFactory[brand][model]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])