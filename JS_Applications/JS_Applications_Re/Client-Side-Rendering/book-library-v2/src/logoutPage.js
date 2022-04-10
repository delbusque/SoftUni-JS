import booksPage from '/src/booksPage.js';
import fetchBooks from '/src/fetchBooks.js';

let pages = {
    books: booksPage,
    fetchBooks
}

let baseUrl = `http://localhost:3030`;

let logoutNavElement = document.getElementById('logout-nav');
let libraryNavElement = document.getElementById('library-nav');
let loginNavElement = document.getElementById('login-nav');
let registerNavElement = document.getElementById('register-nav');

function showPage() {
    logoutNavElement.classList.add('hidden');
    loginNavElement.classList.remove('hidden');
    registerNavElement.classList.remove('hidden');

    fetch(`${baseUrl}/users/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('auth_token')
        }
    });
    libraryNavElement.classList.add('hidden');
    pages.books.showPage();
}

export default {
    showPage,
};