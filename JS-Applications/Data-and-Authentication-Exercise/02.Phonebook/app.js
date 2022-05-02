const url = 'http://localhost:3030/jsonstore/phonebook';

const phoneBookElement = document.getElementById('phonebook');
const loadButton = document.getElementById('btnLoad');

const nameInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');
const createButton = document.getElementById('btnCreate');


loadButton.addEventListener('click', e => {
    loadPhonebook();
});

phoneBookElement.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        e.target.parentElement.parentElement.remove();
        fetch(`${url}/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
});

createButton.addEventListener('click', e => {
    if(nameInput.value !== '' || phoneInput.value !== ''){
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: nameInput.value,
                phone: phoneInput.value
            })
        });
        nameInput.value = '';
        phoneInput.value = '';
        loadPhonebook();
    }
});

function loadPhonebook(){
    phoneBookElement.innerHTML = '';
    fetch(url).then(prom => prom.json())
        .then(data => {
            let phonebookData = Object.keys(data).map((key) => [key, data[key]]);
            phonebookData.forEach(entry => {
                let name = entry[1].person;
                let number = entry[1].phone;
                let id = entry[1]._id;
                let entryElement = document.createElement('tr');

                let tnameElement = document.createElement('td');
                let tnumberElement = document.createElement('td');
                let tactionElement = document.createElement('td');
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.id = id;
                tactionElement.appendChild(deleteButton);

                entryElement.appendChild(tnameElement);
                entryElement.appendChild(tnumberElement);
                entryElement.appendChild(tactionElement);
                tnameElement.textContent = name;
                tnumberElement.textContent = number;

                phoneBookElement.appendChild(entryElement);
            });
        });
};