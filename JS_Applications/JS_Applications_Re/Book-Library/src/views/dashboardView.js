import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../services/bookService.js';
import { bookTemplate } from './bookTemplate.js';

const dashboardTemplate = (books = []) => html `
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
                ${books.map(bookTemplate)}          

               <!-- Display paragraph: If there are no books in the database -->
                ${books.length == 0 
                ?html`<p class="no-books">No books in database!</p>`
                : nothing}
                
            </ul>
        </section>
`;

export const renderDashboard = (ctx) => {
    bookService.getAll().then(books => {        
        ctx.render(dashboardTemplate(books))
    })
};