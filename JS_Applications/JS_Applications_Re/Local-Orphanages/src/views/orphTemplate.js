import { html } from '../../../node_modules/lit-html/lit-html.js';

export const orphTemplate = (orph) => html `

                <div class="post">
                    <h2 class="post-title">${orph.title}</h2>
                    <img class="post-image" src="${orph.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/orphs/${orph._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
`