function solve(arr) {
    let input = [];
    arr.forEach(x => {
        input.push(x.split(' => '))
    });

    let juices = new Map();
    let bottles = new Map();

    for (const fl of input) {
        let flav = fl[0];
        let quant = Number(fl[1]);

        let currQuant = juices.get(flav);

        if (juices.has(flav)) {
            currQuant += quant;
            juices.set(flav, currQuant)
        } else {
            juices.set(flav, quant)
        }
        currQuant = juices.get(flav);

        if (currQuant >= 1000) {

            if (currQuant % 1000 == 0) {
                if (bottles.has(flav)) {
                    let readyBottles = currQuant / 1000;
                    let leftQuantity = currQuant - (readyBottles * 1000);
                    let currBottles = bottles.get(flav);
                    currBottles += readyBottles;
                    bottles.set(flav, currBottles);
                    juices.set(flav, leftQuantity);
                } else {
                    let readyBottles = currQuant / 1000;
                    let leftQuantity = currQuant - (readyBottles * 1000);
                    bottles.set(flav, readyBottles);
                    juices.set(flav, leftQuantity);
                }

            } else {
                if (bottles.has(flav)) {
                    let leftQuantity = currQuant % 1000;
                    let readyBottles = (currQuant - leftQuantity) / 1000;
                    let currBottles = bottles.get(flav);
                    currBottles += readyBottles;
                    bottles.set(flav, currBottles);
                    juices.set(flav, leftQuantity);
                } else {
                    let leftQuantity = currQuant % 1000;
                    let readyBottles = (currQuant - leftQuantity) / 1000;
                    bottles.set(flav, readyBottles);
                    juices.set(flav, leftQuantity);
                }
            }
        };
    }

    let result = bottles.entries();
    for (const b of result) {
        console.log(`${b[0]} => ${b[1]}`);
    }
}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])