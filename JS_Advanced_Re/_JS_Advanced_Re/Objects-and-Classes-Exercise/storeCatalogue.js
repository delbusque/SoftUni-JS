function solve(input) {
    let result = {};
    for (const item of input) {
        let [name, price] = item.split(' : ');
        let curObj = {};

        if (!result[name[0]]) {
            result[name[0]] = [];
            curObj[name] = Number(price);
            result[name[0]].push(curObj);
        } else {
            curObj[name] = Number(price);
            result[name[0]].push(curObj);
        }
    }
    let products = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    for (const index of products) {
        console.log(index[0]);
        let ordered = [];

        for (const obj of index[1]) {
            let currEntr = Object.entries(obj);
            ordered.push(`  ${currEntr[0][0]}: ${currEntr[0][1]}`);
        }

        for (const iterator of ordered.sort((a, b) => a.localeCompare(b))) {
            console.log(iterator);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])