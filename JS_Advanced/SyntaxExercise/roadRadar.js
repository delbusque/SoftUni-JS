function solve(speed, area) {
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    let print;

    switch (area) {
        case 'motorway':
            if (speed <= motorway) {
                print = `Driving ${speed} km/h in a ${motorway} zone`;
            }
            else {
                let difference;
                let status;
                if (speed <= motorway + 20) {
                    difference = speed - motorway;
                    status = 'speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${motorway} - ${status}`;
                }
                else if (speed > motorway + 20 && speed <= motorway + 40) {
                    difference = speed - motorway;
                    status = 'excessive speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${motorway} - ${status}`;
                }
                else {
                    difference = speed - motorway;
                    status = 'reckless driving';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${motorway} - ${status}`;
                }
            }
            break;

            case 'interstate':
            if (speed <= interstate) {
                print = `Driving ${speed} km/h in a ${interstate} zone`;
            }
            else {
                let difference;
                let status;
                if (speed <= interstate + 20) {
                    difference = speed - interstate;
                    status = 'speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${interstate} - ${status}`;
                }
                else if (speed > interstate + 20 && speed <= interstate + 40) {
                    difference = speed - interstate;
                    status = 'excessive speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${interstate} - ${status}`;
                }
                else {
                    difference = speed - interstate;
                    status = 'reckless driving';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${interstate} - ${status}`;
                }
            }
            break;

            case 'city':
            if (speed <= city) {
                print = `Driving ${speed} km/h in a ${city} zone`;
            }
            else {
                let difference;
                let status;
                if (speed <= city + 20) {
                    difference = speed - city;
                    status = 'speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${city} - ${status}`;
                }
                else if (speed > city + 20 && speed <= city + 40) {
                    difference = speed - city;
                    status = 'excessive speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${city} - ${status}`;
                }
                else {
                    difference = speed - city;
                    status = 'reckless driving';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${city} - ${status}`;
                }
            }
            break;

            case 'residential':
            if (speed <= residential) {
                print = `Driving ${speed} km/h in a ${residential} zone`;
            }
            else {
                let difference;
                let status;
                if (speed <= residential + 20) {
                    difference = speed - residential;
                    status = 'speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${status}`;
                }
                else if (speed > residential + 20 && speed <= residential + 40) {
                    difference = speed - residential;
                    status = 'excessive speeding';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${status}`;
                }
                else {
                    difference = speed - residential;
                    status = 'reckless driving';
                    print = `The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${status}`;
                }
            }
            break;
    }
    return print;
}


console.log(solve(200, 'motorway'));
console.log(solve(120, 'interstate'));
console.log(solve(21, 'residential'));
console.log(solve(40, 'city'));