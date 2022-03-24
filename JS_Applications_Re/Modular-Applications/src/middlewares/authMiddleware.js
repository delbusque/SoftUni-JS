import * as authService from '../services/authService.js'

export function authMiddleware(ctx, next) {
    let userData = authService.getData();

    if (userData.accessToken) {
        ctx.userId = userData._id;
        ctx.isAuthenticated = true;
        ctx.email = userData.email;
        ctx.token = userData.accessToken;
    }

    next();
}