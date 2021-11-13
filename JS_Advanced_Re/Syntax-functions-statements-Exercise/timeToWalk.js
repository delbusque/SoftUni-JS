function walk(steps, footPrint, kmPerH) {

    let distanceMeters = steps * footPrint;
    let extraMinutes = Math.floor(distanceMeters / 500);
    let mPerH = kmPerH * 1000;
    let time = (distanceMeters / (mPerH / 60)) + 4;;

    console.log(time);
}

walk(2564, 0.70, 5.5)