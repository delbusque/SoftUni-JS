import { html } from '../../node_modules/lit-html/lit-html.js'
import * as authService from '../services/authService.js'

const registerTemplate = (onSubmit) => html `
<form class="row g-3" @submit=${onSubmit}>
  <div class="col-auto">
    <label for="email" class="visually-hidden">Email</label>
    <input type="text" class="form-control" id="login-email" name="email" placeholder="Email">
  </div>
  <div class="col-auto">
    <label for="password" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="login-password" name="password" placeholder="Password">
  </div>
  <div class="col-auto">
    <input type="submit" class="btn btn-primary mb-3" value="Register">
  </div>
</form>
`
export function registerView(ctx) {

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        if (email && password) {
            authService.register(email, password).then(() => {
                ctx.page.redirect('/movies')
            })
        }
    };

    ctx.render(registerTemplate(onRegisterSubmit));
}