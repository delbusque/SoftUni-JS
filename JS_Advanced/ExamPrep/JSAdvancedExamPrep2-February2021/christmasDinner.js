class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        return this._budget = value;
    }

    shopping(product) {
        let [type, price] = product;
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        let arePresent = recipe.productsList.every(prod => this.products.includes(prod));
        if (arePresent) {
            this.dishes.push({
                recipeName: recipe.recipeName,
                productsList: recipe.productsList
            });
            return `${recipe.recipeName} has been successfully cooked!`
        }
        else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
    
        if (!this.dishes.values(dish)) {
            throw new Error("We do not have this dish");
        }
        if(Object.keys(this.guests).includes(name)){
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let result = [];


        for (const guest in this.guests) {
            let dish = this.guests[guest];
            let dishProducts = this.dishes.find(d=>d.recipeName == dish);
            result.push(`${guest} will eat ${dish}, which consists of ${dishProducts.productsList.join(', ')}`);
        }

        return result.join('\n');

    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());