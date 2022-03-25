import { html } from '../../node_modules/lit-html/lit-html.js'

const homeTemplate = () => html `
<img src="../movies.jpg" class="img-fluid" alt="...">
`
export function homeView(ctx) {

    ctx.render(homeTemplate());
}