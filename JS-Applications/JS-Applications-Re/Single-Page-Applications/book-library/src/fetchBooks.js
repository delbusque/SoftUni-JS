let baseUrl = `http://localhost:3030`
let booksObj = {};

let bookDisplay = document.querySelector('.book');
let booksDivElement = document.getElementById('booksDiv');
let nestedBooksDivElement = document.createElement('div');
nestedBooksDivElement.classList.add('books-div');

function fetchBooks() {
    nestedBooksDivElement.innerHTML = "";
    fetch(`${baseUrl}/jsonstore/collections/books`)
        .then(res => res.json())
        .then(books => {
            Object.keys(books).forEach(b => {
                fetch(`${baseUrl}/jsonstore/collections/books/${b}`).then(res => res.json())
                    .then(data => {
                        booksObj[data.title] = data.author;
                    })
            });
        }).catch(error => {
            console.log(error)
        })

    for (const book of Object.entries(booksObj)) {
        let currentBook = bookDisplay.cloneNode(true);
        let bookNameElement = currentBook.querySelector('h5');
        let bookAuthorElement = currentBook.querySelector('h6');
        let bookLinksElements = currentBook.querySelectorAll('.card-body>a');
        bookLinksElements[0].textContent = 'Book';
        bookLinksElements[1].textContent = 'Author';
        bookNameElement.textContent = book[0];
        bookAuthorElement.textContent = book[1];
        currentBook.classList.add('books');
        currentBook.classList.remove('hidden');
        nestedBooksDivElement.appendChild(currentBook);
    }
    booksDivElement.appendChild(nestedBooksDivElement);
}


export default fetchBooks;