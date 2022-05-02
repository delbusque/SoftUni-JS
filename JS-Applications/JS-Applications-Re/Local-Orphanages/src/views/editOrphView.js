import { html } from '../../../node_modules/lit-html/lit-html.js';
import * as orphService from '../services/orphService.js';
import { checkOrphForm } from '../helpers.js';

const editOrphTemplate = (orph, onSubmit) => html `
<!-- Edit Page (Only for logged-in users) -->
<section id="edit-page" class="auth">
            <form id="edit" @submit=${onSubmit}>
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value="${orph.title}">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value="${orph.description}">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value="${orph.imageUrl}">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value="${orph.address}">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value="${orph.phone}">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>
`
export const renderEditOrph = (ctx) => {
    let orphId = ctx.params.orphId;

    const onSubmit = (e) => {
        e.preventDefault();

        let orph = Object.fromEntries(new FormData(e.currentTarget));

        if (!checkOrphForm(orph)) {
            return;
        }

        orphService.update(orphId, orph).then(() => ctx.page.redirect(`/orphs/${orphId}`));
    }

    orphService.getOne(orphId).then(orph => {
        if (orph._ownerId != ctx.user._id) {
            ctx.page.redirect('/')
            return;
        };

        ctx.render(editOrphTemplate(orph, onSubmit));
    })
};