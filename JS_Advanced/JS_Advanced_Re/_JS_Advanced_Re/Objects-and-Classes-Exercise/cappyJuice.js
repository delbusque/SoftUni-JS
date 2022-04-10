function solve(input) {
    let data = {};
    let under1000 = {};

    for (const fruit of input) {
        let currData = fruit.split(' => ');
        let currFruit = currData[0];
        let currQuantity = Number(currData[1]);

        if (!data[currFruit]) {
            if (currQuantity >= 1000) {
                data[currFruit] = currQuantity;
            } else {
                if (!under1000[currFruit]) {
                    under1000[currFruit] = currQuantity;
                } else {
                    under1000[currFruit] += currQuantity;
                    if (under1000[currFruit] >= 1000) {
                        data[currFruit] = under1000[currFruit];
                    }
                }
            }
        } else {
            data[currFruit] += currQuantity;
        }


    }

    for (const key in data) {
        console.log(`${key} => ${Math.floor(data[key] / 1000)}`)
    }

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])