function carFactory(input) {

    const engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }

    const carriage = {
        type: input.carriage,
        color: input.color
    }

    const car = { model: input.model }

    if (input.power <= 90) {
        car['engine'] = Object.assign(engines.smallEngine);
    }
    else if (input.power > 90 && input.power <= 120) {
        car['engine'] = Object.assign(engines.normalEngine);
    }
    else {
        car['engine'] = Object.assign(engines.monsterEngine);
    }

    car['carriage'] = Object.assign(carriage);

    let wheel = Math.floor(input.wheelsize);
    if (input.wheelsize % 2 === 0) {
        wheel = Math.floor(input.wheelsize - 1);
    }

    car['wheels'] = [wheel, wheel, wheel, wheel]

    return car;
}


console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))