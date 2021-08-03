const loginURL = 'http://localhost:3030/users/login';
fetch(loginURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'admin@abv.bg',
        password: 'admin'
    })
}).then(resp => resp.json())
    .then(data => {
        let token = data.accessToken;
        localStorage.setItem('auth_token', token);
    });

const booksURL = 'http://localhost:3030/jsonstore/collections/books';

const tableBodyElement = document.getElementById('books');
const loadButton = document.getElementById('loadBooks');
const containerElement = document.querySelector('div');

loadButton.addEventListener('click', e => {

    tableBodyElement.innerHTML = '';

    fetch(booksURL).then(resp => resp.json())
        .then(data => {
            let booksData = Object.keys(data).map((key) => [key, data[key]]);
            booksData.forEach(book => {
                let title = book[1].title;
                let author = book[1].author;
                let id = book[0];
                bookFactory(title, author, id);
            });
        });
});

const submitButton = document.querySelector('.createForm button');
const titleInput = document.querySelector(".createForm input");
const authorInput = document.querySelector(".createForm input:nth-of-type(2)");

submitButton.addEventListener('click', e => {
    e.preventDefault();

    if (titleInput.value !== '' && authorInput.value !== '') {
        fetch(booksURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('auth_token'),
            },
            body: JSON.stringify({
                title: titleInput.value,
                author: authorInput.value
            })
        }).then(resp => resp.json())
            .then(book => {

                let title = book.title;
                let author = book.author;
                let id = book._id;
                bookFactory(title, author, id);

            })
    };
    titleInput.value = '';
    authorInput.value = '';
});

function bookFactory(title, author, id) {
    const entryRow = document.createElement('tr');
    entryRow.setAttribute('id', id);
    const titleTd = document.createElement('td');
    const authorTd = document.createElement('td');
    titleTd.textContent = title;
    authorTd.textContent = author;
    const actionTd = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    actionTd.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    actionTd.appendChild(deleteButton);

    entryRow.appendChild(titleTd);
    entryRow.appendChild(authorTd);
    entryRow.appendChild(actionTd);

    tableBodyElement.appendChild(entryRow);
    containerElement.prepend(loadButton);
};

tableBodyElement.addEventListener('click', e => {
    const saveButton = document.querySelector('.editForm button');
    const cancelButton = document.getElementById('cancelBtn');
    const editTitleInput = document.querySelector(".editForm input");
    const editAuthorInput = document.querySelector(".editForm input:nth-of-type(2)");
    let bookElements = e.target.parentElement.parentElement.children;

    if (e.target.tagName == 'BUTTON' && e.target.textContent == 'Edit') {

        let bookId = e.target.parentElement.parentElement.id;
        let title = bookElements[0].textContent;
        let author = bookElements[1].textContent;
        editTitleInput.value = title;
        editAuthorInput.value = author;
        let createForm = document.querySelector('.createForm');
        let editForm = document.querySelector('.editForm');
        createForm.style.display = 'none';
        editForm.style.display = 'block';

        cancelButton.addEventListener('click', c => {
            createForm.style.display = 'block';
            editForm.style.display = 'none';
        });

        saveButton.addEventListener('click', s => {
            s.preventDefault();

            let newTitle = document.querySelector('.editForm input');
            let newAuthor = document.querySelector('.editForm input:nth-of-type(2)');
            fetch(`${booksURL}/${bookId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': localStorage.getItem('auth_token'),
                },
                body: JSON.stringify({
                    title: newTitle.value,
                    author: newAuthor.value
                })
            })
        })
    };

})