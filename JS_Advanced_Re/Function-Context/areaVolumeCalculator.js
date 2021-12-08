function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

function calc(area, vol, input) {
    let coordinates = JSON.parse(input);
    let result = coordinates.map(c => {
        return {
            area: Math.abs(area.call(c)),
            volume: Math.abs(vol.call(c))
        }
    });

    return result;

}

console.log(calc(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`))