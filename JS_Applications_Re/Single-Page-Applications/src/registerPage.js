let authSection = document.querySelector('.auth');
let registerButton = document.querySelector('.col-auto button');


function showPage() {
    authSection.classList.remove('hidden');
    registerButton.textContent = 'Register';
}

function hidePage() {
    authSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};