function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
        let secondNumElement = document.getElementById('secondNumber');
        let result = document.getElementById('result');
        result.textContent = Number(firstNumElement.value) - Number(secondNumElement.value);
}