import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';

const privateButtons = (albumId) => html `
                <div class="actionBtn">
                    <a href="/catalog/${albumId}/edit" class="edit">Edit</a>
                    <a href="/catalog/${albumId}/delete" class="remove">Delete</a>
                </div>
`


const detailsAlbumTemplate = (album, showButtons) => html `
<!--Details Page-->
<section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="${album.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: $${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>Description: ${album.description}</p>
                    </div>

                    ${showButtons ? privateButtons(album._id) : nothing}

                </div>
            </div>
        </section>
`;

export const renderAlbumDetails = (ctx) => {

    albumService.getOne(ctx.params.albumId).then(album => {
        let showButtons = Boolean(ctx.user) && album._ownerId == ctx.user._id;

        ctx.render(detailsAlbumTemplate(album, showButtons))
    });
};