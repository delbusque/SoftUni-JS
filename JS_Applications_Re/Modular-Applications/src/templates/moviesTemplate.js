import { html } from '../../node_modules/lit-html/lit-html.js'
import movieCard from './movieCardTemplate.js';

export default (movies) => html `
<ul class="movie-list">
${movies.map(movie => {
    return html`<li>${movieCard(movie)}</li>`
    })}
    </ul>`