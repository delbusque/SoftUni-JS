function solve(input) {
    let catalog = {};

    for (const x of input) {
        let curr = x.split(' | ');
        let town = curr[0];
        let product = curr[1];
        let price = Number(curr[2]);

        if (!catalog[product]) {
            catalog[product] = {};
            catalog[product][town] = price;
        } else {
            if (!catalog[product][town]) {
                catalog[product][town] = price;
            } else {
                catalog[product][town] = price;
            }
        }
    }

    for (const key in catalog) {
        let doubles = Object.entries(catalog[key]).sort((a, b) => a[1] - b[1]);
        let result = `${key} -> ${doubles[0][1]} (${doubles[0][0]})`
        console.log(result);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
    'New York | Orange | 2'
])