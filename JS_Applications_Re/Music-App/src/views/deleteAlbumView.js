import * as albumService from '../services/albumService.js';

export const renderDeleteAlbum = (ctx) => {
    const albumId = ctx.params.albumId;

    albumService.getOne(albumId).then(album => {
        if (album._ownerId != ctx.user._id) {
            ctx.page.redirect('/catalog');
            throw 'Wrong album owner';
        }
        if (confirm(`Do you really want to delete ${album.name}`)) {
            return albumService.del(albumId);
        } else {
            throw 'Abort deletion'
        }

    }).then(() => ctx.page.redirect('/catalog'));

}