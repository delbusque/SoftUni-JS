function solve(numbers){

    let arr = numbers.sort((a, b) => a-b);

    let a = arr[0];
    let b;

    for(let i = 0; i < arr.length; i++){

        if(a !== arr[i]){
            b = arr[i];
            break;
        } 
    }
    
    return `${a} ${b}`;

}

console.log(solve([-1, 0, 10, 4, 7, 3, -1, 1999]));
console.log(solve([30, 15, 50, 5]));
