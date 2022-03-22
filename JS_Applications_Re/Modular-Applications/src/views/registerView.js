import registerTemplate from '../templates/registerTemplate.js'
import * as authService from '../services/authService.js'

export function registerView(ctx) {

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        authService.register(email, password).then(() => {
            ctx.page.redirect('/movies')
        })
    };

    ctx.render(registerTemplate(onRegisterSubmit));
}