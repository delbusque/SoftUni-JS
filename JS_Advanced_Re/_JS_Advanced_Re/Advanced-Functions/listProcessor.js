function solve(input) {
    let list = [];
    let commands = {
        add(text) {
            list.push(text);

        },
        remove(text) {
            list = list.filter(x => x !== text)
        },
        print() {
            console.log(list.join(','));
        }
    };

    input.forEach(x => {
        let commandLine = x.split(' ');
        let command = commandLine[0];
        let currentText = commandLine[1];
        if (currentText) {
            commands[command](currentText);
        } else {
            commands[command]();
        }
    })
}


let input = ['add pesho', 'add george', 'add peter', 'remove peter', 'print'];

solve(input);