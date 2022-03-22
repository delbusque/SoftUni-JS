import { render } from '../../node_modules/lit-html/lit-html.js'
import { navigationView } from '../views/navigationView.js'

let rootElement = document.querySelector('.root');
let navigationElement = document.querySelector('.navigation')

const pageRender = (templateResult) => {
    render(templateResult, rootElement);
};

export function renderMiddleware(ctx, next) {
    render(navigationView(ctx), navigationElement)

    ctx.render = pageRender;

    next();
}