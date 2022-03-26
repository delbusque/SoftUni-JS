import * as moviesService from '../services/moviesService.js'
import { movieFormTemplate } from '../templates/movieFormTemplate.js'


export function editMovieView(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('img');

        moviesService.update(ctx.params.id, title, imageUrl, description)
            .then(ctx.page.redirect(`/movies/${ctx.params.id}`))
    }

    moviesService.getOne(ctx.params.id)
        .then((movie => {
            ctx.render(movieFormTemplate(onSubmit, movie))
        }))
}