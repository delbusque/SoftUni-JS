function solve(input) {
    function createVehicle() {
        let vehicles = {};

        return {
            create(name, inherit, parentName) {
                vehicles[name] = inherit ? Object.create(vehicles[parentName]) : {};
            },
            set(name, key, value) {
                vehicles[name][key] = [value];
            },
            print(name) {
                let log = [];
                for (const key in vehicles[name]) {
                    log.push(`${key}:${vehicles[name][key]}`)
                }
                console.log(log.join(','));
            }
        }
    }

    let action = createVehicle();

    input.map(line => line.split(' '))
        .forEach(cmd => {
            [command, ...args] = cmd;
            action[command].apply(null, args);
        })
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])