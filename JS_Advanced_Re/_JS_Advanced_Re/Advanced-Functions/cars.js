function solve(input) {
    function createVehicle() {
        let vehicles = {};
        return {
            create(name, inherit, parentName) {
                vehicles[name] = inherit ? Object.create(vehicles[parentName]) : {};
            },
            set(name, key, value) {
                vehicles[name][key] = value;
            },
            print(name) {
                let currentLogs = [];
                for (const key in vehicles[name]) {
                    currentLogs.push(`${key}:${vehicles[name][key]}`)
                };
                console.log(currentLogs.join(','))
            }
        }
    }
    let action = createVehicle();
    let inputData = input.map(x => x.split(' '));
    inputData.forEach(x => {
        [command, ...args] = x;
        action[command].apply(null, args);
    })

}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);