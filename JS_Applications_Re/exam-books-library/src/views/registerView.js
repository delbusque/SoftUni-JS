import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkBookForm } from '../helpers.js';


const registerTemplate = (onSubmit) => html `
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="register">
            <form @submit=${onSubmit} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;

export function renderRegister(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let book = Object.fromEntries(new FormData(e.currentTarget));
        let email = book.email;
        let password = book.password;
        let repeatPass = book['confirm-pass'];

        if (!checkBookForm(book)) {
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