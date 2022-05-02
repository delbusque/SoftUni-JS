import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';
import { albumTemplate } from './albumTemplate.js';

const catalogTemplate = (albums = []) => html `
            <section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.map(albumTemplate)}          

                <!--No albums in catalog-->
                ${albums.length == 0 
                ? html`<p>No Albums in Catalog!</p>`
                : nothing}
        </section>

`;

export const renderCatalog = (ctx) => {
    albumService.getAll().then(albums => {
        ctx.render(catalogTemplate(albums))
    })
};