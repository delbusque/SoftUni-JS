import { html } from '../../node_modules/lit-html/lit-html.js'

import * as moviesService from '../services/moviesService.js'
import movieCard from '../templates/movieCardTemplate.js';

const moviesTemplate = (movies) => html `
<ul class="movie-list">
${movies.map(movie => {
    return html`<li>${movieCard(movie)}</li>`
    })}
    </ul>`

export function moviesView(ctx) {
    moviesService.getAll().then(movies => {
        ctx.render(moviesTemplate(movies))
    })
}

export function myMoviesView(ctx) {
    moviesService.getMyMovies(ctx.userId).then(movies => {
        ctx.render(moviesTemplate(movies))
    })
}