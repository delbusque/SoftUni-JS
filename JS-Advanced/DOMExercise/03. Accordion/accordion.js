function toggle() {
    let buttonElement = document.querySelector('.button');
    let hiddenTextElement = document.getElementById('extra');

    //  if(buttonElement.textContent === 'More'){
    //      buttonElement.textContent = 'Less';
    //      hiddenTextElement.style.display = 'block';
    //  }
    //  else if(buttonElement.textContent === 'Less'){
    //      buttonElement.textContent = 'More';
    //      hiddenTextElement.style.display = 'none';
    //  }

    hiddenTextElement.style.display = hiddenTextElement.style.display === 'block' ? 'none' : 'block';
    buttonElement.textContent = buttonElement.textContent === 'Less' ? 'More' : 'Less';

}