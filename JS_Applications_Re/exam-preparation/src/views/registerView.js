import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { checkCarForm } from '../helpers.js';

const registerTemplate = (onSubmit) => html `
        <!-- Register Page -->
        <section id="register">
            <div class="container">
                <form id="register-form" @submit=${onSubmit}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export function renderRegister(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let car = Object.fromEntries(new FormData(e.currentTarget));
        let username = car.username;
        let password = car.password;
        let repeatPass = car['repeatPass'];

        if (!checkCarForm(car)) {
            alert('Please fill all the empty fields !')
            return;
        }
        if (password !== repeatPass) {
            alert('Passwords do not match !')
            return;
        }
        authService.register(username, password).then(() => {
            ctx.page.redirect('/listing')
        })

        ctx.render(registerTemplate(onSubmit));
    }