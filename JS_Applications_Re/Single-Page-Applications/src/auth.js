import registerPage from '/src/registerPage.js';
import loginPage from '/src/loginPage.js';
import libraryPage from '/src/libraryPage.js';
import booksPage from '/src/booksPage.js';
import fetchBooks from '/src/fetchBooks.js';
import fetchLibrary from '/src/fetchLibrary.js';

let pages = {
    register: registerPage,
    login: loginPage,
    library: libraryPage,
    books: booksPage,
    fetchBooks,
    fetchLibrary
}



let ids = [];

let baseUrl = `http://localhost:3030`;
let authForm = document.querySelector('.row');
let logoutNavElement = document.getElementById('logout-nav');
let libraryNavElement = document.getElementById('library-nav');
let loginNavElement = document.getElementById('login-nav');
let registerNavElement = document.getElementById('register-nav');

authForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let authData = new FormData(e.currentTarget);
    let email = authData.get('email');
    let password = authData.get('password');
    let submitButtonElement = e.target.querySelector('.mb-3');

    if (submitButtonElement.value == 'Register') {
        fetch(`${baseUrl}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            if (data.code !== 400 && data.code !== 409) {
                getToken(data.accessToken);
                pages.register.hidePage();
                pages.books.showPage();
                logoutNavElement.classList.remove('hidden');
                libraryNavElement.classList.remove('hidden');
                loginNavElement.classList.add('hidden');
                registerNavElement.classList.add('hidden');
            }
        }).catch(err => {
            console.log(err)
        })

    } else if (submitButtonElement.value == 'Login') {
        fetch(`${baseUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            if (data.code !== 403) {
                getToken(data.accessToken);
                logoutNavElement.classList.remove('hidden');
                libraryNavElement.classList.remove('hidden');

                loginNavElement.classList.add('hidden');
                registerNavElement.classList.add('hidden');
                pages.login.hidePage();
                pages.books.showPage();
            }
        })
    } else if (submitButtonElement.value == 'Add book') {

        let author = authData.get('password');
        let title = authData.get('email');
        let token = localStorage.getItem('auth_token');

        if (author !== '' && title !== '') {
            fetch(`${baseUrl}/data/books`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': `${token}`,
                },
                body: JSON.stringify({
                    author,
                    title
                })
            }).then(res => res.json()).then(data => {
                ids.push(data._id);
                pages.fetchLibrary();
                pages.library.showPage();
            })
        }
    }

    authForm.reset();

})

function getToken(token) {
    localStorage.removeItem('auth_token');
    localStorage.setItem('auth_token', token);
}



export default {};