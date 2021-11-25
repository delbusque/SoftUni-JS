function towns(input) {

    let towns = {};

    input.forEach(x => {
        let current = x.split(' <-> ');
        let population = Number(current[1]);
        if (towns.hasOwnProperty(current[0])) {
            towns[current[0]] += population;
        } else {
            towns[current[0]] = population;
        }
    });

    Object.entries(towns).forEach(t => {
        console.log(`${t[0]} : ${t[1]}`);
    })
}

towns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])