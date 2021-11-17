function solve(commands) {
    let output = [];

    commands.forEach((x, i) => {
        if (x == 'add') {
            output.push(i + 1);
        } else if (x == 'remove') {
            output.pop();
        }
    });

    if (output.length == 0) {
        console.log('Empty');
        return;
    };

    return output.forEach(x => console.log(x));
}

solve(['add',
    'add',
    'remove'
]);