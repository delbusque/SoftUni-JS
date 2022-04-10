let cars = ['Opel', 'BMW', 'Audi', 'Honda', 'Akura'];

let carsWithA = cars.find(c => c[0] == 'A')
console.log(carsWithA);

if (cars.some(c => c.startsWith('O'))) {
    console.log('Yeaaa')
};

let result = cars.filter((c) => !c.startsWith('A'));
console.log(result);

let mappin = cars.filter(c => c.startsWith('A')).map(c => c.toLowerCase()).join(', ');
console.log(mappin);

console.log(cars)