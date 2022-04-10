function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    resultElement.textContent = Number(firstNumElement.value) - Number(secondNumElement.value);
}