class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.')
        }

        let currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(currentPlant);
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let rippen = this.plants.find(plant => plant.plantName == plantName);

        if (!rippen) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (rippen.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        rippen.ripe = true;
        rippen.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let index;

        let harvest = this.plants.find((plant, i) => {
            index = i;
            return plant.plantName == plantName
        });

        if (!harvest) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (harvest.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants.splice(index, 1);

        let harvestedPlant = {
            plantName,
            quantity: harvest.quantity
        }

        this.storage.push(harvestedPlant);
        this.spaceAvailable += harvest.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = [];

        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        let currentPlants = [];
        this.plants.forEach(plant => currentPlants.push(plant.plantName));

        result.push(`Plants in the garden: ${currentPlants.join(', ')}`);

        if (this.storage.length == 0) {
            return `Plants in storage: The storage is empty.`
        } else {
            let currentStorage = [];
            this.storage.forEach(plant => currentStorage.push(`${plant.plantName} (${plant.quantity})`));
            result.push(`Plants in storage: ${currentStorage.join(', ')}`)
        }

        return result.join('\n')
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());