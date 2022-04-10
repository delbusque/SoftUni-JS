function printText(text) {
    console.log(text);
}

printText('Pesho e gotin');

const printIt = function(text) {
    console.log(text)
};

printIt('Pesho e oshte po-gotin');

let print = () => {
    console.log('Hello');
}

print();

let calc = (a = 0, b = 0) => {
    return a + b;
}

let sum = calc(11, 2);

console.log(sum);
console.log(calc(1, 1));
console.log(calc());
console.log(calc(undefined, 100));

let result = 5 / 2;

console.log(result);
console.log(Math.trunc(result));
console.log(Math.floor(result));