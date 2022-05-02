let arr = [1, 2, 3, 4, 5];

let [...qrest] = arr;
let [q, a, ...vest] = arr;


console.log(vest);

function solve(... params){

    console.log(... params);
}

solve(1, 2);