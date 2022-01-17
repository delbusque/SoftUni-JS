function solve() {
    let buttonElement = document.querySelector('button');
    let orderedListElement = document.querySelector('ol');
    let letters = orderedListElement.querySelectorAll('li');
    let inputElement = document.querySelector('input');


    buttonElement.addEventListener('click', () => {
        if (inputElement.value[0] == 'A') {
            if (!letters[0].textContent) {
                letters[0].textContent = inputElement.value;
                inputElement.value = '';
            } else {
                letters[0].textContent += `, ${inputElement.value}`;
                inputElement.value = '';
            }
        } else if (inputElement.value[0] == 'B') {
            if (!letters[1].textContent) {
                letters[1].textContent = inputElement.value;
                inputElement.value = '';
            } else {
                letters[1].textContent += `, ${inputElement.value}`;
                inputElement.value = '';
            }
        }
    })
}