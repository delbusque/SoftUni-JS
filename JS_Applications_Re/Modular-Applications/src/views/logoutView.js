import moviesTemplate from '../templates/moviesTemplate.js'
import * as authService from '../services/authService.js'

export function logoutView(ctx) {

    const onLogoutClick = (e) => {
        e.preventDefault();

        authService.logout().then(() => {
            ctx.page.redirect('/movies')
        })
    };

    return navigationView(ctx.isNotAuthenticated, onLogoutClick);
}