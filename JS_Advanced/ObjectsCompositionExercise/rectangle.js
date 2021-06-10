function rectangle(width, height, color) {
    
    let firstChar = color.charAt(0).toUpperCase();
    color = color.slice(1);
    color = `${firstChar}${color}`;

    const rect = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    };
    return rect;
}


let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());