import registerPage from '/src/registerPage.js';
import loginPage from '/src/loginPage.js';
import logoutPage from '/src/logoutPage.js';
import libraryPage from '/src/libraryPage.js';
import booksPage from '/src/booksPage.js';
import fetchBooks from '/src/fetchBooks.js';
import fetchLibrary from '/src/fetchLibrary.js';

import authObj from '/src/auth.js'

let navbarElement = document.querySelector('.navbar-nav');

let pages = {
    register: registerPage,
    login: loginPage,
    logout: logoutPage,
    library: libraryPage,
    books: booksPage,
    fetchBooks,
    fetchLibrary

}
pages.fetchBooks();


navbarElement.addEventListener('click', (e) => {
    e.preventDefault();
    let currentDataLink = e.target.getAttribute('data-link');
    let currentView = pages[currentDataLink];
    currentView.showPage();
})