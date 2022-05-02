function foo(x) {
    return x * x
}

function per(y) {
    return foo(y + 2)
}

console.log("Hello World");

let utils = {
    foo,
    per
}

module.exports = utils;