import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as bookService from '../services/bookService.js';
import { likesData } from '../helpers.js';


const privateButtons = (bookId) => html `
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    <a class="button" href="/books/${bookId}/edit">Edit</a>
                    <a class="button" href="/books/${bookId}/delete">Delete</a>
`

const likeButton = (book) => html `
<a @click=${()=>{
    likesData[book._id]++;
    }} class="button" href="#" id="like-button">Like</a>
`

const detailsBookTemplate = (book, showButtons, notOwnBook) => html `
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>  
                <div class="actions">     
                    ${showButtons ? privateButtons(book._id) : nothing}

                    ${notOwnBook ? likeButton(book) : nothing}

                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likesData[book._id]}</span>
                    </div>
                    
            </div>
            </div>
            
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>

            </div>
        </section>
`


export const renderBookDetails = (ctx) => {

    bookService.getOne(ctx.params.bookId).then(book => {
        if (!likesData[book._id]) {
            likesData[book._id] = 0;
        }

        let showButtons = Boolean(ctx.user) && book._ownerId == ctx.user._id;
        let notOwnBook = Boolean(ctx.user) && book._ownerId !== ctx.user._id;

        ctx.render(detailsBookTemplate(book, showButtons, notOwnBook))
    });
};