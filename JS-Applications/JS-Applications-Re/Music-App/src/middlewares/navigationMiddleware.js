import { render } from '../../node_modules/lit-html/lit-html.js';
import { renderNavigation } from '../views/navigationView.js';

const navigationElement = document.querySelector('header');

export function navigationMiddleware(ctx, next) {

    render(renderNavigation(ctx), navigationElement);

    next();
};