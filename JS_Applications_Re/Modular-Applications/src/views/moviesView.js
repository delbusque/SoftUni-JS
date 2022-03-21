import { render } from '../../node_modules/lit-html/lit-html.js'
import moviesTemplate from '../templates/moviesTemplate.js'
import moviesService from '../services/moviesService.js'

let rootElement = document.querySelector('.root');

export function moviesView(ctx) {
    moviesService.getAll().then(movies => {
        render(moviesTemplate(movies), rootElement)
    })
}