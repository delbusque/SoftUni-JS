import { render } from './node_modules/lit-html/lit-html.js'
import moviesTemplate from './src/templates/moviesTemplate.js'
import moviesService from './src/services/moviesService.js'

let rootElement = document.querySelector('.root');

moviesService.getAll().then(movies => {
    render(moviesTemplate(movies), rootElement)
})