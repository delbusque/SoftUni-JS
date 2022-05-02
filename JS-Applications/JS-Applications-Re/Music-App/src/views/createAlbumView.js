import { html } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';
import { checkAlbumForm } from '../helpers.js';

const createAlbumTemplate = (onSubmit) => html `
 <!--Create Page-->
 <section class="createPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Add Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" placeholder="Album name">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" placeholder="Price">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" placeholder="Description"></textarea>

                        <button class="add-album" type="submit">Add New Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;

export const renderCreateAlbum = (ctx) => {

    const onSubmit = (e) => {
        e.preventDefault();

        //let brand = formData.get('brand');
        //let model = formData.get('model');
        //let description = formData.get('description');
        //let year = formData.get('year');
        //let imageUrl = formData.get('imageUrl');
        //let price = formData.get('price');
        let album = Object.fromEntries(new FormData(e.currentTarget));

        if (!checkAlbumForm(album)) {
            // alert('You must fill all the empty fields');
            return;
        }

        album.price = Number(album.price);
        album.price = album.price.toFixed(2)

        albumService.create(album).then(() => {
            ctx.page.redirect('/catalog')
        });
    };

    ctx.render(createAlbumTemplate(onSubmit));
};