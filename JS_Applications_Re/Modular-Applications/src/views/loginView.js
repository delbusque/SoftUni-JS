import { render } from '../../node_modules/lit-html/lit-html.js'
import loginTemplate from '../templates/loginTemplate.js'
import * as authService from '../services/authService.js'
let rootElement = document.querySelector('.root');

export function loginView() {
    render(loginTemplate(), rootElement);
}

function onLogin(e) {
    e.preventDefault();
    let formData = new formData(e.currentTarget)
    let email = formData.get('email').trim()
    let password = formData.get('password').trim()
    authService.login(email, password).then(() => {
        ctx.page.redirect('/')
    })
});