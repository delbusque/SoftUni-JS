import { navigationMiddleware } from './middlewares/navigationMiddleware.js'
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

import page from '../node_modules/page/page.mjs'

import { renderLogin } from './views/loginView.js'
import { renderRegister } from './views/registerView.js';
import { renderLogout } from './views/logoutView.js';
import { renderDashboard } from './views/dashboardView.js';
import { renderBookDetails } from './views/detailsBookView.js';
import { renderEditBook } from './views/editBookView.js';
import { renderDeleteBook } from './views/deleteBookView.js';
import { renderAddBook } from './views/addBookView.js';
import { renderMyBooks } from './views/myBooksView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware)


page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', renderLogout);
page('/', renderDashboard);
page('/add', renderAddBook);
page('/myBooks', renderMyBooks);
page('/books/:bookId', renderBookDetails);
page('/books/:bookId/edit', renderEditBook);
page('/books/:bookId/delete', renderDeleteBook);


page.start()