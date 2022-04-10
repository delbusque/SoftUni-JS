class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;

    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        }

        let newCar = {
            model,
            horsepower,
            price,
            mileage
        }

        this.availableCars.push(newCar);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let desiredIndex;
        const desiredCar = this.availableCars.find((c, index) => {
            desiredIndex = index;
            return c.model == model
        });

        if (!desiredCar) {
            throw new Error(`${model} was not found!`)
        }

        if (desiredCar.mileage > desiredMileage) {

            let mileageDifferance = desiredCar.mileage - desiredMileage;

            mileageDifferance <= 40000 ? desiredCar.price -= desiredCar.price * 0.05 : desiredCar.price -= desiredCar.price * 0.10;
        }

        this.availableCars.splice(desiredIndex, 1);

        let soldCar = {
            model,
            horsepower: desiredCar.horsepower,
            soldPrice: desiredCar.price
        }

        this.soldCars.push(soldCar);
        this.totalIncome += soldCar.soldPrice;

        return `${model} was sold for ${(soldCar.soldPrice).toFixed(2)}$`

    }

    currentCar() {

        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        let result = [];
        result.push('-Available cars:');

        this.availableCars.forEach(car => {
            result.push(`---${car.model} - ${car.horsepower} HP - ${(car.mileage).toFixed(2)} km - ${(car.price).toFixed(2)}$`)
        })

        return result.join('\n')
    }

    salesReport(criteria) {
        if (criteria !== 'model' && criteria !== 'horsepower') {
            return 'Invalid criteria!'
        }

        let sortedSold;

        if (criteria == 'horsepower') {
            sortedSold = this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
        } else if (criteria == 'model') {
            sortedSold = this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }

        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        sortedSold.forEach(car => result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));

        return result.join('\n')
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));