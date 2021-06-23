function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let listItemsElement = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = inputTextElement.value;
    inputTextElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.setAttribute('href', '#');
    deleteElement.addEventListener('click', ()=>{
        newLi.remove();
    })

    newLi.appendChild(deleteElement);
    listItemsElement.appendChild(newLi);    
}