function solve(numbers){

    let res = numbers.sort((a,b) => a-b).slice(numbers.length / 2);

    return res;

}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));