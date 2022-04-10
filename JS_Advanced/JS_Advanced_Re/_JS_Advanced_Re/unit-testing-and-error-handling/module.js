function getName(name) {
    return name;
}

console.log(123);

module.exports = {
    getName,
    family: 'Petrov',
    greeting(name, family) {
        return `Hello ${name} ${family}`
    }
}