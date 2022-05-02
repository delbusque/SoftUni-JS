function solve(input) {

    let result = [];

    for (const it of input) {
        let [name, level, items] = it.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({
            name,
            level,
            items
        })
    }

    return JSON.stringify(result);
}

console.log(solve([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]))