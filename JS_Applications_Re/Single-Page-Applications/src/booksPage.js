let baseUrl = `http://localhost:3030`
let authSection = document.querySelector('.auth');
let bookDisplay = document.querySelector('.book');
let booksObj = {};

function showPage() {
    authSection.classList.add('hidden');


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

    for (const [author, title] of Object.entries(booksObj)) {
        console.log(`${author}: ${title}`);
    }

    // Put outside showPage()



    //let currentBook = bookDisplay.cloneNode(true);
    //currentBook.classList.remove('hidden');
    //let bookNameElement = currentBook.querySelector('h5');
    //let bookAuthorElement = currentBook.querySelector('h6');
    //let booksDivElement = document.getElementById('booksDiv');
    //booksDivElement.appendChild(currentBook);


}

export default {
    showPage,
};