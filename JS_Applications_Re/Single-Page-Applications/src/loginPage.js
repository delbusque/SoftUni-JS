let authSection = document.querySelector('.auth');
let loginButton = document.querySelector('.btn');
let booksDivElement = document.getElementById('booksDiv');
let emailInput = document.getElementById('staticEmail2');
let passwordInput = document.getElementById('inputPassword2');

function showPage() {
    authSection.classList.remove('hidden');
    loginButton.value = 'Login';
    emailInput.placeholder = 'Email';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    booksDivElement.classList.add('hidden');
}

function hidePage() {
    authSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};