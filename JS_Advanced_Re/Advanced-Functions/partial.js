let pow = (y, x) => x ** y;

let sqr = pow.bind(null, 10);

console.log(sqr(2));
console.log(sqr(3));