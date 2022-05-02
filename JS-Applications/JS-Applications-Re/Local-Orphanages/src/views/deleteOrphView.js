import * as orphService from '../services/orphService.js';

export const renderDeleteOrph = (ctx) => {
    const orphId = ctx.params.orphId;

    orphService.getOne(orphId).then(orph => {
        if (orph._ownerId != ctx.user._id) {
            ctx.page.redirect('/orphs');

            throw 'Wrong orphelp owner';
        }
        if (confirm(`Do you really want to delete ${orph.title} ?`)) {
            return orphService.del(orphId);
        } else {
            throw 'Abort deletion'
        }

    }).then(() => ctx.page.redirect('/'));

}