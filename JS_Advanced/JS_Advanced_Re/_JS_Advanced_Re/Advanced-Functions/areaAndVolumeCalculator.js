function solve(area, vol, input) {
    let coordObj = JSON.parse(input);
    let output = [];

    coordObj.forEach(obj => {
        let current = {};
        current.area = area.call(obj);
        current.volume = vol.call(obj);
        output.push(current);
    });

    return output;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))