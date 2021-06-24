function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = textElement.value;
    newOptionElement.value = valueElement.value;

    let menuElement = document.getElementById('menu');
    menuElement.appendChild(newOptionElement);

    textElement.value = '';
    valueElement.value = '';  
}