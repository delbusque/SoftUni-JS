import { html } from '../../node_modules/lit-html/lit-html.js'
import * as moviesService from '../services/moviesService.js'

const privateButtons = (_id) => html `
<div>
<a href="/my-movies/${_id}/edit" class="up-down-edit btn btn-success">Edit</a>
<a class="up-down-edit btn btn-danger">Delete</a>
</div>
`
const publicButtons = (_id) => html `
<div>
<a class="up-down-edit btn btn-primary">Up</a>
<a class="up-down-edit btn btn-primary">Down</a>
</div>`

const movieTemplate = ({
    title,
    description,
    img,
    isOwn,
    _id
}) => html `
<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="${title}">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    ${isOwn
? privateButtons(_id)
: publicButtons(_id)}
</div>
</div>
`
export function movieView(ctx) {
    moviesService.getOne(ctx.params.id)
        .then(movie => {
            let templateMovie = {
                isOwn: movie._ownerId == ctx.userId,
                ...movie
            }
            ctx.render(movieTemplate(templateMovie))
        })
}