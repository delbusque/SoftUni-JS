function solve(input) {
    let objList = [];
    let commands = {
        create(name) {
            objList.push({
                [name]: {} });
        },
        inherit(name, parentName) {
            let inheritedObj = {}
        }
    }
    input.forEach(x => {

    })

}

let input = ['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
];