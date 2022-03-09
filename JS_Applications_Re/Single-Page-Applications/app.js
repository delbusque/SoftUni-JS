import registerPage from '/src/registerPage.js';
import loginPage from '/src/loginPage.js';
import libraryPage from '/src/libraryPage.js';
import booksPage from '/src/booksPage.js';




let navbarElement = document.querySelector('.navbar-nav');

let pages = {
    register: registerPage,
    login: loginPage,
    library: libraryPage,
    books: booksPage
}

navbarElement.addEventListener('click', (e) => {
    e.preventDefault();
    let currentDataLink = e.target.getAttribute('data-link');
    let currentView = pages[currentDataLink];
    currentView.showPage();
})