import { html, nothing } from '../../../node_modules/lit-html/lit-html.js';
import * as orphService from '../services/orphService.js';
import { orphTemplate } from './orphTemplate.js';

const orphelpTemplate = (orphs = []) => html `
        <!-- Dashboard -->
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>

            <!-- Display a div with information about every post (if any)-->
            <div class="all-posts">
            ${orphs.map(orphTemplate)}

             <!-- Display an h1 if there are no posts -->
             ${orphs.length == 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>` : nothing} 

            </div>
        </section>
`;

export const renderOrphelp = (ctx) => {
    orphService.getAll().then(orphs => {        
        ctx.render(orphelpTemplate(orphs))
    })
};