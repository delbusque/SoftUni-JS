function solve(arr, step) {

    let res = [];

    for (let i = 0; i < arr.length; i += step) {
        res.push(arr[i]);
    }

    return res;
}

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2))