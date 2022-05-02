const url =  'http://localhost:3030/jsonstore/messenger';

const authorInput = document.getElementById('author');
const msgInput = document.getElementById('content');
const messagesArea = document.getElementById('messages');

let submitButton = document.getElementById('submit');
let refreshButton = document.getElementById('refresh');

submitButton.addEventListener('click', e => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'author': authorInput.value,
            'content': msgInput.value
        })
    })
    .then(promise => promise.json())
    .then(data => console.log(data))
});

refreshButton.addEventListener('click', e => {
    messagesArea.textContent = '';
    messagesStr = '';
    fetch(url).then(resp => resp.json())
    .then(data => {
        let arrData = Object.keys(data).map((key) => [key, data[key]]);
        arrData.forEach(p => {
            let name = p[1].author;
            let message = p[1].content;
            messagesArea.textContent += `${name}: ${message}\n`;
        });    
        messagesArea.textContent = messagesArea.textContent.trimEnd();  
    });
});