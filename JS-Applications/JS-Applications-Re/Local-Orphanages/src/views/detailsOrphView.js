import { html, nothing } from '../../../node_modules/lit-html/lit-html.js';
import * as orphService from '../services/orphService.js';
import { orphsData } from '../helpers.js';


const privateButtons = (orphId) => html `
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    <a href="/orphs/${orphId}/edit" class="edit-btn btn">Edit</a>
                    <a href="/orphs/${orphId}/delete" class="delete-btn btn">Delete</a>
`

const detailsOrphTemplate = (orph, showButtons, notOwnOrph) => html `
<!-- Details Page -->
<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${orph.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${orph.title}</h2>
                        <p class="post-description">Description: ${orph.description}</p>
                        <p class="post-address">Address: ${orph.address}</p>
                        <p class="post-number">Phone number: ${orph.phone}</p>
                        <p class="donate-Item">Donate Materials: ${orphsData[orph._id]}</p>

                        <div class="btns">
                        ${showButtons ? privateButtons(orph._id) : nothing}
                        </div>

                        <!--Bonus - Only for logged-in users ( not authors )-->
                        ${notOwnOrph ? html`<a 
                        @click=${(e)=>{
                        orphsData[orph._id]++;
                        e.target.remove();
                        }}
                        href="#" class="donate-btn btn">Donate</a>` : nothing}

                        
                    </div>
                </div>
            </div>
        </section>
`


export const renderOrphDetails = (ctx) => {

    orphService.getOne(ctx.params.orphId).then(orph => {
        if (!orphsData[orph._id]) {
            orphsData[orph._id] = 0;
        }

        let showButtons = Boolean(ctx.user) && orph._ownerId == ctx.user._id;
        let notOwnOrph = Boolean(ctx.user) && orph._ownerId !== ctx.user._id;

        ctx.render(detailsOrphTemplate(orph, showButtons, notOwnOrph))
    });
};