function city(name, population, treasury) {
    let city = {
        name,
        population,
        treasury
    };
    return city;
}

console.log(city('Tortuga',
    7000,
    15000))