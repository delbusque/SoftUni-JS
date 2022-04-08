import { html, nothing } from '../../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';


const privateButtons = (albumId) => html `
                    <div class="btn-group">
                        <a href="/catalog/${albumId}" id="details">Details</a>
                    </div>
`

export const albumTemplate = (album) => html `
            <div class="card-box">
                <img src="${album.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${album.name}</p>
                        <p class="artist">Artist: ${album.artist}</p>
                        <p class="genre">Genre: ${album.genre}</p>
                        <p class="price">Price: $${album.price}</p>
                        <p class="date">Release Date: ${album.releaseDate}</p>
                    </div>
                    ${authService.isUser() ? privateButtons(album._id) : nothing}
                </div>
            </div>
`;