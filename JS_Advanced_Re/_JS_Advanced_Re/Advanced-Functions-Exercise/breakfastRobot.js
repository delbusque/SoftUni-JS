function solution() {

    let stock = {
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

    function management(order) {
        let currOrder = order.split(' ');
        let [command, type, value] = currOrder;
        value = Number(value);

        if (command == 'restock') {
            stock[type] += value;
            return 'Success';

        } else if (command == 'prepare') {
            for (const food in recipes) {
                if (food == type) {
                    for (const key in recipes[type]) {
                        if (recipes[type][key] * value > stock[key]) {
                            return `Error: not enough ${key} in stock`;
                        }
                    }
                    for (const key in stock) {
                        if (recipes[food][key]) {
                            stock[key] -= recipes[food][key];
                        }
                    }
                    return 'Success';
                }
            }
        } else if (command == 'report') {
            return `protein=${stock[`protein`]} carbohydrate=${stock[`carbohydrate`]} fat=${stock[`fat`]} flavour=${stock[`flavour`]}`;
        }
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