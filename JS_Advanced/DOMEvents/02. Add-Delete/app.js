function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let listItemsElement = document.getElementById('items');
    const newLi = document.createElement('li');
    listItemsElement.appendChild(newLi);
    newLi.textContent = inputTextElement.value;
    inputTextElement.value = '';

    
}