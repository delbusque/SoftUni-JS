import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../services/bookService.js';
import { bookTemplate } from './bookTemplate.js'

const myBooksTemplate = (books = []) => html `
<!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            <ul class="my-books-list">
            ${books.map(bookTemplate)}     

            <!-- Display paragraph: If there are no books in the database -->
             ${books.length == 0 
             ? html`<p class="no-books">No books in database!</p>`
             : nothing}
            </ul>
        </section>
`

export const renderMyBooks = (ctx) => {

    bookService.getOwn(ctx.user._id).then(books=>{
        ctx.render(myBooksTemplate(books))
    })
};