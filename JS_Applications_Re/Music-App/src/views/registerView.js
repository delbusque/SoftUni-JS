import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkAlbumForm } from '../helpers.js';

const registerTemplate = (onSubmit) => html `
        <!--Registration-->
        <section id="registerPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`;

export function renderRegister(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let album = Object.fromEntries(new FormData(e.currentTarget));
        let email = album.email;
        let password = album.password;
        let repeatPass = album['conf-pass'];

        if (!checkAlbumForm(album)) {
            alert('Please fill all the empty fields !')
            return;
        }
        if (password !== repeatPass) {
            alert('Passwords do not match !')
            return;
        }
        authService.register(email, password).then(() => {
            if (authService.isUser()) {
                ctx.page.redirect('/')
            }
        })
    }

    ctx.render(registerTemplate(onSubmit));
}