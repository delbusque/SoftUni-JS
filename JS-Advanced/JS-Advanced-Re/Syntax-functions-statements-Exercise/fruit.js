function fruits(fruit, weightInGrams, pricePerKg) {

    let weight = weightInGrams / 1000;
    let money = weight * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

fruits('apple', 1563, 2.35);
fruits('orange', 983, 2.35);