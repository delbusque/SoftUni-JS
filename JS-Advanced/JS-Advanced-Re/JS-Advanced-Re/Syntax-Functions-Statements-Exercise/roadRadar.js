function radar(speed, area) {

    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    for (const key in speedLimits) {
        let speedMessage = '';
        if (area == key) {
            if (speed <= speedLimits[key]) {
                speedMessage = `Driving ${speed} km/h in a ${speedLimits[key]} zone`;
            } else {
                let difference = speed - speedLimits[key];
                let status = '';

                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                speedMessage = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[key]} - ${status}`;
            }
            console.log(speedMessage);
        }
    }
}

radar(30, 'city')