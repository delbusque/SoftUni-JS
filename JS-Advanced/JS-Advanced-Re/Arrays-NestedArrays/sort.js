let cars = ['Opel', 'BMW', 'audi', 'Honda'];

let numbs = [12, 3, 0, -4, 100, 2];

console.log(cars.sort((a, b) => a.localeCompare(b)));
console.log(numbs.sort((a, b) => b - a));