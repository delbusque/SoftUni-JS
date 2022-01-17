function toggle() {
    let spanButtonElement = document.querySelector('span.button');
    let textElement = document.querySelector('#extra');

    if (spanButtonElement.textContent == 'More') {
        spanButtonElement.textContent = 'Less';
        textElement.style.setProperty('display', 'block');
    } else if (spanButtonElement.textContent == 'Less') {
        spanButtonElement.textContent = 'More';
        textElement.style.setProperty('display', 'none');
    }
}