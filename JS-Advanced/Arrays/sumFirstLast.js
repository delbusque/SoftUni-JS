function solve(arr) {

    let result = Number(arr.pop()) + Number(arr.shift());

    return result;
}

console.log(solve(['10', '40']));