function solve() {
    let args = {};

    for (const arg of arguments) {
        console.log(`${typeof arg}: ${arg}`);
        !args[typeof arg] ? args[typeof arg] = 1 : args[typeof arg]++;
    }

    Object.keys(args).sort((a, b) => args[b] - args[a])
        .forEach(x => console.log(`${x} = ${args[x]}`));
}

solve('cat', 42, function() { console.log('Hello world!'); });