import { create } from '../services/moviesService.js'
import { movieFormTemplate } from '../templates/movieFormTemplate.js'


export function addMovieView(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('img');
        if (title) {
            create(title, imageUrl, description).then(() => {
                ctx.page.redirect('/movies')
            })
        }
    }
    ctx.render(movieFormTemplate(onSubmit))
}