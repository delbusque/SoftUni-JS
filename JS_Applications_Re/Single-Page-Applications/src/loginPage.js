let authSection = document.querySelector('.auth');
let loginButton = document.querySelector('.col-auto button');


function showPage() {
    authSection.classList.remove('hidden');
    loginButton.textContent = 'Login';
}

function hidePage() {
    authSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};