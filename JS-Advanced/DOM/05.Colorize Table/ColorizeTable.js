function colorize() {
    let evenLines = document.querySelectorAll('tr:nth-of-type(2n)');
    for (const item of evenLines) {
    item.style.backgroundColor = 'teal';
}
}