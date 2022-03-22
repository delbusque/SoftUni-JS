import { render } from '../../node_modules/lit-html/lit-html.js'

let rootElement = document.querySelector('.root');
const pageRender = (templateResult) => render(templateResult, rootElement);

export function renderMiddleware(ctx, next) {
    ctx.render = pageRender;

    next();
}