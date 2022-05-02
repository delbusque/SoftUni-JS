function solve(names){

    names.sort((a,b) => a.localeCompare(b));

    let result = names.map((x, i) => `${i+1}.${x}`);
    return result.join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));