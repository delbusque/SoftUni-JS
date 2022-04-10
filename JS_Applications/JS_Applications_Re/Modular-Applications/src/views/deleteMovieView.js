import { html } from '../../node_modules/lit-html/lit-html.js'

import * as moviesService from '../services/moviesService.js'

const deleteMovieTemplate = (movie, onClick) => html `
<div class="div-margin alert alert-danger" role="alert">
 Do you really want to delete movie ${movie.title} ?
</div>
  <div class="div-margin">
<a href="/movies/${movie._id}" class="up-down-edit btn btn-primary">Cancel</a>
<a @click=${onClick} class="up-down-edit btn btn-danger">Delete</a>
</div>
`
export function deleteMovieView(ctx) {
    const onMovieDelete = () => {
        moviesService.deleteMovie(ctx.params.id).then(res => {
            ctx.page.redirect('/movies')
        })
    }

    moviesService.getOne(ctx.params.id).then(movie => {
        ctx.render(deleteMovieTemplate(movie, onMovieDelete))
    })
}