function factory(library, orders) {
    let result = [];
    orders.forEach((o, i) => {
        let currObj = {};
        currObj = o['template'];

        let arr = o['parts'];
        arr.forEach(func => {
            let currFunc = library[func];
            currObj[func] = currFunc;

        })
        result.push(currObj);
    });

    return result;
}


const library = {
    print: function() {
        console.log(`${this.name} is printing a page`);
    },
    scan: function() {
        console.log(`${this.name} is scanning a document`);
    },
    play: function(artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [{
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);
products.forEach(p => {
    if (p.print) {
        p.print();
    }
})