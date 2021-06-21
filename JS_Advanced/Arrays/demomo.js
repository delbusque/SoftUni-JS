// function returnDay(num){
//     const daysOfWeek = {
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Tuesday',
//         5: 'Friday',
//         6: 'Saturday',
//         7: 'Sunday'
//     }

//     if(num > 7 || num <1){
//         return null;
//     }

//     return daysOfWeek[num];

// }

// console.log(returnDay(-11));

// function betweenNums(min, max) {
//     return function (num) {
//         let result = '';
//         if (num >= min && num <= max) {
//             result = `I am ${num} years old kid :)`
//         }
//         return result;
//     }
// }

// let isChild = betweenNums(0, 18);
// console.log(isChild(7));

let nums = [1,2,3,4,5];
const doubled = nums.map((x) => x*2);
console.log(doubled);

nums.forEach(console.log(x * 3));