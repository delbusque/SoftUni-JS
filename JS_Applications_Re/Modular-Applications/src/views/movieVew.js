import { render } from '../../node_modules/lit-html/lit-html.js'
import movieTemplate from '../templates/movieTemplate.js'
import moviesService from '../services/moviesService.js'

let rootElement = document.querySelector('.root');

export function movieView(ctx) {
    moviesService.getOne(ctx.params.id).then(movie => {
        render(movieTemplate(movie), rootElement)
    })
}