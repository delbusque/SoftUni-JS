function solve(input) {

    input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        };
        return a.length - b.length;
    });

    return input;

}

console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]));