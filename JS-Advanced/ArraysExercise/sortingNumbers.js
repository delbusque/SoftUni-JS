function solve(numbers){

    numbers.sort((a,b) => a-b);

    let result = [];
    
    while (numbers.length) {
        
        result.push(numbers.shift());
        result.push(numbers.pop());

    }

    return result.filter(n => n !== undefined);

}


console.log(solve([1, 65, 3, 52, 48, 63, 31, 18, 56]));