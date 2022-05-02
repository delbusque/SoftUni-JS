function solution() {

    let restockProduct = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }

    const recipes = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2,
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20,
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3,
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1,
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10,
        },
    }

    const action = {
        restock: (microelement, quantity) => {
            restockProduct[microelement] += quantity
            return `Success`;
        },
        prepare: (product, quantity) => {
            const ingredients = Object.keys(recipes[product]);

            for (const ingredian of ingredients) {
                if (restockProduct[ingredian] < recipes[product][ingredian] * quantity) {
                    return `Error: not enough ${ingredian} in stock`;
                }
            }

            ingredients.forEach((ingredian) => {
                restockProduct[ingredian] -= recipes[product][ingredian] * quantity;
            });

            return 'Success';
        },
        report: () => {
            return Object.keys(restockProduct)
                .reduce((a, c) => {
                    a.push(`${c}=${restockProduct[c]}`);
                    return a;
                }, [])
                .join(' ');
        },
    }


    function management(args) {
        [command, product, value] = args.split(" ");
        value = Number(value);
        return action[command](product, value);
    }

    return management;
}

let manager = solution();

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));

console.log(manager('report'));