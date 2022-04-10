function solve(input) {
    let heroes = [];

    for (const hero of input) {
        let data = hero.split(' / ');
        let name = data[0];
        let level = Number(data[1]);
        let currHero = {
            name,
            level,
            items: []
        }
        if (data.length > 2) {
            let items = data[2].split(', ');
            currHero.items = items;
        }

        heroes.push(currHero);
    }

    return JSON.stringify(heroes);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1'
]));