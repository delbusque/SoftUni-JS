import fetchBooks from './fetchBooks.js';

let authSection = document.querySelector('.auth');
let booksDivElement = document.getElementById('booksDiv');
let libraryDivElement = document.getElementById('libraryDiv');

function showPage() {
    authSection.classList.add('hidden');
    fetchBooks();
    booksDivElement.classList.remove('hidden');
    libraryDivElement.classList.add('hidden');
}

export default {
    showPage,
};