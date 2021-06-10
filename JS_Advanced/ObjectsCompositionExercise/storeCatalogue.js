function store(input) {
    let store = {};

    for (const it of input.sort()) {
        let [product, price] = it.split(' : ');
        price = Number(price);

        if (!store.hasOwnProperty(product[0])) {
            store[product[0]] = {};
            store[product[0]][product] = price;
            continue;
        }

        for (const letter in store) {
            if (letter === product[0]) {
                store[letter][product] = price;
            }
        }
    }

    let result = [];

    for (const key in store) {
        result.push(key);
        let list = Object.entries(store[key]);
        for (const products of list) {

            result.push(`  ${products[0]}: ${products[1]}`);

        }
    }
    
    return result.join('\n');
}





console.log(store([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']))