let sum3 = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(sum3(1)(2)(3));

let sum4 = (a) => (b) => (c) => (d) => {
    let result = a + b + c + d;
    return result;
}
console.log(sum4(1)(2)(3)(4));

let curry = sum3(1);
let curry2 = curry(2);
let result = curry2(3);

console.log(result);