function solve(input) {

    let town;
    let latitude;
    let longitude;

    let coordinates = [];
    
    for (const iterator of input) {
        [town, latitude, longitude] = iterator.split(' | ');
        town = town.slice(2);
        longitude = longitude.slice(0, -2);
        coordinates = input.splice(1);
        break;
    }

    let result = [];

    for (const item of coordinates) {
        [nameOfTown, lat, long] = item.split(' | ');
        nameOfTown = nameOfTown.slice(2);
        lat = Number(Number(lat).toFixed(2));
        long = long.slice(0, -2);
        long = Number(Number(long).toFixed(2));

        let currentTown = {};
        currentTown[town] = nameOfTown;
        currentTown[latitude] = lat;
        currentTown[longitude] = long;

        result.push(currentTown)
    }

    return JSON.stringify(result);
}

console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))