import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkOrphForm } from '../helpers.js';


const registerTemplate = (onSubmit) => html `
<!-- Register Page (Only for Guest users) -->
<section id="register-page" class="auth">
            <form id="register" @submit=${onSubmit}>
                <h1 class="title">Register</h1>

                <article class="input-group">
                    <label for="register-email">Email: </label>
                    <input type="email" id="register-email" name="email">
                </article>

                <article class="input-group">
                    <label for="register-password">Password: </label>
                    <input type="password" id="register-password" name="password">
                </article>

                <article class="input-group">
                    <label for="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword">
                </article>

                <input type="submit" class="btn submit-btn" value="Register">
            </form>
        </section>
`;

export function renderRegister(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let orph = Object.fromEntries(new FormData(e.currentTarget));
        let email = orph.email;
        let password = orph.password;
        let repeatPass = orph['repeatPassword'];

        if (!checkOrphForm(orph)) {
            alert('Please fill all the empty fields !')
            return;
        }
        if (password !== repeatPass) {
            alert('Passwords do not match !')
            return;
        }
        authService.register(email, password).then(() => {
            ctx.page.redirect('/')
        })
    }

    ctx.render(registerTemplate(onSubmit));
}