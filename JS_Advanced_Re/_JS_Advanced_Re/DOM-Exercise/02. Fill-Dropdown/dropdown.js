function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');

    let selectElement = document.querySelector('select');
    let optionElement = document.createElement('option');
    optionElement.textContent = textElement.value;
    optionElement.value = valueElement.value;

    selectElement.appendChild(optionElement);
    textElement.value = '';
    valueElement.value = '';

}