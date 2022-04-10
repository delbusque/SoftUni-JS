function arrayMap(arr, func) {
    return arr.reduce((a, x) => {

        a.push(func(x));
        return a;

    }, [])
}

console.log(arrayMap([1, 2, 3, 4, 5], x => x * 2));

let letters = ["a", "b", "c"];
console.log(arrayMap(letters, l => l.toLocaleUpperCase()))