import fetchLibrary from './fetchLibrary.js';

let libraryDivElement = document.getElementById('libraryDiv');


let authSection = document.querySelector('.auth');
let loginButton = document.querySelector('.btn');
let booksDivElement = document.getElementById('booksDiv');
let bookNameInput = document.getElementById('staticEmail2');
let authorNameInput = document.getElementById('inputPassword2');

function showPage() {
    authSection.classList.remove('hidden');
    fetchLibrary();
    libraryDivElement.classList.remove('hidden');
    booksDivElement.classList.add('hidden');
    loginButton.value = 'Add book';
    bookNameInput.placeholder = 'Book';
    authorNameInput.placeholder = 'Author';
    authorNameInput.type = 'text';
}


export default {
    showPage
};