function solve(arr, flavourOne, flavourTwo){

let start = arr.findIndex(x => x === flavourOne);
let end = arr.findIndex(x => x === flavourTwo);

    return arr.slice(start, end + 1);

}

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))