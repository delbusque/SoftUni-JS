function solve(numbers){
    const result = [];

    for (const it of numbers) {
        if(it < 0){
            result.unshift(it);
        }
        else{           
            result.push(it);
        }     
    }

    return result.join('\n');

}

console.log(solve([3, -2, 0, -1]));