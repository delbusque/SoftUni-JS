function fruit(type, weightGrams, priceKg){
    
    let weight = weightGrams / 1000;
    let price = weight * priceKg;
    
    return `I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`;
}

console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));