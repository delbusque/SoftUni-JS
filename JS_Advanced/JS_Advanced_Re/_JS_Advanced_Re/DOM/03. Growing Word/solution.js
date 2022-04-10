function growingWord() {
    let outputElement = document.getElementById('exercise');
    let pOutputElement = outputElement.getElementsByTagName('p');

    if (!pOutputElement[0].style.fontSize) {
        pOutputElement[0].style.fontSize = '2px';
        pOutputElement[0].style.color = 'blue';
    } else {
        let fontSize = parseInt(pOutputElement[0].style.fontSize);
        fontSize *= 2;
        pOutputElement[0].style.fontSize = `${fontSize}px`;
        let color = pOutputElement[0].style.color;

        if (color === 'blue') {
            pOutputElement[0].style.color = 'green'
        } else if (color == 'green') {
            pOutputElement[0].style.color = 'red'
        } else {
            pOutputElement[0].style.color = 'blue'
        }
    }
}