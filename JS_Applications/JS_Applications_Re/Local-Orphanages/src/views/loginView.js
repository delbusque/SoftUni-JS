import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkOrphForm } from '../helpers.js';


const loginTemplate = (onSubmit) => html `
<!-- Login Page (Only for Guest users) -->
<section id="login-page" class="auth">
            <form id="login" @submit=${onSubmit}>
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>
`;

export function renderLogin(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let orph = Object.fromEntries(new FormData(e.currentTarget));
        let email = orph.email;
        let password = orph.password;

        if (!checkOrphForm(orph)) {
            return;
        }

        authService.login(email, password).then((user) => {
            if (user.code == 403) {
                localStorage.removeItem('user');
                alert(`Login or password don't match !`);
                return;
            }
            ctx.page.redirect('/')
        })
    };

    ctx.render(loginTemplate(onSubmit));
};