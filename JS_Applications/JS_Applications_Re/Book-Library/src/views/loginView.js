import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkBookForm } from '../helpers.js';


const loginTemplate = (onSubmit) => html `
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`;

export function renderLogin(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let book = Object.fromEntries(new FormData(e.currentTarget));
        let email = book.email;
        let password = book.password;

        if (!checkBookForm(book)) {
            return;
        }

        authService.login(email, password).then((user) => {
            if (user.code == 403) {
                localStorage.removeItem('user');
                alert(`Login or password don't match`);
                return;
            }
            ctx.page.redirect('/')
        })
    };

    ctx.render(loginTemplate(onSubmit));
};