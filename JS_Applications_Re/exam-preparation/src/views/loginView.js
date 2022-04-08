import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkCarForm } from '../helpers.js';

const loginTemplate = (onSubmit) => html `
<!-- Login Page -->
<section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit=${onSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export function renderLogin(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let car = Object.fromEntries(new FormData(e.currentTarget));
        let username = car.username;
        let password = car.password;

        if (!checkBookForm(car)) {
            return;
        }

        authService.login(username, password).then((user) => {
            if (user.code == 403) {
                localStorage.removeItem('user');
                alert(`Login or password don't match`);
                return;
            }
            ctx.page.redirect('/listing')
        })
    };

    ctx.render(loginTemplate(onSubmit));
};