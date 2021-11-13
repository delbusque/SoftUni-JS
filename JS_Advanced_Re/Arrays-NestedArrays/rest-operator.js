let cars = ['Honda', 'BMW', 'Opel'];

let [wish] = cars;
let [...list] = cars;
let [wishAgain, ...newList] = cars;

let [...copiedCars] = cars;
copiedCars[0] = 'Pontiac';

console.log(wish);
console.log(list);
console.log(wishAgain);
console.log(newList);

console.log(copiedCars);
console.log(cars);