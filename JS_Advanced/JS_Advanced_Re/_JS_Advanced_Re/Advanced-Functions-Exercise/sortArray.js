function solve(arr, arg1) {
    let currArr = arr;

    function sorting(arg) {
        if (arg == 'asc') {
            return currArr.sort((a, b) => a - b);
        } else if (arg == 'desc') {
            return currArr.sort((a, b) => b - a);
        }
    }

    console.log(sorting(arg1));
}



solve([14, 7, 17, 6, 8], 'desc');