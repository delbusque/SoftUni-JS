function calculator() {
    let numbOneElement;
    let numbTwoElement;
    let resultElement;

    let action = {
        init(selector1, selector2, resultSelector) {
            numbOneElement = document.querySelector(selector1);
            numbTwoElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add() {
            resultElement.value = Number(numbOneElement.value) + Number(numbTwoElement.value);
            numbOneElement.value = '';
            numbTwoElement.value = '';
        },
        subtract() {
            resultElement.value = Number(numbOneElement.value) - Number(numbTwoElement.value);
            numbOneElement.value = '';
            numbTwoElement.value = '';
        }
    }

    return action;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 