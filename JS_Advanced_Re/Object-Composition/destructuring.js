let names = ['Ivan', 'Peter', 'Radoslava'];
let [nameOne, ...others] = names;
console.log(nameOne);
console.log(others);

let city = {
    name: 'Plovdiv',
    population: 500000,
    treasury: 300000000,
    taxRate: 10,
    streets: {
        'Iako-Dorosiev': 100,
        Baucher: 44,
        Marica: 200
    },
    collectTaxes() {
        this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(percentage) {
        this.population += Math.floor(this.population * percentage / 100);
    },
    applyRecession(percentage) {
        this.treasury -= Math.floor(this.treasury * percentage / 100);
    }
};

let { population, name: cityName, ...restCity } = city;
console.log(population);
console.log(cityName);

let { streets: { Baucher, 'Iako-Dorosiev': IakoDorosievStr, ...rest } } = city;

console.log(restCity);
console.log(Baucher);
console.log(IakoDorosievStr);
console.log(rest);

let cats = [{ name: 'Navcho', age: 3 }, { name: 'Puffy', age: 5 }, { name: 'Muck', age: 6 }];

let [{ name, age }, cat2] = cats;
console.log(age);
console.log(cat2.name);


function printNames({ name, ...otherProps }) {
    console.log(name);
    console.log(otherProps.age);
}

cats.forEach(printNames);