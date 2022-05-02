import { html, nothing } from '../../../node_modules/lit-html/lit-html.js';
import * as orphService from '../services/orphService.js';
import { orphTemplate } from './orphTemplate.js'

const myOrphsTemplate = (orphs = []) => html `
<!-- My Posts -->
<section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            <!-- Display a div with information about every post (if any)-->
            <div class="my-posts">
                ${orphs.map(orphTemplate)}

                  <!-- Display an h1 if there are no posts -->
                  ${orphs.length == 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`: nothing}
              
            </div>         
        </section>
`

export const renderMyOrphs = (ctx) => {

    orphService.getOwn(ctx.user._id).then(orphs=>{
        ctx.render(myOrphsTemplate(orphs))
    })
};