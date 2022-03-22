import moviesTemplate from '../templates/moviesTemplate.js'
import moviesService from '../services/moviesService.js'

export function moviesView(ctx) {
    moviesService.getAll().then(movies => {
        ctx.render(moviesTemplate(movies))
    })
}