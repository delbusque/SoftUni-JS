import fetchBooks from './fetchBooks.js';

let authSection = document.querySelector('.auth');
let booksDivElement = document.getElementById('booksDiv');

let fetchMe = {
    fetchBooks
}

function showPage() {
    authSection.classList.add('hidden');
    fetchMe.fetchBooks();
    booksDivElement.classList.remove('hidden');
}

export default {
    showPage,
};