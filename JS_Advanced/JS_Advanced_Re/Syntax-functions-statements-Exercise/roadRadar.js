function solve(speed, area) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let message = '';

    if (area == 'motorway') {
        if (speed <= motorway) {
            message = `Driving ${speed} km/h in a ${motorway} zone`
        } else {
            if (speed - motorway <= 20) {
                message = `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - speeding`
            } else if (speed - motorway > 20 && speed - motorway <= 40) {
                message = `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - excessive speeding`
            } else if (speed - motorway > 40) {
                message = `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - reckless driving`
            }
        }
    } else if (area == 'interstate') {
        if (speed <= interstate) {
            message = `Driving ${speed} km/h in a ${interstate} zone`
        } else {
            if (speed - interstate <= 20) {
                message = `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - speeding`
            } else if (speed - interstate > 20 && speed - interstate <= 40) {
                message = `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - excessive speeding`
            } else if (speed - interstate > 40) {
                message = `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - reckless driving`
            }
        }
    } else if (area == 'city') {
        if (speed <= city) {
            message = `Driving ${speed} km/h in a ${city} zone`
        } else {
            if (speed - city <= 20) {
                message = `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - speeding`
            } else if (speed - city > 20 && speed - city <= 40) {
                message = `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - excessive speeding`
            } else if (speed - city > 40) {
                message = `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - reckless driving`
            }
        }
    } else if (area == 'residential') {
        if (speed <= residential) {
            message = `Driving ${speed} km/h in a ${residential} zone`
        } else {
            if (speed - residential <= 20) {
                message = `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - speeding`
            } else if (speed - residential > 20 && speed - residential <= 40) {
                message = `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - excessive speeding`
            } else if (speed - residential > 40) {
                message = `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - reckless driving`
            }
        }
    }

    console.log(message);
}

solve(140, 'city');