function solve(numbers){

    let arr = numbers.reverse().map(x => x * 2);
    let result = [];

    for(let i = 0; i < arr.length; i+= 2){
        result.push(arr[i]);
    }

    return result.join(' ');

}

console.log(solve([3, 0, 10, 4, 7, 3]));