import * as bookService from '../services/bookService.js';

export const renderDeleteBook = (ctx) => {
    const bookId = ctx.params.bookId;

    bookService.getOne(bookId).then(book => {
        if (book._ownerId != ctx.user._id) {
            ctx.page.redirect('/books');

            throw 'Wrong book owner';
        }
        if (confirm(`Do you really want to delete ${book.title} ?`)) {
            return bookService.del(bookId);
        } else {
            throw 'Abort deletion'
        }

    }).then(() => ctx.page.redirect('/'));

}