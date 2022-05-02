function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let listItemsElement = document.getElementById('items');
    
    const newLi = document.createElement('li');
    newLi.textContent = inputTextElement.value;
    
    listItemsElement.appendChild(newLi);
    
    inputTextElement.value = '';

    const newLink = document.createElement('link');


}