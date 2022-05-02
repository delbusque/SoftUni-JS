function solve(array, n){

    for (let index = 0; index < n; index++) {

        array.unshift(array.pop());    
    }

    return array.join(' ');

}

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));