export function checkAlbumForm(albumData) {

    return Object.values(albumData).every(v => v);
};