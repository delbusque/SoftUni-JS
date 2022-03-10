import fetchBooks from './fetchBooks.js';

let authSection = document.querySelector('.auth');
let loginButton = document.querySelector('.btn');
let booksDivElement = document.getElementById('booksDiv');
let bookNameInput = document.getElementById('staticEmail2');
let authorNameInput = document.getElementById('inputPassword2');

function showPage() {
    authSection.classList.remove('hidden');
    loginButton.value = 'Add book';
    bookNameInput.placeholder = 'Book';
    authorNameInput.placeholder = 'Author';
    authorNameInput.type = 'text';
    booksDivElement.classList.add('hidden');
    fetchBooks();
    booksDivElement.classList.remove('hidden');
}

function hidePage() {
    authSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};