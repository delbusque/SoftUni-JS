import movieTemplate from '../templates/movieTemplate.js'
import moviesService from '../services/moviesService.js'

export function movieView(ctx) {
    moviesService.getOne(ctx.params.id).then(movie => {
        ctx.render(movieTemplate(movie))
    })
}