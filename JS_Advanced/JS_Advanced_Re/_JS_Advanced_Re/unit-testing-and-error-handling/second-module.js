const { getName, family, greeting } = require("./module.js");

let current = 'Gosho';
let name = getName(current);

console.log(greeting(name, family));