function solve(a, b, c) {
    console.log(a.length + b.length + c.length);
    let totalLength = a.length + b.length + c.length;
    console.log(Math.floor(totalLength / 3));
}

solve('chocolate', 'ice cream', 'cake');