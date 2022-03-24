import moviesTemplate from '../templates/moviesTemplate.js'
import moviesService from '../services/moviesService.js'
import { getMyMovies } from '../services/moviesService.js'

export function moviesView(ctx) {
    moviesService.getAll().then(movies => {
        ctx.render(moviesTemplate(movies))
    })
}

export function myMoviesView(ctx) {
    getMyMovies(ctx.userId).then(movies => {
        ctx.render(moviesTemplate(movies))
    })
}