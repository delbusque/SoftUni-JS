import { html } from '../../node_modules/lit-html/lit-html.js'
import { create } from '../services/moviesService.js'

const addMovieTemplate = (onSubmit) => html `
<form class="add-form" @submit=${onSubmit}>
<div class="mb-3">
  <label for="movie-title" class="form-label">Title</label>
  <input type="text" class="form-control" id="movie-title" name="title">
</div>
<div class="mb-3">
  <label for="movie-image-url" class="form-label">Image Url</label>
  <input type="text" class="form-control" id="movie-image-url" name="img">
</div>
<div class="mb-3">
  <label for="movie-description" class="form-label">Description</label>
  <textarea class="form-control" id="movie-description" name="description" rows="3"></textarea>
</div>
<div class="mb-3">
<input type="submit" class="form-control btn btn-primary" value="Create"/>
</form>
</div>
`

export function addMoviewView(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('img');



        create(title, imageUrl, description).then(data => {
            console.log('Created');
        })

    }
    ctx.render(addMovieTemplate(onSubmit))
}