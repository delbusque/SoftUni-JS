function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let listItemsElement = document.getElementById('items');

    const newLi = document.createElement('li');

    newLi.textContent = inputTextElement.value;
    inputTextElement.value = '';

    listItemsElement.appendChild(newLi);
}
