let cars = ['Honda', 'BMW', 'Opel'];

let [wish] = cars;
let [...list] = cars;
let [wishAgain, ...newList] = cars;

console.log(wish);
console.log(list);
console.log(wishAgain);
console.log(newList);