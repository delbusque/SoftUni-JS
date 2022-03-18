import { html } from '../../node_modules/lit-html/lit-html.js'
import movieCard from './movieCardTemplate.js';

function detailsClick(e) {
    // TODO:
}
export default (movies) => html `
<ul class="movie-list">
${movies.map(movie => {
    movie.isDisabled = false;
    movie.detailsClick = detailsClick;
    return html`<li>${movieCard(movie)}</li>`
    })}
    </ul>`