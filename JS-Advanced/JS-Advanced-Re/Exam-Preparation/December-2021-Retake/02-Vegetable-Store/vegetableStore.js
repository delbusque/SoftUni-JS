class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this._customerPurchases = [];
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(veg => {
            let [type, quantity, price] = veg.split(' ');
            price = Number(price);
            quantity = Number(quantity);

            let targetProduct = this.availableProducts.find(p => p.type == type);

            if (!targetProduct) {
                let currentProduct = { type, quantity, price };
                this.availableProducts.push(currentProduct);
            } else {
                if (price > targetProduct.price) {
                    targetProduct.price = price;
                }
                targetProduct.quantity += quantity;
            }
        })

        let uniqueTypes = [...new Set(this.availableProducts.map(product => product.type))];

        return `Successfully added ${uniqueTypes.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(product => {

            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);

            const targetProduct = this.availableProducts.find(p => p.type == type);

            if (!targetProduct) {
                if (this._customerPurchases.length == 0) {
                    throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
            }

            if (quantity > targetProduct.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += quantity * targetProduct.price;
            targetProduct.quantity -= quantity;

        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

    }

    rottingVegetable(type, quantity) {

        let targetProduct = this.availableProducts.find(p => p.type == type);

        if (!targetProduct) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > targetProduct.quantity) {
            targetProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            targetProduct.quantity -= quantity
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let result = [];
        result.push('Available vegetables:')
        let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
        sorted.forEach(p => {
            result.push(`${p.type}-${p.quantity}-$${p.price}`)
        });
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return result.join('\n')
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());