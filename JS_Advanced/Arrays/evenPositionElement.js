function solve(arr){
    let result = [];

    for (let index = 0; index < arr.length; index+=2) {
        result.push(arr[index]);
        
    }

    return result.join(" ");
}

console.log(solve(['20', '30', '40', '50', '60']));