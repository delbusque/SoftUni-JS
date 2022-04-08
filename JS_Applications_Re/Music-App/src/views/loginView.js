import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkAlbumForm } from '../helpers.js';


const loginTemplate = (onSubmit) => html `
<!--Login-->
<section id="loginPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`;

export function renderLogin(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let album = Object.fromEntries(new FormData(e.currentTarget));
        let email = album.email;
        let password = album.password;

        if (!checkAlbumForm(album)) {
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