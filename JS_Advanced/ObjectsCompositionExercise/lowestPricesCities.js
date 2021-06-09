function solve(input) {

    let products = {};

    for (const it of input) {
        let [town, name, price] = it.split(' | ');
        price = Number(price);

        if(!products.hasOwnProperty(name)){
            products[name] = {};
        }

        products[name][town] = price;
    }

    let result = [];

    for (const it in products) {
        let sorted = Object.entries(products[it]).sort((a,b) => a[1]-b[1]);
        let cheapestTown = sorted[0];
        console.log(`${it} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }
}
solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])