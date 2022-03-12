let baseUrl = `http://localhost:3030`
let libraryObj = {};

let bookDisplay = document.querySelector('.book');
let libraryDivElement = document.getElementById('libraryDiv');
let nestedLibraryDivElement = document.createElement('div');

function fetchLibrary() {
    nestedLibraryDivElement.innerHTML = "";
    fetch(`${baseUrl}/data/books`)
        .then(res => res.json())
        .then(books => {
            if (books.code !== 404) {
                books.forEach(b => {
                    libraryObj[b.title] = b.author;
                });
            }
        }).catch(error => {
            console.log(error)
        })

    for (const book of Object.entries(libraryObj)) {
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
        nestedLibraryDivElement.appendChild(currentBook);

    }
    libraryDivElement.appendChild(nestedLibraryDivElement);
    console.log(libraryDivElement)
}


export default fetchLibrary;